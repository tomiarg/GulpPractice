document.addEventListener("DOMContentLoaded",function(){
    iniciarApp();
});

function iniciarApp(){
    fijarNav();
    crearGaleria();
    moverScroll();
};
function fijarNav(){
    const header = document.querySelector(".header");
    const sobreFestival = document.querySelector(".sobre-festival");
    const body = document.querySelector("body")
    window.addEventListener('scroll',function(){
        if(sobreFestival.getBoundingClientRect().top < 0){
            header.classList.add("fijo");
            body.classList.add("scroll-body");
        }else{
            header.classList.remove("fijo");
            body.classList.remove("scroll-body");
        }
    })

}


function moverScroll(){
    const enlaces = document.querySelectorAll(".navegacion-principal a");
    enlaces.forEach(elemento=>{
        elemento.addEventListener('click', function(e){
            
            e.preventDefault();
            const seccionScroll = e.target.attributes.href.value;
            console.log(seccionScroll);
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({behavior: "smooth"});
        })

    })
}

function crearGaleria(){
    const galeria = document.querySelector(".galeria-imagenes");
    for(let i = 1; i < 13; i++){
        const imagen = document.createElement("picture");
        imagen.innerHTML= `
        <source srcset="build/img/thumb/${i}.avif" type="image/avif">
        <source srcset="build/img/thumb/${i}.webp" type="image/webp">
        <img loading="lazy" src="./img/thumb/${i}.jpg" alt="Galeria"></img>
        `
        ;
        imagen.onclick = function(){
            ponerImg(i);
        }
        galeria.appendChild(imagen);
    }
}

function ponerImg(id){
    const imagen = document.createElement("picture");
    imagen.innerHTML= `
    <source srcset="build/img/grande/${id}.avif" type="image/avif">
    <source srcset="build/img/grande/${id}.webp" type="image/webp">
    <img loading="lazy" src="./img/grande/${id}.jpg" alt="imagen grande galeria"></img>
    `
    ;
    // crear div
    const overlay = document.createElement("Div");
    overlay.appendChild(imagen);
    overlay.classList.add("overlay");

    //btn para cerrar
    const cerrarModal = document.createElement("p");
    cerrarModal.textContent = "X";
    cerrarModal.classList.add("btn-cerrar");
    cerrarModal.onclick = function(){
        const body = document.querySelector("body");
        body.appendChild(overlay);
        body.classList.remove("fijar-body");
        overlay.remove();
    }
    
    overlay.appendChild(cerrarModal);

    //añadir al HTM
    const body = document.querySelector("body");
    body.appendChild(overlay);
    body.classList.add("fijar-body");

}



