//Controlador: Debería RECIBIR  del dom el NODO  por parametro

import { adverts } from "./adverts.js";
import { buildAdvertsView, buildSpinnerView } from "./advertView.js";

//recibimos el nodo del controlador
export function advertListController(advertListElement) {
  advertListElement.innerHTML = buildSpinnerView();
  //mostrar ruleta
  //Listado Anuncios
  for (const advert of adverts) {
    const newAdvertListElement = buildAdvertsView(advert);
    advertListElement.appendChild(newAdvertListElement);
  }
  //ocultar la ruleta
  hideSpinner(advertListElement);
}

function hideSpinner(advertListElement) {
  const spinnerElement = advertListElement.querySelector(".lds-spinner");
  spinnerElement.classList.add("hide");
}

//fetch  js 2 2:20 -
// ruleta 3:23:00

//si lo ponermos todo en el fichero sin encapsular seria:

// import { tweets } from "./tweets.js";

// const tweetListElement = document.querySelector('.tweet-list')

// // generar el HTML que representará un tweet
// for (const tweet of tweets) {
//   const newTweetElement = document.createElement('article');
//   newTweetElement.innerHTML = `
//     <p>${tweet.handler}</p>
//     <p>${tweet.body} - ${tweet.date}</p>
//   `;

//   // añadirlo al DOM.
//   tweetListElement.appendChild(newTweetElement)
// }
