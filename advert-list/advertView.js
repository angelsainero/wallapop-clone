// VISTA: no debe acceder al DOM 

export function buildAdvertsView(advert) {
  const newAdvertListElement = document.createElement("article");
  newAdvertListElement.classList.add("advert"); //añadimos al dom la class
  newAdvertListElement.innerHTML = `
  <div class="adv-title">
    <img src="${advert.image}"/>
    <span>${advert.name}<span>
  </div>
  <p>${advert.type}<p>
  <p>${advert.description}<p>
  <div class=price>
  <p align="right">${advert.price}<p>
  `;
  return newAdvertListElement;
}

export function buildSpinnerView() {  //prepara el spinner para que el controlador lo mande al dom
  return `<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`
}

export function buildErrorLoadingAdverts(){
  return `
  <div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
  No se han podido cargar los Anuncios.
</div>  
  `
}

export function buildSuccessLoadingAdverts(){
  return `
  <div class="alert-ok">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
  Se han Cargado todos los Anuncios.
</div>  
  `
}