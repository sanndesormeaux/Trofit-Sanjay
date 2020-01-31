    var BMENU = true;

function Burger(){
    var B1 = document.getElementById("B1");
    var B2 = document.getElementById("B2");
    var B3 = document.getElementById("B3");
    var home = document.getElementById("home");
    var more = document.getElementById("more");

    if (BMENU == false){
        B1.style.transform = "rotate(45deg) translateX(8px) translateY(8px)"
        B3.style.transform ="rotate(-45deg) translateX(8px) translateY(-8px)"
        B2.style.opacity = "0";
        B1.style.backgroundColor = "#29201B";
        B3.style.backgroundColor = "#29201B";
        home.style.opacity = "1";
        more.style.left = "0%";
        BMENU = true;
    }else{
        B1.style.transform = "rotate(0deg) translateX(0px) translateY(0px)"
        B3.style.transform ="rotate(0deg) translateX(0px) translateY(0px)"
        B2.style.opacity = "1";
        B1.style.backgroundColor = "#33FF68";
        B3.style.backgroundColor = "#33FF68";
        home.style.opacity = "0";
        more.style.left = "-100%";
        BMENU = false;
    }
    
}

// différents exercices

var Hcorps = ["Pompes surélevées", "Dips au banc", "Haltère classique", "Haltères derrière la tête"];
var Jambes = ["Squatt", "Chaise"];
var Abdos = ["Abdominos", "Gainage"];

var verif = false;

function exercice(test){
    var element = document.getElementById("exercice");

    if (verif == true){
        element.remove();
        var para = document.createElement("div");
        para.setAttribute("class", "container-col");
        para.setAttribute("id","exercice");
        document.body.appendChild(para);
        var para = document.createElement("h1");
        para.setAttribute("id","exoName");
        document.getElementById("exercice").appendChild(para);
    }

    var exoName = document.getElementById("exoName");
    var element = document.getElementById("exercice");
    

    if (test == "HautDuCorps"){
        var longueur = Hcorps.length;
        exoName.innerHTML = "HAUT DU CORPS BRAS";
        verif = true;

        for (i=0; i<longueur; i++){
            var para = document.createElement("div");
            para.setAttribute("class", "bouton");
            var node = document.createTextNode(Hcorps[i]);
            para.appendChild(node);
            element.appendChild(para);
        }
    }
    if (test == "JambesFesses"){
        var longueur = Jambes.length;
        exoName.innerHTML = "JAMBES / FESSIER";
        verif = true;

        for (i=0; i<longueur; i++){
            var para = document.createElement("div");
            para.setAttribute("class", "bouton");
            var node = document.createTextNode(Jambes[i]);
            para.appendChild(node);
            element.appendChild(para);
        }
    }
    if (test == "TroncAbdos"){
        var longueur = Abdos.length;
        exoName.innerHTML = "TRONC / ABODS";
        verif = true;

        for (i=0; i<longueur; i++){
            var para = document.createElement("div");
            para.setAttribute("class", "bouton");
            var node = document.createTextNode(Abdos[i]);
            para.appendChild(node);
            element.appendChild(para);
        }
    }
    if (test == "Jogg"){
        para.setAttribute("class", "bouton");
        var node = document.createTextNode(Jambes[i]);
        para.appendChild(node);
        element.appendChild(para);
        verif = true;
    }

    Burger();
}

exercice("HautDuCorps");