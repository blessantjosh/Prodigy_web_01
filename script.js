conset navMenu= document.getElementById('nav-menu');
navMenu.addEventlISTENER('MOUSEENTER', function(){
    navMenu.Style.backgroundColor='#555';
});
navMenu.addEventListener('mouseleave', function(){
    navMenu.Style.backgroundColor='#333';

});    