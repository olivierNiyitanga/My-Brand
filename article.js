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
let base64String
document.getElementById('myFile').addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        // convert file to base64 String
        base64String = reader.result;
        // // store file
        // localStorage.setItem('wallpaper', base64String);
        // // display image
        document.body.style.background = `url(${base64String})`;
    };
    
});


const handleSubmit = () => {
    const articles = JSON.parse(localStorage.getItem("articles")) ?? []
    var title = document.getElementById('title').value
    var body = document.getElementById('body').value
    var tag = document.getElementById('tag').value
    if (!title || !base64String || !body || !tag) {
        return;
    }
    var newArticle = {
        id: articles.length,
        title: title,
        body: body,
        image: base64String,
        tag: tag,
    };

    articles.unshift(newArticle)
    localStorage.setItem("articles", JSON.stringify(articles));
    document.getElementById('title').value = ''
    document.getElementById('body').value = ''
    document.getElementById('tag').value = ''
    document.getElementById('myFile').value = ''
    alert('data inserted well done')
    return false

};

