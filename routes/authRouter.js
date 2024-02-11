const express = require("express");
const validateBody = require("../helpers/validateBody.js");
const { registrateSchema, loginSchema } = require("../models/user.js");
const { register, login } = require("../controllers/authControllers.js");

const userRouter = express.Router();

userRouter.post("/register", validateBody(registrateSchema), register);

userRouter.post("/login", validateBody(loginSchema), login);

//userRouter;

module.exports = userRouter;
