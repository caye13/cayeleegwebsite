import { Schema, model, models } from "mongoose";

const LinkSchema = new Schema(
  {
    label: { type: String, required: true },
    url: { type: String, required: true },
  },
  { _id: false }
);

const ProgressItemSchema = new Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    status: {
      type: String,
      enum: ["Next", "In Progress", "Someday", "Completed"],
      default: "Next",
      required: true,
    },
    note: { type: String, default: "" },
    links: { type: [LinkSchema], default: [] },
    createdAt: { type: Number, required: true },
    completedAt: { type: Number },
  },
  { versionKey: false }
);

export const ProgressItem =
  models.ProgressItem || model("ProgressItem", ProgressItemSchema);