const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const app=express()
app.use(cors())
const {product}=require("./models/product")

app.get("/",(req,res)=>{
    res.send("hello")
})


app.post("/view",(req,res)=>{
    res.send("Welcome")
})


app.listen(8081,()=>{
    console.log("server started")
})