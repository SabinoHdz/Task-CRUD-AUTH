require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = process.env.PORT || 3000;
const routerApi = require("./src/routers"); //importamos el archivo de rutas

const { dbConecction } = require("./db");
//conexion a la base de datos
dbConecction();

//TODO:configurar el cors

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
//routes
routerApi(app);
//TODO: crear un middleware para manejar los errores

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
