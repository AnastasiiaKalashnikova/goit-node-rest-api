const express = require("express");

const validateBody = require("../helpers/validateBody.js");
const { registrateSchema, loginSchema } = require("../models/user.js");
const {
  register,
  login,
  getCurrent,
  logout,
} = require("../controllers/authControllers.js");
const authenticate = require("../helpers/authenticate");

const userRouter = express.Router();

userRouter.post("/register", validateBody(registrateSchema), register);

userRouter.post("/login", validateBody(loginSchema), login);

userRouter.get("/current", authenticate, getCurrent);

userRouter.post("/logout", authenticate, logout);

module.exports = userRouter;
