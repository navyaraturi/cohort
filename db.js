import { Schema, model } from "mongoose";

const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  name: String,
});

const adminSchema = new Schema({});
const courseSchema = new Schema({});
const purchaseSchema = new Schema({});

const Admin = model("admin", adminSchema);
const Purchases = model("purchases", purchaseSchema);
const Course = model("courses", courseSchema);
const User = model("users", userSchema);

export default { Admin, Course, Purchases, User };
