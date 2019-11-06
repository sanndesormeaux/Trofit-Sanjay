var BMENU = false;

function Burger(){
    var B1 = document.getElementById("B1");
    var B2 = document.getElementById("B2");
    var B3 = document.getElementById("B3");
    var mobilnav = document.getElementById("mobilnav");

    if (BMENU == false){
        B1.style.transform = "rotate(45deg) translateX(8px) translateY(8px)"
        B3.style.transform ="rotate(-45deg) translateX(8px) translateY(-8px)"
        B2.style.opacity = "0";
        mobilnav.style.left = "0%";
        BMENU = true;
    }else{
        B1.style.transform = "rotate(0deg) translateX(0px) translateY(0px)"
        B3.style.transform ="rotate(0deg) translateX(0px) translateY(0px)"
        B2.style.opacity = "1";
        mobilnav.style.left = "-100%";
        BMENU = false;
    }
    
}