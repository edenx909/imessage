import User from "../models/user.model.js";

export const getAllUsers = async (req, res) => {
  try {
    // get user from protectRoute middleware
    const loggedInUser = req.user._id;
    // find all users except the logged in user for obvious reasons
    // everything except the password
    const allUsers = await User.find({ _id: { $ne: loggedInUser } }).select(
      "-password"
    );
    res.status(200).json(allUsers);
  } catch (error) {
    console.log(error.message, "Error in Get All Users Controller");
    res.status(500).json({ error: "Internal Server Error" });
  }
};
