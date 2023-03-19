const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  document.querySelector('html').classList.toggle('overflowHidden')
  document.querySelector('body').classList.toggle('overflowHidden')
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

document.addEventListener('click', e => {
  if (e.target.matches('.show-modal') && e.target.tagName == ('IMG')) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.querySelector('html').classList.toggle('overflowHidden')
    document.querySelector('body').classList.toggle('overflowHidden')
    var producto = e.target.parentElement.parentElement;
    var imgProduct = producto.querySelector('img').src;
    var Categoria = producto.querySelector('.product-category').textContent;
    var nombreProducto = producto.querySelector('.product-name').textContent;
    var precioProducto = producto.querySelector('.product-price').textContent;
    let html = `
  <div class="detailProduct">
    <div class="productImg">
    <img src="${imgProduct}" alt="" class="remove_Bg">
    </div>
  <div class="productInfo">
    <span class="product-category">${Categoria}</span>
    <h3 class="product-name">${nombreProducto}</h3>
    <p class="product-price">${precioProducto}</p><span class="cart-item-price2">$</span>
  </div>
</div>`;
    modal.innerHTML = html;
  }
})

productList.addEventListener('click', (e) => {
  departamento = e.target.parentElement.parentElement.querySelector('.product-category').textContent;
  modalPesos = document.querySelector('.modalPesos');
  overlayPesos = document.querySelector('.overlayPesos');
  input = e.target;

  if(!e.target.classList.contains('inputPesos')){return}
  if (e.target.matches('.inputPesos') && departamento == "CHARCUTERIA" || departamento == "CARNICERIA" || departamento == "ALIMENTO PARA MASCOTAS" || departamento == "FRUTOS SECOS") {
    modalPesos.classList.remove('hidden')
    overlayPesos.classList.remove('hidden')
  }
  overlayPesos.addEventListener('click', () => {
    modalPesos.classList.add('hidden')
    overlayPesos.classList.add('hidden')
  })
  modalPesos.addEventListener('click', (e) => {
    if (e.target.classList.contains('opcionPeso')) {
      input.value = e.target.value
      modalPesos.classList.add('hidden')
      overlayPesos.classList.add('hidden')
    }
    if (e.target.classList.contains('spanOpcionPeso')) {
      input.value = e.target.parentElement.value
      modalPesos.classList.add('hidden')
      overlayPesos.classList.add('hidden')
    }
  })
})

navBarProducts.addEventListener('click', (e) => {
  departamento = e.target.parentElement.parentElement.parentElement.querySelector('.product-category').textContent;
  modalPesos = document.querySelector('.modalPesos');
  overlayPesos = document.querySelector('.overlayPesos');
  input = e.target;

  if(!e.target.classList.contains('inputPesos')){return}
  if (e.target.matches('.inputPesos') && departamento == "CHARCUTERIA" || departamento == "CARNICERIA" || departamento == "ALIMENTO PARA MASCOTAS" || departamento == "FRUTOS SECOS") {
    modalPesos.classList.remove('hidden')
    overlayPesos.classList.remove('hidden')
  }
  overlayPesos.addEventListener('click', () => {
    modalPesos.classList.add('hidden')
    overlayPesos.classList.add('hidden')
  })
  modalPesos.addEventListener('click', (e) => {
    if (e.target.classList.contains('opcionPeso')) {
      input.value = e.target.value
      modalPesos.classList.add('hidden')
      overlayPesos.classList.add('hidden')
    }
    if (e.target.classList.contains('spanOpcionPeso')) {
      input.value = e.target.parentElement.value
      modalPesos.classList.add('hidden')
      overlayPesos.classList.add('hidden')
    }
  })
})