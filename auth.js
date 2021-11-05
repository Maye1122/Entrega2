const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/register", async (req, res) => {
  console.log("Maira1auth");
  if (req.body.mail && req.body.name && req.body.password) {
    if (/^\S+@\S+\.\S+$/.test(req.body.mail) === false) {
      res
        .status(400)
        .json({ success: false, message: "Formato de mail incorrecto" });
      return;
    }
console.log("maira2auth");

    const existeUser = usuarios.find((u) => {
      return u.mail === req.body.mail;
    });
console.log("maira3auth");
    if (existeUser) {
      res.status(400).json({ success: false, message: "Mail repetido" });
      return;
    }
console.log("maira4auth");
    const salt = await bcrypt.genSalt(10);
    console.log("Salt", salt);
    const password = await bcrypt.hash(req.body.password, salt);

    const newUser = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      mail: req.body.mail,
      password: req.body.password,
    };

    usuarios.push(newUser);

    return res.json({ success: true, newUser });
  } else {
    return res.status(400).json({
      success: false,
      message: "Faltan datos (requeridos: mail, name, password)",
    });
  }
});

module.exports = router;

const usuarios = [
  {
    nombre: "César",
    apellido: "sddfsd",
    mail: "crolon@mail.com",
    password: "$2b$10$f/rpZSwm2YX7sQECj/6eduVGa58jRWGifgAfvsJWjlb1.8W3a5gYa",
  },
];

console.log("prueba del auth");