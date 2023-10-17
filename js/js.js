const hamburguer = document.querySelector('.hamburger');
const main = document.querySelector('.menu-navegacion');

hamburguer.addEventListener('click', ()=>{
    main.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(main.classList.contains('spread') && e.target != main && e.target != hamburguer){
        main.classList.toggle("spread")
    }
})

