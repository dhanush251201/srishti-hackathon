import { Schema, model } from "mongoose";

const alumniSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
    unique: true,
    ref: "Auth",
  },
  dob: {
    required: true,
    type: Date,
  },
  college: {
    required: true,
    type: String,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  linkedIn: {
    type: String,
  },
});

export default model("Alumni", alumniSchema);
