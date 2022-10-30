import { Router } from "express";
import Auth from "../models/Auth.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { isLoggedIn } from "../middleware/users.js";
const router = Router();

export const SECRET = "SECRETKEY";

router.get("/", async (req, res) => {
    try {
        const auths = await Auth.find();
        res.status(200).json(auths);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});


router.post("/register", async (req, res) => {
  try {
    const { email, password, type} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const auth = new Auth({
      email,
      password: hashedPassword,
      type,
    });

    await auth.save();
    res.status(200).send("User registered successfully");
  } catch (err) {
    if (err.name === "ValidationError") {
      res.status(400).send(err);
    } else {
      res.status(500).send(err);
    }
  }
});

router.post("/login", async (req, res) => {
  const { email, password, type } = req.body;
  try {
    const auth = await Auth.findOne({ email: email });
    if (auth) {
      const checkPass = bcrypt.compareSync(password, auth.password);
      if (checkPass) {
        res.status(200).json({
          token: jwt.sign({ _id: auth._id }, SECRET),
          type: auth.type,
          expiresIn: "3d",
        });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/secret-route",isLoggedIn,async(req,res)=>{
  res.status(200).send("You are logged in");

})
export default router;
