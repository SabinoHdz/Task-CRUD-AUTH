const jwt = require("jsonwebtoken");
const bycrypt = require("bcryptjs");
const User = require("./../models/user.model");
const { generarJWT } = require("../utils/generar-jwt");
const register = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const { username, email, password } = body;
    const passwordHash = await bycrypt.hash(password, 10);
    const user = new User({
      username,
      email,
      password: passwordHash,
    });
    const userSaved = await user.save();
    const token = await generarJWT(userSaved._id);
    res.cookie("token", token);

    res.status(200).json({
      msg: "user created",
      user: userSaved,
    });
  } catch (error) {
    res.status(500).json({ message: "error in the user create" });
    //console.log("error: ", error);
  }
};

const login = async (req, res) => {
  try {
    const body = req.body;
    const { email, password } = body;
    const userFound = await User.findOne({ email });
    if (!userFound) return res.status(400).json({ message: "user not found" });
    const validPassword = await bycrypt.compare(password, userFound.password);
    if (!validPassword)
      return res.status(400).json({ message: "email or password incorrect" });

    const token = await generarJWT(userFound._id);
    res.cookie("token", token);

    res.status(200).json({
      msg: "login success",
      user: userFound,
      token,
    });
  } catch (error) {
    res.status(500);
    console.log("error: ", error);
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("token");

    res.status(200).json({
      message: "logout success",
    });
  } catch (error) {
    res.status(500).s;
    console.log("error: ", error);
  }
};
const profile = async (req, res) => {
  const userFound = await User.findById(req.user.uid);
  if (!userFound) return res.status(400).json({ message: "user not found" });

  res.status(200).json({ message: "get profile", user: userFound });
};
module.exports = {
  register,
  login,
  logout,
  profile,
};
