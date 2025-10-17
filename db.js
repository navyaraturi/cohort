import mongoose, { Schema, model } from "mongoose";

mongoose.connect(BUN.env.MONGODB_CONNECTION_STRING); // TODO: Add connection string

const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  name: String,
  password: String,
});

const adminSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  name: String,
  password: String,
});

const courseSchema = new Schema({
  creatorId: {
    type: ObjectId,
    ref: "admin",
  },
  description: String,
  imageUrl: String,
  price: Number,
  title: {
    type: String,
    unique: true,
  },
});
const purchaseSchema = new Schema({
  userId: {
    type: ObjectId,
    ref: "users",
  },
  courseId: {
    type: ObjectId,
    ref: "courses",
  },
});

const Admin = model("admin", adminSchema);
const Purchases = model("purchases", purchaseSchema);
const Course = model("courses", courseSchema);
const User = model("users", userSchema);

export default { Admin, Course, Purchases, User };
