const express = require("express");
const auth = require("./auth");
const path = require("path");


const app = express();
const PORT = 8000;  

app.use(express.json());
app.use(
    express.urlencoded({
      extended: true,
    })
  );

app.use(express.static(path.join(__dirname, "./PrSenpai/index")));
app.use(auth);


app.use(express.json());
app.listen(PORT, function () {
    console.log(`El servidor quedo corriendo en el puerto ${PORT}`);
  });