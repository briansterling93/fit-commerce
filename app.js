const express = require("express");

const db = require("./config/database.js");

db.authenticate(async () => {
  try {
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
});

const app = express();

app.use(express.json({ extended: false })); //body parser

app.use("/user", require("./routes/user.js"));
app.use("/admin", require("./routes/admin.js"));
app.use("/cart", require("./routes/cart.js"));
app.use("/user_carts", require("./routes/user_carts.js"));
app.use("/orders", require("./routes/order_history"));

app.get("/", (req, res) => {
  res.send("hello world from express");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App running on Port ${PORT}`);
});
