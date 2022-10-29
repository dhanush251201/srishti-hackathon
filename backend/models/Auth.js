import { Schema, model } from "mongoose";

const authSchema = new Schema({
  email: {
    required: true,
    type: String,
    unique: true,
  },
  password: {
    required: true,
    type: String,
  },
  type: {
    required: true,
    type: String,
    enum: ["admin", "alumni"],
  },
});

export default model("Auth", authSchema);
