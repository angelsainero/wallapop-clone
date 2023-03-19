// VISTA: no debe acceder al DOM 

export function buildAdvertsView(advert) {
  const newAdvertListElement = document.createElement("article");
  newAdvertListElement.classList.add("advert"); //añadimos al dom la class
  newAdvertListElement.innerHTML = `
 
  <a href="/advert-detail.html?advertId=${advert.id}" class="href">
  <div class="adv-title">
    <img src="${advert.image}"/>
    <span>${advert.name}<span>
  </div>
  <p class="type">${advert.type}<p>
  <p>${advert.description}<p>
  <div class=price>
  <p align="right">Precio: ${advert.price}<p>
  </a>
  
  `;
  return newAdvertListElement;
}

export function buildSpinnerView() {  //prepara el spinner para que el controlador lo mande al dom
  return `<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`
}


export function buildEmptyAdvertList() {
  return `
  <div class="alert-ok">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
  No hay ningún Anuncio que Mostrar
</div>  
  `
}


