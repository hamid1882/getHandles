const handleAsyncErrors = require("./handleAsyncErrors");

exports.isAuthenticatedUser = handleAsyncErrors(async (req, res, next) => {
  const token = req.cookies;

  console.log(token);
});
