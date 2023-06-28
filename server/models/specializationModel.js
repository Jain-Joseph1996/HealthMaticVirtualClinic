const mongoose = require("mongoose");
const specializationSchema = new mongoose.Schema(
  {
    specializationId: {
      type: String,
      required: true,
    },
   specializationName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const specializationModel = mongoose.model("Specialization", specializationSchema);
module.exports = specializationModel;
