const express = require("express");
const router = express.Router();
const {
  register,
  login,
  logout,
  profile,
} = require("../controllers/auth.controller");
const { validateToken } = require("../middlewares/validateToken");
const { validateSchema } = require("../middlewares/validator.middleware");
const { registerSchema, loginSchema } = require("../schemas/auth.schema");
// router.post("/login", (req, res) => {
//   res.send("login");
// });

router.post("/login", validateSchema(loginSchema), login);
router.post("/register", validateSchema(registerSchema), register);
router.post("/logout", logout);
router.get("/me", validateToken, profile);
module.exports = router;
