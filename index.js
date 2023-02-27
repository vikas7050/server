import express from "express";
import { expensiveop } from "./create_large_file.js";
import cors from "cors";

import User from "./models/user.js";
import * as sequelize from './models/index.js'


// const sequelize = require('./models/index.js').default
console.log(sequelize)

const app = express();

app.use(express.json());

app.get("/getData", async (req, res) => {
  // res.status(200).json({ result: "hello world" });

  const { name, email, role } = req.body;
  try {
    const user = await User.create({ name, email, role });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(err);
  }
});
// app.get(
//   "/hello",
//   (req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("X-middleware-example", "true");

//     if (typeof req.query.hello === "number") {
//       res.status(200).json({ type: "string" });
//     } else {
//       next();
//     }
//   },
//   (req, res) => {
//     //expensive op
//     expensiveop();
//     res.status(200).json({ result: "Server working ocrrectly" });
//   }
// );

app.listen("5000", async () => {
  console.log("Server running at port 5000");

  // await sequelize.sync({
  //   force: true,
  // });


  console.log("DB updated");
});
