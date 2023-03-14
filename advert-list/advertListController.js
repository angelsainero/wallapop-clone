//Controlador: Debería RECIBIR  del dom el NODO  por parametro

import { getAdverts } from "./adverts.js";
import {
  buildAdvertsView,
  buildSpinnerView,
  buildErrorLoadingAdverts,
} from "./advertView.js";

//recibimos el nodo del controlador
export async function advertListController(advertListElement) {
  //mostrar ruleta
  advertListElement.innerHTML = buildSpinnerView();
  let adverts = [];
  try {
    //Listado Anuncios
    adverts = await getAdverts();

    //ocultar la ruleta
    hideSpinner(advertListElement);

    for (const advert of adverts) {
      const newAdvertListElement = buildAdvertsView(advert);
      advertListElement.appendChild(newAdvertListElement);
    }
    //gestion del error
  } catch (error) {
    advertListElement.innerHTML = buildErrorLoadingAdverts();
  }
}

function hideSpinner(advertListElement) {
  const spinnerElement = advertListElement.querySelector(".lds-spinner");
  spinnerElement.classList.add("hide");
}
