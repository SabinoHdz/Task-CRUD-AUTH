const mongoose = require("mongoose");

const dbConecction = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN, {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
    });
    console.log("database online");
  } catch (error) {
    console.log("error: ", error);
    throw new Error("error al iniciar la base de datos");
  }
};
module.exports = {
  dbConecction,
};

//instalar atllas compass en la terminal
//npm install mongoose --save
//npm install dotenv --save
//npm install express --save
//npm install morgan --save
