const mongoose = require("mongoose");
const announcementSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
   content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const announcementModel = mongoose.model("Announcement", announcementSchema);
module.exports = announcementModel;
