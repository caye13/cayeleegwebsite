import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { connectMongo } from "@/lib/mongodb";
import { ProgressItem } from "@/models/ProgressItem";

function isHttpUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export async function GET() {
  await connectMongo();
  const items = await ProgressItem.find().sort({ createdAt: -1 }).lean();
  // serialize _id to id so the frontend can use it
  const serialized = items.map((item: any) => ({
    ...item,
    id: String(item._id),
    _id: undefined,
  }));
  return NextResponse.json(serialized);
}
const ALLOWED_EMAILS = (process.env.ADMIN_EMAIL ?? "").split(",").map(e => e.trim().toLowerCase());

function isAuthorized(email?: string | null) {
  return !!email && ALLOWED_EMAILS.includes(email.toLowerCase());
}

export async function POST(req: Request) {
  const user = await currentUser();
  const email = user?.emailAddresses?.[0]?.emailAddress;
  if (!isAuthorized(email)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();

  const links = Array.isArray(body.links)
    ? body.links
        .filter(
          (link: unknown) =>
            link &&
            typeof link === "object" &&
            "label" in link &&
            "url" in link &&
            typeof (link as { label: unknown; url: unknown }).label === "string" &&
            typeof (link as { label: unknown; url: unknown }).url === "string" &&
            isHttpUrl((link as { label: string; url: string }).url)
        )
        .map((link: { label: string; url: string }) => ({
          label: link.label.trim(),
          url: link.url.trim(),
        }))
    : [];

  await connectMongo();

  const item = await ProgressItem.create({
    title: String(body.title || "").trim(),
    category: String(body.category || "").trim() || "General",
    status: body.status ?? "Next",
    note: String(body.note || ""),
    links,
    createdAt: Date.now(),
  });

  return NextResponse.json(item);
}