const jwt = require("jsonwebtoken");

const TOKEN_SECRET = "UnaClaveParaFirmarToken";

const verifyToken = (req, res, next) => {
  try {
    const token = req.header("auth-token");
    if (!token) {
      return res.status(401).json({ error: "Acceso denegado" });
    }

    const verified = jwt.verify(token, TOKEN_SECRET);

    req.user = verified;
    next();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  TOKEN_SECRET,
  verifyToken,
};
