const mongoose=require('mongoose'),
schema=mongoose.Schema,
userSchema=new schema({
	
	userName:{type: String,required:true},
	email:{type: String,required:true,unique:true},
	password:{type: String,required:true},/*
	age:{type: String,required:true},*/
	crdate:{type: Date,default:Date.now}
});
module.exports={user:mongoose.model('demoCollections', userSchema)}