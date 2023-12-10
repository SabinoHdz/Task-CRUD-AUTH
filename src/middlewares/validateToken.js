const jwt = require("jsonwebtoken");
const validateToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "unauthorized" });
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err)
      return res.status(401).json({ message: " unauthorized. invalid token" });
    req.user = decoded;
    next();
  });
};
module.exports = { validateToken };
