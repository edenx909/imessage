import jwt from "jsonwebtoken";

// gen jwt token, set it in cookie
const genTokenSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    // 15 days
    maxAge: 15 * 24 * 60 * 60 * 1000,
    // so inaccessible to JS
    httpOnly: true,
    // cant be sent in CSR
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });
};

export default genTokenSetCookie;
