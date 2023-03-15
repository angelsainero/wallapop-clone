//Controlador: Debería RECIBIR  del dom el NODO  por parametro que debe gestionar

import { getAdverts } from "./adverts.js";
import {
  buildAdvertsView,
  buildSpinnerView,  
  buildEmptyAdvertList,
} from "./advertView.js";


//recibimos el nodo del controlador
export async function advertListController(advertListElement) {
  //mostrar ruleta
  advertListElement.innerHTML = buildSpinnerView();
  let adverts = [];
  try {
    //Carga Listado Anuncios
    adverts = await getAdverts();
    // showMessage("Los Anuncios se cargaron correctamente");
    dispatchCustomEvent("Los Anuncios se cargaron correctamente", advertListElement)
    
    //Gestión si hay o no anuncios
    if (adverts.length > 0) {
      drawAdverts(adverts, advertListElement);
    } else {
      showEmptyMessage(advertListElement);
    }
    
    //gestion del error
  } catch (error) {
    // showMessage("No hemos podido cargar los anuncios");
    dispatchCustomEvent("No hemos podido cargar los anuncios", advertListElement)
    
  } finally {
    //ocultar la ruleta
    hideSpinner(advertListElement);
    
  }
}

function hideSpinner(advertListElement) {
  const spinnerElement = advertListElement.querySelector(".lds-spinner");
  spinnerElement.classList.add("hide");
}

function drawAdverts(adverts, advertListElement) {
  for (const advert of adverts) {
    const newAdvertListElement = buildAdvertsView(advert);
    advertListElement.appendChild(newAdvertListElement);
  }
}

function showEmptyMessage(advertListElement) {
  advertListElement.innerHTML = buildEmptyAdvertList();
}

function dispatchCustomEvent(message, advertListElement) {
  const event = new CustomEvent ('newNotification', {
    detail: {
      message: message
    }
  })
  //propagamos evento al nodo que controlamos 
  advertListElement.dispatchEvent(event);
}