const subArt=e=>{
 let articleForm={
    title:document.getElementById('title').Value,
    myFile:document.getElementById('myFile').Value,
    body:document.getElementById('body').Value,
    tag:document.getElementById('tag').Value
 }
 localStorage.setItem('articleForm',JSON.stringify(articleForm));
 e.preventDefaul();
 dispData();   
}
function dispData(){
    if(localStorage.setItem('articleForm')){
    // console.log(JSON.parse(localStorage.setItem('articleForm')));
let{title,myFile,body,tag}=JSON.parse(localStorage.setItem('articleForm'));
    var display=document.getElementById('display');
output.innerHTML =`
<table>
<tbody>
<tr>${myFile}</tr>
<tr>${title}</tr>
<tr>${tag}</tr>
</tbody>
</table>
`;
}
}