const mongoose = require("mongoose");
const historySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      // type: String,
      ref:"User",
      required: true,
    },
    useremail:{
      type: String,
      required: true,
    },
    chronicMedicalConditions: {
      type: String,
      required: true,
    },
    underTreatement: {
      type: String,
      required: true,
    },
    allergies: {
      type: String,
      required: true,
    },
    medications: {
      type: String,
      required: true,
    },
    surgeries: {
      type: String,
      required: true,
    },
    familymedicalhistory: {
      type: String,
      required: true,
    },
    immunizations: {
      type: String,
      required: true,
    },
    recenthealthissues : {
      type: String,
      required: true,
    },
    additionalComments: {
      type: String
    }
  },
  {
    timestamps: true,
    
  }
);

const historyModel = mongoose.model("History", historySchema);
module.exports = historyModel;
