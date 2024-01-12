const mongoose = require('mongoose');
<<<<<<< HEAD
require('dotenv').config();


mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://keithprimas:DdzwykUQT4uFQuPS@cluster0.cvaxkcs.mongodb.net/' , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});
=======

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks');
>>>>>>> f9a59847e1b4f4d33219975b375796814b968248

module.exports = mongoose.connection;
