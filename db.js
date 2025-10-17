import { Schema, model } from "mongoose";

const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  name: String,
});

const User = model("users", userSchema);

export default { Admin, Course, Purchases, User };
