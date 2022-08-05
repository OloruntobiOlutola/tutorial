const express = require("express");
const mongoose = require("mongoose");
const Student = require("./model/student-model");

const app = express();

// middleware
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://Paul:password1234@nextgen.uoyzl6y.mongodb.net/student?retryWrites=true&w=majority"
  )
  .then(() => console.log("It is running"))
  .catch((err) => console.log(err));

// app.METHOD(PATH, HANDLER)
app.get("/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const student = await Student.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        student,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
});

app.get("/", async (req, res) => {
  try {
    const student = await Student.find();
    res.status(200).json({
      status: "success",
      data: {
        student,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
});

app.get("/goodbye", (req, res) => {
  res.send("goodbye");
});

app.post("/", async (req, res) => {
  // const { fullname, password, sex, height } = req.body;
  try {
    const student = await Student.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        student,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
});

app.listen(5000, () => {
  console.log("It is already running");
});
