const express=require('express');
const mongoose = require('mongoose');
const app=express();
mongoose.connect('mongodb://localhost:27017/student',{useNewUrlParser:true});
app.listen(3000,()=>{
	console.log("server started...");
});

var Cat= mongoose.model('Cat' ,{name: String});
app.get('/api/save_kitty',(req, res)=>{
	const kitty=new Cat({name:'aaa'});
	kitty.save();
	res.send(kitty);
});
app.get("/api/testing_api" ,(req,res)=>{
	res.send("hello");
});