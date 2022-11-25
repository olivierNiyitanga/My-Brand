const progressing=document.getElementById('pro-gressing');
const progre=document.querySelectorAll('pro-gre');
function showProgress(){
    progre.forEach(progre=>{
   const value=progre.dataset.progress;
   progre.style.opacity=1;
   progre.style.width=`${value}%`;
    });
}
function hideProgress(){
    progre.forEach(p=>{
        p.style.opacity=0;
        p.style.width=0;
    })
}
window.addEventListener('scroll',()=> {
const sectionPos=progressing.getBoundingClientRect().top;
const screenPos=window.innerHeight;
if(sectionPos<screenPos){
    showProgress();
}
else
{
hideProgress();
}
});
