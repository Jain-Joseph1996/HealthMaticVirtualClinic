const { default: mongoose } = require("mongoose")

const dbConfig = () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URL);
        console.log("DB connected successfully");
    }
    catch(error){
      throw new Error(error);
      console.log("DB error");
    }
};
module.exports = dbConfig;