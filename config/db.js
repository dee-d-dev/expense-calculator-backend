const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB connected succesfully ${connection.connection.host}`);
  } catch (err) {
    console.log(`this is the error ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
