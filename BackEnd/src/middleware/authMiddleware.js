const jwt = require("jsonwebtoken");

const isAdmin = asyncHandler(async (req, res, next) => {
    if (req.user.roleId !== 1) {
        throw new Error("You are not an Admin");
    } else {
        next();
    }
});