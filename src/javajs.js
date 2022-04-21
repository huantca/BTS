let bg = document.querySelector('#bg');
window.addEventListener('scroll',function(){
    let value = this.window.scrollY;
    bg.style.backgroundSize = 100 + value*2 +"px";
})