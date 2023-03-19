const slider = document.querySelector('.gallery');
const containerProductsBanner = document.querySelector('.containerProducts');
let isDown = false;
let startX;
let scrollLeft;



document.addEventListener('DOMContentLoaded', ()=>{
  var xHTTP = new XMLHttpRequest();
  xHTTP.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      let RespuestadeServidor = JSON.parse(xHTTP.responseText);
      Jamones = RespuestadeServidor.Jamones
      let html = '';
      Jamones.forEach(product => {
        html += `
        <div class="elemento">
                <img src="${product.ImgSrc}" alt="" srcset="" width="100" height="100">
                <h3 class="productName DisplayNone">${product.Nombre}</h3>
                <h3 class="marcaProducto DisplayNone">Marca: ${product.Marca}</h3>
                <h3 class="calidadProducto DisplayNone"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></h3>
        </div>
        
        `
      })
      containerProductsBanner.innerHTML = html
  }
  }
  xHTTP.open("GET", "productosBanner.json", true)
  xHTTP.send();
})

containerProductsBanner.addEventListener('click', e=>{
  if(e.target.matches('IMG')){
    srcImg = e.target.src;
    imagenProducto = document.querySelector('.ImgProduct').querySelector('img');
    imagenProducto.src=srcImg
    // INFORMACION DE PRODUCTO CLICKEADO
    productName = e.target.parentElement.querySelector('.productName');
    marcaProducto = e.target.parentElement.querySelector('.marcaProducto');
    calidadProducto = e.target.parentElement.querySelector('.calidadProducto').innerHTML;

    divContenedorInfo = e.target.parentElement.parentElement.parentElement;
    contenedorInfoProducto = divContenedorInfo.querySelector('.contentProduct');

    // REESCRITURA DE INFORMACION DE PRODUCTO
    contenedorInfoProducto.querySelector('.productName').textContent = productName.textContent
    contenedorInfoProducto.querySelector('.marcaProducto').textContent = marcaProducto.textContent
    contenedorInfoProducto.querySelector('.calidadProducto').innerHTML = calidadProducto
  }
})

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 1;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});


