import { Schema, model, Document } from "mongoose";
import { reactionSchema, IReaction } from "./reaction";

interface IThought extends Document {
  thoughtText: string;
  createdAt: Date;
  username: string;
  reactions: IReaction[];
}

const ThoughtSchema = new Schema<IThought>({
  thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
  createdAt: { type: Date, default: Date.now },
  username: { type: String, required: true },
  reactions: [reactionSchema]
}, { toJSON: { virtuals: true }, id: false });

ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

export const Thought = model<IThought>("Thought", ThoughtSchema);
