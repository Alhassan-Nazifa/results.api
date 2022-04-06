const express = require("express");
const dotenv =require("dotenv");
const results=require("./results");
const req = require("express/lib/request");

dotenv.config()


const app= express();
//middlewares
app.use(express.json());

//route 
//get all results
app.get("/results", (req, res)=>{
    res.json(results)

})
//post all results
app.post("/results", (req, res)=>{
    const student ={
        name:req.body.name,
        class:req.body.class,
        marks:req.body.marks,
    };
    results.push(student);
    res.json(results)

})
//delete a result
app.delete("/results/:name",(req, res)=>{
    res.json(results.filter((result)=>result.name!==req.params.name))

})


const PORT =process.env.PORT||500

app.listen(PORT, ()=>console.log(`server is running on ${PORT}`)) 