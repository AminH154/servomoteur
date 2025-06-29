import mongoose, { mongo } from "mongoose";
const valueShema = new mongoose.Schema({
  type: {
    type: String,
    default: "servomotor",
  },
  value: {
    type: String,
    required: true,
  },
});
export const User = mongoose.model("User", valueShema);
