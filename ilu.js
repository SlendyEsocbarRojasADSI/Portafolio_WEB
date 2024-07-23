let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
habilidades[0].classList.add("photoshop");
        habilidades[1].classList.add("ilustrator");
        habilidades[2].classList.add("aftereffects");
        habilidades[3].classList.add("canva");
        habilidades[4].classList.add("inviso");
        habilidades[5].classList.add("IbispaintX");
        habilidades[6].classList.add("Paintoolsai");
        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("trabajo");
        habilidades[9].classList.add("creatividad");
        habilidades[10].classList.add("dedicacion");
        habilidades[11].classList.add("adaptacion");
        habilidades[12].classList.add("detalle");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}