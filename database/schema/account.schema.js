import mongoose from "mongoose";

// Schema
const walletSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  accountType: {
    type: String,
    required: true
  },

  balance: {
    type: Number,
    default: 0,
    required: true,
  },
});

// Model
const Account = mongoose.model("Account", accountSchema, undefined, {
    timestamps: true
});
export default Account;
