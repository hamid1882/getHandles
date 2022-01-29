const errorHandler = require("../utils/errorHandler");
const handleAsyncErrors = require("../middleware/handleAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");

exports.registerUser = handleAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is a sample id",
      url: "profileavatar",
    },
  });

  sendToken(user, 201, res);
});

// Login user

exports.loginUser = handleAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  // checking if user has given password and email both exist

  if (!email || !password) {
    return next(new errorHandler("Please Enter Email and Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new errorHandler("Invalid email or password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new errorHandler("Invalid email or password", 401));
  }

  sendToken(user, 200, res);
});
