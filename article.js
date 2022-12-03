// var form=document.getElementById('form')
// var parentDiv=document.getElementById('result')
// form.addEventListener('submit',function (event){
// event.preventDefault()
// var reader=new FileReader()

// var name=document.getElementById("myFile").files[0].name
// reader.addEventListener('load',function(){
//     if(this.result && localStorage){
//         window.localStorage.setItem(name,this.result)
//         alert("well done")
//         parentDiv.innerHTML=''
//         showImages()
//     }
//     else{
//         alert("not successfull")
//     }
// })
// reader.readAsDataURL(document.getElementById('myFile').files[0])

// console.log(name)
// })
// function showImages(){
//     for(let i=0;i<window.localStorage.length; i++){
// let res=window.localStorage.getItem(window.localStorage.key(i))
// var myFile=new Image()
// myFile.src=res;

// parentDiv.appendChild(myFile)
//     }
// }
// function remove()
// {
//     window.localStorage.clear()
//     parentDiv.innerHTML=''
// }
// showImages()
const submit=(event)=>{
event.preventDefault();
var title=document.getElementById("title").Value
// var myFile=document.getElementById("myFile").files.trim();
// var body=document.getElementById("body").Value.trim();
// var tag=document.getElementById("tag").Value.trim();
console.log("submited")
// if(!title || !myFile || !body || !tag)
// {
//     return;
// }
    
// var newArticle={
//    title:title,
//    myFile:myFile,
//    body:body,
//    tag:tag,
//     };
// localStorage.setItem("newArticle",JSON.stringify(newArticle));

};