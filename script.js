var current=document.querySelector('.current');
var next=document.querySelector('.next');

var prev=0;

var target=0;

var Id=0;
function startCounter(){
    Id=setInterval(animate,1000);
    // if(target==0){
    //     clearInterval(Id);
    // }
}

function animate(){
    target--;
    prev++;
    next.innerHTML=prev;

    next.classList.add('animate');
    if(target<=0){
        clearInterval(Id);
    }
    setTimeout(function(){
        next.classList.remove('animate');
        current.innerHTML=prev;
        if(target<=0){
            clearInterval(Id);
        }
    },500);
}

var btn=document.querySelector('button');
btn.addEventListener('click',function(){
    target=document.getElementById('input').value ;
    console.log(target);
    if(target<=0 || isNaN(target)){
        alert('enter valid input');
        return;
    }
    startCounter();
});
