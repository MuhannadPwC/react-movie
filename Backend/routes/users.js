const express = require("express");

const { postLogin, postSignup } = require("../controller/usersController");

const usersRouter = express.Router();

// Login
usersRouter.post("/login", postLogin);

// Sign Up
usersRouter.post("/signup", postSignup);

// Logout

module.exports = usersRouter;
