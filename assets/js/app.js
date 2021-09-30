const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

//Remove Menu Mobile

// var ul = document.getElementsByClassName("nav-list");
var items = document.getElementsByClassName("nav-link");
for (var i = 0; i < items.length; ++i) {
  // do something with items[i], which is a <li> element
  items[i].addEventListener('click', ()=>{
    navMenu.classList.remove('show-menu');
  })
}