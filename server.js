var express = require("express");
var app = express();
var mongoose = require("mongoose");
var Contact = require("./models/contact")
var bodyParser= require("body-parser");

mongoose.connect("mongodb://localhost/contactlist",function(){
	console.log("Conneted successfully");
});
var PORT = process.env.PORT || 3000;


app.use(express.static(__dirname + "/public"))
app.use(bodyParser.json());

app.get("/contactList",function(req,res){
Contact.getContacts(function(err,data){
if(err){

	throw err;
}
res.json(data);

})
})


app.post("/contactList",function(req,res){
var body = req.body;                                           // will fetch body details
//console.log(body);

Contact.addContact(body,function(err,data){
if(err){

throw err;
}
res.json(data);
})

})

app.get("/contactList/:id",function(req,res){
var id=req.params.id;
Contact.getContactById(id,function(err,data){

if(err){

throw err;
}
res.json(data);
})

})

app.put("/contactList/:id",function(req,res){
var id=req.params.id;
var body=req.body;
Contact.updateContactList(id,body,function(err,data){
if(err){
	throw err;
}
res.json(data);


})
})

app.delete("/contactList/:id",function(req,res){
var id=req.params.id;
Contact.deleteContactFromList(id,function(err,data){
if(err){
	throw err;
}
res.json(data);

})

})


app.listen(PORT, function(){
	console.log("server is litening at port 3000")

})