const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user.models");
const jwt = require("jsonwebtoken");
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://nishok:nishok123@cluster0.gqizq.mongodb.net/User-data?retryWrites=true&w=majority",
  () => {
    console.log("connected to mongodb");
  }
);

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    return res.json({ status: "ok", message: true });
  } catch (error) {
    res.json({ status: "error", error: "duplicate email", message: false });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (user) {
      const token = jwt.sign({ name: user.name, email: user.email }, "secret");
      return res.json({ status: "ok", user: token });
    } else {
      res.json({ status: "error", user: false });
    }
  } catch (error) {
    res.json({ status: "error", error: "invalid email" });
  }

  // const user = await User.findOne({
  //   email: req.body.email,
  //   password: req.body.password,
  // });
  // if (user != null) {
  //   const token = jwt.sign(
  //     {
  //       name: user.name,
  //       email: user.email,
  //     },
  //     "secret123"
  //   );
  //   console.log(user.email);
  //   res.json({ status: "ok", user: token });
  // } else {
  //   console.log("error");
  //   res.json({ status: "error", user: false });
  // }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
