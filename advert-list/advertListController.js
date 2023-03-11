import { adverts } from "./advert-list/adverts.js";
import { buildAdvertsView } from "./advertView.js";


function drawAdverts() {
  //Accedemos para obtener el Nodo
  const wallaListElement = document.querySelector(".wallapop-list");

  //Listado Anuncios
  for (const advert of adverts) {
    const newWallaListElement = buildAdvertsView (advert)
    wallaListElement.appendChild(newWallaListElement);
  }
}
