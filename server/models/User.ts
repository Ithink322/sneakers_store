import { Schema, model } from "mongoose";
import type { NewUser } from "@/types/User";

const UserSchema = new Schema<NewUser>({
  login: { type: String, required: true, unique: true },
  fio: { type: String, required: true },
  number: { type: String, required: true },
  password: { type: String, required: true },
  /* isAdmin: { type: Boolean, default: false }, */
});

const UserModel = model<NewUser>("User", UserSchema);

export default UserModel;
