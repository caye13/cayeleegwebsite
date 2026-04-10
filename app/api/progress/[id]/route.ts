import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { connectMongo } from "@/lib/mongodb";
import { ProgressItem } from "@/models/ProgressItem";

const ALLOWED_EMAILS = (process.env.ADMIN_EMAIL ?? "").split(",").map(e => e.trim().toLowerCase());

function isHttpUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch { return false; }
}

function isAuthorized(email?: string | null) {
  return !!email && ALLOWED_EMAILS.includes(email.toLowerCase());
}

export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const user = await currentUser();
  const email = user?.emailAddresses?.[0]?.emailAddress;
  if (!isAuthorized(email)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;  // ← await params (Next.js 15 fix)
  const body = await req.json();

  const update: Record<string, unknown> = {};
  if (typeof body.title === "string") update.title = body.title.trim();
  if (typeof body.category === "string") update.category = body.category.trim() || "General";
  if (typeof body.note === "string") update.note = body.note;
  if (typeof body.status === "string") update.status = body.status;
  if (Array.isArray(body.links)) {
    update.links = body.links
      .filter((link: unknown) =>
        link && typeof link === "object" &&
        "label" in link && "url" in link &&
        typeof (link as { label: unknown; url: unknown }).label === "string" &&
        typeof (link as { label: unknown; url: unknown }).url === "string" &&
        isHttpUrl((link as { label: string; url: string }).url)
      )
      .map((link: { label: string; url: string }) => ({
        label: link.label.trim(),
        url: link.url.trim(),
      }));
  }
  if ("completedAt" in body) update.completedAt = body.completedAt;

  await connectMongo();
  const updated = await ProgressItem.findByIdAndUpdate(id, update, { returnDocument: "after" });
  const obj = updated?.toObject();
  return NextResponse.json({ ...obj, id: String(obj._id) });
}

export async function DELETE(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const user = await currentUser();
  const email = user?.emailAddresses?.[0]?.emailAddress;
  if (!isAuthorized(email)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;  // ← await params (Next.js 15 fix)

  await connectMongo();
  await ProgressItem.findByIdAndDelete(id);
  return NextResponse.json({ ok: true });
}