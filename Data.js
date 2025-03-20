import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  name: String,
  course: String,
  isManager: Boolean,
});
  export const Data = mongoose.model("Data", dataSchema);