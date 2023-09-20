import mongoose from "mongoose";

const empoyeeSchema = new mongoose.Schema({
  firstname: { type: String, max: 20, required: true },
  lastname: { type: String, max: 20, required: true },
  gender: { type: String, required: true },
  age: { type: Number, required: true },
  salary: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true, trim: true },
  address: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

export default mongoose.model("employee", empoyeeSchema);
