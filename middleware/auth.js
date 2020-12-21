const jwt = require("jsonwebtoken");
const config = require("dotenv").config();

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ error: "no authorized token recognized" });
  } else {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = decoded.user;

      next();
    } catch (error) {
      console.log(error);
    }
  }
};
