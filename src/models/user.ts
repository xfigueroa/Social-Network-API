import { Schema, model, Document } from "mongoose";

interface IUser extends Document {
  username: string;
  email: string;
  thoughts: Schema.Types.ObjectId[];
  friends: Schema.Types.ObjectId[];
}

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true, match: /.+@.+\..+/ },
  thoughts: [{ type: Schema.Types.ObjectId, ref: "Thought" }],
  friends: [{ type: Schema.Types.ObjectId, ref: "User" }]
}, { toJSON: { virtuals: true }, id: false });

UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

export const User = model<IUser>("User", UserSchema);
