const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./routes/auth/auth");
const CategoryRouter = require("./routes/category/category");
const ProductRouter = require("./routes/product/product");
const UserRouter = require("./routes/user/user");

mongoose
  .connect(
    "mongodb+srv://dilip:dilip1234@cluster0123.8crop.mongodb.net/sportsell?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("DB connected");
  });

app.use(cors());
app.use(bodyParser.json());

app.use("/api", AuthRouter);
app.use("/api", CategoryRouter);
app.use('/api',ProductRouter);
app.use('/api',UserRouter);

app.listen(8000);
