import { Router } from "express";
import Alumni from "../models/Alumni.js";
const router = Router();

router.get("/", async (req, res) => {
  try {
    const alumni = await Alumni.find();
    res.status(200).json(alumni);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post("/add", async (req, res) => {
  try {
    const newAlumni = new Alumni(req.body);
    await newAlumni.save();
    res.status(200).send("Alumni added successfully");
  } catch (err) {
    if (err.name === "ValidationError") {
      res.status(400).send("Enter proper data");
    } else {
      res.status(500).send(err);
    }
  }
});

router.get("/:id", async (req, res) => {
  try {
    const alumni = await Alumni.findById(req.params.id);
    res.status(200).json(alumni);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});



export default router;
