var name = document.querySelector("exampleInputName");
var agender = document.querySelectorAll("form-user-create [name=agender]:checked");
var birth = document.querySelector("exampleInputBirth");
var Country = document.querySelector("exampleInputCountry");
var email = document.querySelector("exampleInputEmail");
var password = document.querySelector("exampleInputPassword");
var photo = document.querySelector("exampleInputFile");
var admin = document.querySelector("exampleInputAdmin");




var fields = document.querySelectorAll("#form-user-create [name]");

fields.forEach(function(field, index){

    console.log(field.id);



});