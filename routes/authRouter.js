const express = require("express");

const validateBody = require("../helpers/validateBody.js");
const { registrateSchema, loginSchema } = require("../models/user.js");
const {
  register,
  login,
  getCurrent,
  logout,
  updateAvatar,
} = require("../controllers/authControllers.js");
const authenticate = require("../helpers/authenticate");

const upload = require("../helpers/upload.js");

const userRouter = express.Router();

userRouter.post("/register", validateBody(registrateSchema), register);

userRouter.post("/login", validateBody(loginSchema), login);

userRouter.get("/current", authenticate, getCurrent);

userRouter.post("/logout", authenticate, logout);

userRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  updateAvatar
);

module.exports = userRouter;
