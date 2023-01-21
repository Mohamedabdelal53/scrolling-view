let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountain3 = document.getElementById('mountains3');
let mountain4 = document.getElementById('mountains4');
let rivers = document.getElementById('river');
let boat = document.getElementById('boat');
let mountain7 = document.getElementById('mountain7');

window.onscroll = function()
{
    let value=scrollY;
    stars.style.left = value+'px';
    moon.style.top = value*3 +'px';
    mountain3.style.top = value*1.5 +'px';
    mountain4.style.top = value*1.2 +'px';
    rivers.style.top= value +'px';
    boat.style.top = value +'px';
    boat.style.left = value*3 +'px';
    if(scrollY>= 150)
    {
        document.querySelector('.main').style.background= 'linear-gradient(#376281,#10001f)'
    }
    else if(scrollY<150)
    {
        document.querySelector('.main').style.background= 'linear-gradient(#200016,#10001f)'
    }   
}