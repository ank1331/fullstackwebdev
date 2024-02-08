import jwt from "jsonwebtoken";
import cookie from "cookie-parser";

export const usercheck = (req, res, next) => {
//   console.log("value for headeris", req.headers)
  const tokennew = req.headers.authorization;
//   console.log(tokennew)
  const token = tokennew.split("Bearer ")[1]
//   console.log(token)
  //   req.cookies.access_token
  try {
    const decoded = jwt.verify(token, "test");
    req.user = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({ msg: "User is not logged in" });
  }
};
