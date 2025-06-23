const express = require ('express');
const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    return res.status(500).send("Received data");
});

app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    if(!email){
        return res.status(400).send("Email cannot be empty");
    }
    if(!password){
        return res.status(400).send("Password cannot be empty");
    }
    return res.status(200).send("Login successfull");

})

app.listen(3000,()=>{
        console.log("Server connected successfully");
})