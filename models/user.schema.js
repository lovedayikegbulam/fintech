import mongoose from "mongoose";

// Schema
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String, 
    required: true 
  }, 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Model
const User = mongoose.model("User", userSchema);
export default User;
