import { Router } from "express";
import Auth from "../models/Auth.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = Router();

export const SECRET = "sucms.psgtech";

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
    const { email, password, type } = req.body;
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
      res.status(400).send("Enter proper data");
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

export default router;
