const jwt = require("jsonwebtoken");

function verify(req, res, next) {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, userinfo) => {
      if (err) return res.status(403).json("Invalid Token");
      req.user = userinfo;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
}
module.exports = verify;