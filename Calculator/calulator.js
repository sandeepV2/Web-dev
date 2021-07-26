//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res){
    console.log(req.body)
    res.send("Welcome to math")
})

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname+ "/bmi_calc.html");
})

app.post("/bmicalculator", function(req, res){
    console.log(req.body)
    let weight = req.body.weight;
    let height = req.body.height;
    let bmi = weight / (height * height);
    res.send("your BMI is" + bmi);
})

app.listen(3000, function(){
    console.log("Server is running at 3000");
});