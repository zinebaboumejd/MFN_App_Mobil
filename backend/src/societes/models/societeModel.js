const mongoose = require("mongoose");
const SocieteSchema = mongoose.Schema(
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
    localisation:{
      type: {
        type: String,
        enum: ['Point'],
        required: true
      },
      coordinates: {
        type: [Number],
        required: true
      }
    },
    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Societe", SocieteSchema);

