// const signUp=e=>{
// let formData={
// flname:document.getElementById('flname').value,
// email:document.getElementById('email').value,
// pwd:document.getElementById('pwd').value
//  } 
// localStorage.setItem('formData',JSON.stringify(formData));
// console.log(localStorage.getItem('formData'));
// e.preventDefault();
//  }
function signUp(e){
    event.preventDefault();
    var email=document.getElementById('email').value;
    var flname=document.getElementById('flname').value;
    var pwd=document.getElementById('pwd').value;

    var formData={
        email:email,
        flname:flname,
        pwd:pwd,
    };
    var json=JSON.stringify(formData);
    localStorage.setItem(flname,json);
    console.log('well done');
}
 function loginfunc(e){
event.preventDefault();

var flname=document.getElementById('flname').value;
var pwd=document.getElementById('pwd').value;
var result=document.getElementById('result');

var name=localStorage.getItem(flname);
var data=JSON.parse(name);
console.log(data);
if(name==null){
    result.innerHTML="incorrect username";
}
else if(flname==data.flname && pwd==data.pwd)
{
    window.location.href="dashBoard.html";
}
else{
    result.innerHTML="wrong password";
}
 }