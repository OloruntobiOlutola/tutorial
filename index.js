const express = require("express");

const app = express();
app.use(express.json());
// app.METHOD(PATH, HANDLER)

app.get("/hello", (req, res) => {
  console.log("Hello");
  res.send("Hello");
});

app.get("/goodbye", (req, res) => {
  res.send("goodbye");
});

app.post("/welcome", (req, res) => {
  const { fullname, password, sex, height } = req.body;
  length = height * 2;
  res.status(201).json({
    status: "success",
    data: {
      fullname,
      password,
      sex,
      length,
    },
  });
});

app.listen(5000, () => {
  console.log("It is already running");
});
