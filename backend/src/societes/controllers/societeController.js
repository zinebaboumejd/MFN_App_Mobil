
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User=require("../.././Auth/models/authModel")


// get Societe
const getSociete = asyncHandler(async (req, res) => {
    // find user
    const user = await (await User.find());
    res.json(user);
    });

module.exports = {
    getSociete,
};