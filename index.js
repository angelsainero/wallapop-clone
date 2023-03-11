import { adverts } from "./advert-list/adverts.js";

//Accedemos para obtener el Nodo
const wallaListElement = document.querySelector('.wallapop-list')


//ADVERTS LIST

for (const advert of adverts) {
  const newWallaListElement = document.createElement("article");
  newWallaListElement.innerHTML = `
  <p>${advert.name}<p>
  <p>${advert.description}<p>
  <p>${advert.price}<p>
  <p>${advert.image}<p>
  `;


  wallaListElement.appendChild(newWallaListElement)

}
