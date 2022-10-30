// middleware/users.js
import jwt from "jsonwebtoken"

export const validateRegister = (req, res, next) => {
  // password min 6 chars
  if (!req.body.password || req.body.password.length < 6) {
    return res.status(400).send({
      msg: "Please enter a password with min. 6 chars",
    });
  }
  // password (repeat) should match
  if (
    !req.body.password_repeat ||
    req.body.password != req.body.password_repeat
  ) {
    return res.status(400).send({
      msg: "Both passwords must match",
    });
  }
  if (!req.body.email) {
    return res.status(400).send({
      msg: "Please enter an email",
    });
  }

  // if(req.body.type=='admin'){
  //   let pattern = /^[1-2][0-9][a-z][a-z]?[1-2][0-9][0-9]/;
  //   if(pattern.test(req.body.email)){
  //     return res.status(400).send({
  //       msg: 'Student account found with this email'
  //     });
  //   }
  // }
  next();
};
export const isLoggedIn = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, "SECRETKEY");
    req.userData = decoded;
    next();
  } catch (err) {
    return res.status(401).send({
      msg: "Your session is not valid!",
    });
  }
};
