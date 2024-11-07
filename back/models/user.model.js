import mongoose from "mongoose";

// most of this is self explanatory
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profile: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
