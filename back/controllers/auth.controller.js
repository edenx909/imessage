import bcrypt from "bcryptjs";

import User from "../models/user.model.js";
import genTokenSetCookie from "../utils/tokenGen.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword } = req.body;
    // pw check, end early if not same
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords dont match" });
    }
    // username check, end early if taken
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }
    // pw hash using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPW = await bcrypt.hash(password, salt);

    // random unique svg art per seed
    const profile = `https://api.dicebear.com/9.x/pixel-art/svg?seed=${username}`;

    // create new if everything above valid
    const newUser = new User({
      fullName,
      username,
      password: hashedPW,
      profile,
    });

    // if successful, genTokenSetCookie
    if (newUser) {
      genTokenSetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullName,
        username: newUser.username,
        profile: newUser.profile,
      });
    } else {
      res.status(400).json({ error: "Invalid User Data" });
    }
  } catch (error) {
    console.log(`Error, Sign Up Controller ${error.message}`);
    res.status(500).json({ error: "Internal Sign up Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    // check if user exists
    const user = await User.findOne({ username });
    // check if pw is valid
    const checkPW = await bcrypt.compare(password, user?.password || "");
    // if both invalid, end now
    if (!user || !checkPW) {
      return res
        .status(400)
        .json({ error: "Username or Password doesnt match" });
    }

    // if successful, genTokenSetCookie (15d)
    genTokenSetCookie(user._id, res);
    res.status(201).json({
      _id: user._id,
      fullname: user.fullName,
      username: user.username,
      profile: user.profile,
    });
  } catch (error) {
    console.log(`Error, Log in Controller ${error.message}`);
    res.status(500).json({ error: "Internal Log In Error" });
  }
};

export const logout = (req, res) => {
  try {
    // remove cookie on logout
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged Out Successfully" });
  } catch (error) {
    console.log(`Error, Log out Controller ${error.message}`);
    res.status(500).json({ error: "Internal Log Out Error" });
  }
};
