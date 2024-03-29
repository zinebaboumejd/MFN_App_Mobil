
const asyncHandler = require("express-async-handler");
const User = require("../models/authModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// @desc    Register a new user
// @route   POST /user/register
// @access  Public
const register = asyncHandler(async (req, res) => {
  const { nom, ice,tel,adresse, localisation, email,password, role} = req.body;
  if( nom === "" || ice === "" || tel==="" || adresse==="" || localisation==="" || email === "" || password === "" || role === "" ){
    res.status(400);
    throw new Error("Veuillez remplir tous les champs");
  }
   //check if user exists
   const userExists = await User.findOne({ email });
   if (userExists) {
     res.status(400);
     throw new Error("Cet utilisateur existe deja");
   }
    //hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
   //create user
   const user = await User.create({
    nom,
    ice,
    tel,
    adresse,
    localisation,
    email,
    password: hashedPassword,
    role,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      nom: user.nom,
      ice: user.ice,
      tel:user.tel,
      adresse:user.adresse,
      localisation:user.localisation,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Auth user & get token
// @route   POST /api/user/login
// @access  Public
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
  });
   //check email and password
   if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      nom: user.nom,
      ice: user.ice,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});
// generate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};



module.exports = { register,login };