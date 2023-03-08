const hamburger = document.querySelector('#hamburger');
const navList = document.querySelector('.nav');

hamburger.addEventListener('click',function(e){
    e.preventDefault();
    hamburger.classList.toggle('fa-burger');
    hamburger.classList.toggle('fa-xmark');
    navList.classList.toggle('showlist');
})