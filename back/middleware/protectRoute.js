import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    // parse cookies for token
    const token = req.cookies.jwt;
    // if non existant, end early
    if (!token) {
      return res.status(401).json({ error: "Unauthorized, No Token" });
    }
    // verify token
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    // if invalid, end early
    if (!verified) {
      return res.status(401).json({ error: "Unauthorized, Invalid Token" });
    }
    // if all above valid, find user (except password)
    const user = await User.findById(verified.userId).select("-password");
    // if user doesn't exist, end early
    if (!user) {
      return res.status(401).json({ error: "User Not Found" });
    }
    // else run next
    req.user = user;
    next();
  } catch (error) {
    console.log(error.message, "Error in ProtectRoute middlware");
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default protectRoute;
