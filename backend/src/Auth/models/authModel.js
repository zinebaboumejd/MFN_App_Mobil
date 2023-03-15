const mongoose = require("mongoose");
const UserSchema = mongoose.Schema(
  {
    nom:{
      type: String,
      required: [true, "S'il vous plaît entrez votre nom"],
    },
    ice:{
      type: String,
      required: [true, "S'il vous plaît entrez votre ice"],
      sparse: true // permet à certains documents de ne pas avoir le champ 'ice'
    },
    tel:{
      type: String,
      required: [true, "S'il vous plaît entrez votre tel"],
    },
    adresse:{
      type: String,
      required: [true, "S'il vous plaît entrez votre adresse"],
    },

    localisation:{
      latitude:{
        type: Number,
        required: [true, "S'il vous plaît entrez votre latitude"],
      },
      longitude:{
        type: Number,
        required: [true, "S'il vous plaît entrez votre longitude"],
      }
    },
    email: {
      type: String,
      required: [true, "S'il vous plaît entrez votre email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "S'il vous plaît entrez votre le mot de passe"],
    },
    datecreation:{
      type:Date,
      required:true,
      default:Date.now,
    },
    role: {
      type: String,
      enum: ["admin", "client"],
      default: "client",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);

