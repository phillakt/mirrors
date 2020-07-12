const validator = require('validator');
const axios = require('axios');
// import 'bootstrap';

var menu = document.querySelector('.menu');
var btnTimes = document.querySelector('.btn-times');
var hamburger = document.querySelector('.hamburger');
var menuBackLayer = document.querySelector('.menu-back-layer');

btnTimes.onclick = function() {
    menu.classList.remove('open-menu');
    hamburger.classList.remove('is-active');
    menuBackLayer.classList.remove('open-menu');
}

hamburger.onclick = function(){

    if(menu.classList.value === 'menu open-menu'){
        menu.classList.remove('open-menu');
        menuBackLayer.classList.add('open-menu');
    }else {
        hamburger.classList.add('is-active');
        menu.classList.add('open-menu');
        menuBackLayer.classList.add('open-menu');
    }
}

menuBackLayer.onclick = function(){
    menu.classList.remove('open-menu');
    hamburger.classList.remove('is-active');
    this.classList.remove('open-menu');
}



// Modal 

var products__btn_more = document.querySelectorAll('.products__btn_more');

products__btn_more.forEach((item, i) => {
    item.setAttribute('data-toggle', 'modal');
    item.setAttribute('data-target', '#productModal');
})




// Menu 

// scroll for node layers
// menuItems.forEach(function (item, i) {
//     item.addEventListener('click', function (e) {
//         e.preventDefault();
//         const nodeElem = e.target.attributes[0].nodeValue;
//         document.querySelector(nodeElem).scrollIntoView({ behavior: 'smooth' });
//     })
// });

// Menu end




