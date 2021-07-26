//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(request, response){
    //console.log(request);
    response.send("<h1>Hello</h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me:nutriyug@gmail.com")
})

app.get("/about", function(req, res){
    res.send("My passion lies in wellness of all")
})


app.listen(3000, function() {
    console.log("server started listening at 3000 again.")
});