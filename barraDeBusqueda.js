document.addEventListener("keyup", e => {
  if (e.target.matches("#buscador")) {
    if (e.target.value !== "") {
      document.querySelector('.xBuscador').setAttribute('id', 'visible')
    } else document.querySelector('.xBuscador').removeAttribute('id', 'visible')
    if (e.target.value === "") {
      Buscar()
    }
    if (e.key === "Escape") e.target.value = ""
    document.querySelectorAll(".articulo").forEach(producto => {
      producto.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ?
        producto.classList.remove("filtro") :
        producto.classList.add("filtro")
    })
  }
})

document.addEventListener("keyup", e => {
  if (e.target.matches("#buscadorNav")) {
    if (e.target.value !== "") {
      document.querySelector('.xBuscadorNav').setAttribute('id', 'visible')
    } else document.querySelector('.xBuscadorNav').removeAttribute('id', 'visible')
    if (e.key === "Escape") e.target.value = ""
    let ListaProductos = e.target.parentElement.parentElement.querySelector('.product-list-Nav-Bar');
    ListaProductos.querySelectorAll(".articulo").forEach(producto => {
      producto.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ?
        producto.removeAttribute('id', 'DisplayNone') :
        producto.setAttribute('id', 'DisplayNone')
    })
    if (e.target.value === "") {
      let ListaProductos = e.target.parentElement.parentElement.querySelector('.product-list-Nav-Bar');
      ListaProductos.querySelectorAll(".articulo").forEach(producto => {
        producto.classList.add('DisplaNone')
      })
    }
  }
})

xBuscadorNav.addEventListener('click', () => {
  document.querySelector('#buscadorNav').value = ""
  xBuscadorNav.removeAttribute('id', 'visible')
})

function Buscar() {
  document.querySelectorAll(".articulo").forEach(producto => {
    producto.textContent.toLowerCase().includes(document.querySelector('#buscador').value.toLowerCase()) ?
      producto.classList.remove("filtro") :
      producto.classList.add("filtro")
  })
}

function BuscarEnNav() {
  navBarProducts.querySelectorAll(".articulo").forEach(producto => {
    producto.textContent.toLowerCase().includes(document.querySelector('#buscador').value.toLowerCase()) ?
      producto.removeAttribute('id', 'DisplayNone') :
      producto.setAttribute('id', 'DisplayNone')
  })
}
document.addEventListener('click', e => {
  let departamento = e.target.parentElement.parentElement.querySelector('.product-category');
  let departamentoNavBar = e.target.parentElement.parentElement.parentElement.querySelector('.product-category');
  if (e.target.matches('.plus') && e.target.parentElement.querySelector('#Cantidad').value >= 1) {
    Cantidad = e.target.parentElement.querySelector('#Cantidad').value++;
  }
  if (e.target.matches('.plus') && e.target.parentElement.querySelector('#Cantidad').value <= 1) {
    if (departamentoNavBar.textContent.includes('CHARCUTERIA') || departamentoNavBar.textContent.includes('CARNICERIA') || departamentoNavBar.textContent.includes('POSTRES') || departamentoNavBar.textContent.includes('FRUTOS SECOS') || departamentoNavBar.textContent.includes('ALIMENTO PARA MASCOTAS')) {
      Cantidad = e.target.parentElement.querySelector('#Cantidad').value = 1
    }
  }
  if (e.target.matches('.minus') && e.target.parentElement.querySelector('#Cantidad').value <= 1 && e.target.parentElement.querySelector('#Cantidad').value > 0) {
    if (departamentoNavBar.textContent.includes('POSTRES') || departamentoNavBar.textContent.includes('FRUTOS SECOS')) {
      Cantidad = e.target.parentElement.querySelector('#Cantidad').value -= .1
    }
  }
  if (e.target.matches('.minus') && e.target.parentElement.querySelector('#Cantidad').value <= 1 && e.target.parentElement.querySelector('#Cantidad').value > 0) {
    if (departamentoNavBar.textContent.includes('CHARCUTERIA') || departamentoNavBar.textContent.includes('CARNICERIA') || departamentoNavBar.textContent.includes('ALIMENTO PARA MASCOTAS')) {
      Cantidad = e.target.parentElement.querySelector('#Cantidad').value -= .25
    } else if (e.target.parentElement.querySelector('#Cantidad').value == 1) {
      e.target.parentElement.querySelector('#Cantidad').value = 1
    }
  }
  if (e.target.matches('.minus') && e.target.parentElement.querySelector('#Cantidad').value >= 2) {
    if (e.target.parentElement.querySelector('#Cantidad').value >= 1) {
      e.target.parentElement.querySelector('#Cantidad').value--
    }
  }



})

