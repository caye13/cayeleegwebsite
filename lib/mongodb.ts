import mongoose from "mongoose";

const uri = process.env.MONGODB_URI as string | undefined;

if (!uri) {
  throw new Error("Missing MONGODB_URI");
}

type Cached = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: Cached | undefined;
}

const cached = global.mongooseCache || (global.mongooseCache = { conn: null, promise: null });

export async function connectMongo() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(uri!);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}