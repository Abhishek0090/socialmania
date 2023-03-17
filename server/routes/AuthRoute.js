import express from "express";

const router = express.Router();


router.get('/',async (req,res)=>{
    res.send("Hi bro")
});




export default router;
