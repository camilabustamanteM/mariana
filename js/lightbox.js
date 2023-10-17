const imagenes= document.querySelectorAll('.img-galeria')
const imagenesLight= document.querySelector('.agregar-imagen')
const ContenedorLight= document.querySelector('.imagen-light')
/*Con lo segundo*/
const hamburger1= document.querySelector('.hamburger')

imagenes.forEach(imagen=>{
    imagen.addEventListener('click',()=>{
        aparecerimagen(imagen.getAttribute('src'))
     } )
})

/* segundo esto */
ContenedorLight.addEventListener('click',(e)=>{
    if(e.target !== imagenesLight){
        ContenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImagen')
        hamburger1.style.opacity= '1'
    }
    

})

const aparecerimagen = (imagen)=>{
    imagenesLight.src = imagen;
    ContenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImagen')
    hamburger1.style.opacity = '0'
}