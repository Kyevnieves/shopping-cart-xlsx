const btn_eliminarFiltro = document.querySelector('.eliminarFiltro');
btn_eliminarFiltro.addEventListener('click', ()=>{
containerFiltro = document.querySelector('.containerFilters');
  oReq.open("GET", url, true);
  oReq.responseType = "arraybuffer";

  oReq.onload = function(e){
      var info = readData();
      function readData(){
          var arraybuffer = oReq.response;
          var data = new Uint8Array(arraybuffer);
          var arr = new Array();
          for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i])
          var bstr = arr.join("");
          var workbook = XLSX.read(bstr, {type:"binary"});
          var first_sheet_name = workbook.SheetNames[0];
          var worksheet = workbook.Sheets[first_sheet_name];
          var info = XLSX.utils.sheet_to_json(worksheet, {raw:true})
          var JsonProducts = info;
          let Disponibles = info.filter(p => p.DISPONIBLE == "1");
          let Agotados = info.filter(p => p.DISPONIBLE == "0");
        //  var MayoraMenor = info.sort((a,b)=> {return b.Precio - a.Precio})
          let html = '';
          Disponibles.forEach(product => {
          html += `
          <div class = "product-item articulo">
          <div class = "product-img">
              <img src = "${product.ImgSrc}" alt="Super lomas express" class="remove_Bg fadeIn show-modal" loading="lazy">
              <i class='bx bxs-package StatusPositivo' > Disponible</i>
          </div>
          <div class = "product-content">
              <span class = "product-category">${product.Categoria}</span>
              <h3 class = "product-name">${product.Nombre}</h3>
              <p class = "product-price">${product.Precio}</p><span class="cart-item-price2">$</span>
              
              <button class="add-to-cart-button">
              <span class="add-to-cart">Comprar</span>
                <span class="added-to-cart">Agregado</span>
                <svg class="add-to-cart-box box-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="2" fill="#ffffff"/></svg>
                <svg class="add-to-cart-box box-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="2" fill="#ffffff"/></svg>
                <svg class="cart-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                <svg class="tick" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path fill="#ffffff" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"/></svg>
              </button>
              <div class="number number2">
	            <span class="minus">-</span>
	            <input id="Cantidad" type="text" value="1"/>
	            <span class="plus">+</span>
              </div>
          </div>
          </div>
          `;
      })
      let htmlAgotados = '';
            Agotados.forEach(product => {
              htmlAgotados += `
            <div class = "product-item articulo">
            <div class = "product-img">
                <img src = "${product.ImgSrc}" alt="Super lomas express" class="remove_Bg fadeIn show-modal" loading="lazy">
                <i class='bx bxs-package StatusNegativo'> Agotado</i>
            </div>
            <div class = "product-content">
                <span class = "product-category">${product.Categoria}</span>
                <h3 class = "product-name">${product.Nombre}</h3>
                <p class = "product-price">${product.Precio}</p><span class="cart-item-price2">$</span>
                <button class="add-to-cart-button">
                <span class="add-to-cart">Comprar</span>
                  <span class="added-to-cart">Agregado</span>
                  <svg class="add-to-cart-box box-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="2" fill="#ffffff"/></svg>
                  <svg class="add-to-cart-box box-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="2" fill="#ffffff"/></svg>
                  <svg class="cart-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                  <svg class="tick" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path fill="#ffffff" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"/></svg>
                </button>
                <div class="number number2">
                <span class="minus">-</span>
                <input id="Cantidad" type="text" value="1"/>
                <span class="plus">+</span>
                </div>
            </div>
            </div>
            `
        })
      productList.innerHTML = html + htmlAgotados;
  }
}
oReq.send();
containerFiltro.classList.toggle('fadeOut')
setTimeout(function(){
    containerFiltro.classList.toggle('block')
},600)
setTimeout(function(){
    containerFiltro.classList.toggle('fadeOut')},1000)
})


Categoria.addEventListener('change', Cambio)
Valor.addEventListener('change', Cambio)

function Cambio(){
  let ValorSeleccionado = Valor.options[Valor.selectedIndex].value;
  let CategoriaSeleccionada = Categoria.options[Categoria.selectedIndex].text.toUpperCase();
  oReq.open("GET", url, true);
  oReq.responseType = "arraybuffer";

  oReq.onload = function(e){
      var info = readData();
      function readData(){
          var arraybuffer = oReq.response;
          var data = new Uint8Array(arraybuffer);
          var arr = new Array();
          for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i])
          var bstr = arr.join("");
          var workbook = XLSX.read(bstr, {type:"binary"});
          var first_sheet_name = workbook.SheetNames[0];
          var worksheet = workbook.Sheets[first_sheet_name];
          var info = XLSX.utils.sheet_to_json(worksheet, {raw:true})
          var CategoriasPadres = info.filter(p=> p.Nombre == CategoriaSeleccionada)
          var Categorias = info.filter(p => p.Categoria == CategoriaSeleccionada)
          if (ValorSeleccionado == 50){Categorias = info.filter(p => p.Categoria == CategoriaSeleccionada && p.Precio <= "50" && p.DISPONIBLE == "1")}
          if (ValorSeleccionado == 20){Categorias = info.filter(p => p.Categoria == CategoriaSeleccionada && p.Precio <= "20" && p.DISPONIBLE == "1")}
          if (ValorSeleccionado == 15){Categorias = info.filter(p => p.Categoria == CategoriaSeleccionada && p.Precio <= "15" && p.DISPONIBLE == "1")}
          if (ValorSeleccionado == 10){Categorias = info.filter(p => p.Categoria == CategoriaSeleccionada && p.Precio <= "10" && p.DISPONIBLE == "1")}
          if (ValorSeleccionado == 5){Categorias = info.filter(p => p.Categoria == CategoriaSeleccionada && p.Precio <= "5" && p.DISPONIBLE == "1")}
          subCategorias.addEventListener('change',()=>{
          subCategoriaSeleccionada = subCategorias.options[subCategorias.selectedIndex].text;
          if (subCategoriaSeleccionada !== ""){
            subCategoria = Categorias.filter(p => p.subCategoria == subCategoriaSeleccionada)
          }
          let html2 = '';
          subCategoria.forEach(product => {
          html2 += `
          <div class = "product-item articulo">
          <div class = "product-img">
              <img src = "${product.ImgSrc}" alt="Super lomas express" class="remove_Bg fadeIn show-modal" loading="lazy">
              <i class='bx bxs-package StatusPositivo' > Disponible</i>
          </div>
          <div class = "product-content">
              <span class = "product-category">${product.Categoria}</span>
              <h3 class = "product-name">${product.Nombre}</h3>
              <p class = "product-price">${product.Precio}</p><span class="cart-item-price2">$</span>
              
              <button class="add-to-cart-button">
              <span class="add-to-cart">Comprar</span>
                <span class="added-to-cart">Agregado</span>
                <svg class="add-to-cart-box box-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="2" fill="#ffffff"/></svg>
                <svg class="add-to-cart-box box-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="2" fill="#ffffff"/></svg>
                <svg class="cart-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                <svg class="tick" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path fill="#ffffff" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"/></svg>
              </button>
              <div class="number number2">
	            <span class="minus">-</span>
	            <input id="Cantidad" type="text" value="1"/>
	            <span class="plus">+</span>
              </div>
          </div>
          </div>
          `;
          })
          productList.innerHTML = html2;})

          let html = '';
          Categorias.forEach(product => {
          html += `
          <div class = "product-item articulo">
          <div class = "product-img">
              <img src = "${product.ImgSrc}" alt="Super lomas express" class="remove_Bg fadeIn show-modal" loading="lazy">
              <i class='bx bxs-package StatusPositivo' > Disponible</i>
          </div>
          <div class = "product-content">
              <span class = "product-category">${product.Categoria}</span>
              <h3 class = "product-name">${product.Nombre}</h3>
              <p class = "product-price">${product.Precio}</p><span class="cart-item-price2">$</span>
              
              <button class="add-to-cart-button">
              <span class="add-to-cart">Comprar</span>
                <span class="added-to-cart">Agregado</span>
                <svg class="add-to-cart-box box-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="2" fill="#ffffff"/></svg>
                <svg class="add-to-cart-box box-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="2" fill="#ffffff"/></svg>
                <svg class="cart-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                <svg class="tick" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path fill="#ffffff" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"/></svg>
              </button>
              <div class="number number2">
	            <span class="minus">-</span>
	            <input id="Cantidad" type="text" value="1"/>
	            <span class="plus">+</span>
              </div>
          </div>
          </div>
          `;})


           let htmlSubCategoria = '';
           CategoriasPadres.forEach(product =>{
           htmlSubCategoria += `<option value="${1}">${product.subCategoria}</option>`
           }) 
      subCategorias.innerHTML = htmlSubCategoria;
      productList.innerHTML = html;
      }
    }
    oReq.send();
}