const express=require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const app=express();
const cors= require('cors');
app.use(bodyParser.json());

var corsOption={
	origin: "http://localhost:4200",
	optionSuccessStatus: 200
}
const myuser=require('./models/myuser.js').user;

app.use(cors(corsOption));
mongoose.connect("mongodb://localhost:27017/student",{useNewUrlParser:true});
//const demoCollection=mongoose.model('demoCollection',{name:String, email:String, password:String});
const Log=mongoose.model('Log',{name:String,password:String});



app.listen(3000,()=>{
	console.log("server started...");
});

/*app.get('/',(req,res)=>{
	res.send("bingoo");
	console.log("bingoo");
});*/

/*app.get('/hello',(req,res)=>{
	res.send("hello");
	console.log("hello");
});*/
/*var Cat= mongoose.model('Cat' ,{name: String});
app.get('/api/save_kitty',(req, res)=>{
	const kitty=new Cat({name:'aaa'});
	kitty.save();
	res.send(kitty);*/
/*
	app.use('/api',function(req, res, next){
		res.header('Access-Control-Allow-Origin','*');
		res.header('Access-Control-Allow-Methods','POST');
		res.header('Access-Control-Allow-Headers','Accept,Origin, Content-Type, access_token');
		res.header('Access-Control-Allow-Credentials','true');
		next();

	});*/



	app.post('/api',function(req,res){
		
		console.log('Inside app.post()');
		console.log('Request type:', req.method);
		console.log(req.body);

		var dbObject=new myuser();
		dbObject.userName=req.body.userName;
		dbObject.email=req.body.email;
		dbObject.password=req.body.password;
		dbObject.save((err)=>{

			res.send(dbObject);
			console.log(dbObject);
			console.log("====add paniyachu===");


	});});
		app.post('/apilog',function(req,res){
		
		console.log('Inside app.post()');
		console.log('Request type:', req.method);
		console.log(req.body);

		var logObject=new Log();
		logObject.userName=req.body.userName;
		logObject.password=req.body.password;
		logObject.save((err)=>{

			res.send(logObject);
			console.log(logObject);
			console.log("====add paniyachu===");


	});});