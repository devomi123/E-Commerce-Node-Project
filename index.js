var express = require("express");
var bodyparser = require("body-parser");
var nodemailer = require("nodemailer");
var mongooes = require("mongoose");
var jsonparser = bodyparser.json();
var app = express();

app.use(express.static("assets"));

app.use(bodyparser.json({limit:'50mb'}));
app.use(bodyparser.urlencoded({limit:'50mb', extended: true}));

mongooes.connect("mongodb+srv://omkar:Omkar@@123@cluster0.vipls.mongodb.net/test");
const db = mongooes.connection;
db.on("error", error => console.log(error));
db.on("open", error => console.log("connection Established"));
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST,GET,PUT,PATCH,DELETE");
    return res.status(200).json({});

  }
  next();

});
app.get("/", function (req, res) {
  res.send("Welcome To Resume Building");
  res.end();
});

app.get("/hello", function (req, res) {
  res.send("This Is Hello Page.");
  res.end();
});

app.use("/admin",require("./routes/admin"));
app.use("/product",require("./routes/product"));
app.use("/subscription",require("./routes/subscription"));
app.use("/order",require("./routes/order"));




app.listen(8081,(err)=>{
  console.log("Node Server Started");
})
  
 
