import express from "express";
import path from "path";

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.set("view engine","ejs");

// console.log(__dirname);
//app.use(express.static(__dirname+"/public"));

const viewPath = __dirname+"/public/";

app.get("/",(req,res)=>{
    res.render("index");
   // res.sendFile(viewPath + "index.html");
});

app.get("/profile",(req,res)=>{
    var data = {
        name:"WAQAR",
        email:"waqar12@gmail.com",
        contact:"088855588"
    };
    res.render("profile",{data});
    //res.sendFile(viewPath + "index.html");
});

app.get("/product",(req,res)=>{
    res.render("product");
 //  res.sendFile(viewPath + "product.html");
});

app.get("/about",(req,res)=>{
    res.render("about");
    //res.sendFile(viewPath + "about.html");
});

app.get("/contact",(req,res)=>{
    res.render("contact");
  //  res.sendFile(viewPath + "contact.html");
});

app.get("*",(req,res)=>{
    res.render("404");
  //  res.sendFile(viewPath + "404.html");
});

app.listen(8000);