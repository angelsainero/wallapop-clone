//Controlador: Debería RECIBIR  del dom el NODO  por parametro

import { getAdverts } from "./adverts.js";
import { buildAdvertsView, buildSpinnerView } from "./advertView.js";

//recibimos el nodo del controlador
export async function advertListController(advertListElement) {
  //mostrar ruleta
  advertListElement.innerHTML = buildSpinnerView();


  //Listado Anuncios
  const adverts = await getAdverts();

  //ocultar la ruleta
  hideSpinner(advertListElement);

  for (const advert of adverts) {
    const newAdvertListElement = buildAdvertsView(advert);
    advertListElement.appendChild(newAdvertListElement);
  }
}

function hideSpinner(advertListElement) {
  const spinnerElement = advertListElement.querySelector(".lds-spinner");
  spinnerElement.classList.add("hide");
}



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
