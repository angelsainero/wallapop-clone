// Es el orquestador de la APP

export function buildAdvertsView(advert) {
  const newAdvertListElement = document.createElement("article");
  newAdvertListElement.innerHTML = `
      <p>${advert.name}<p>
      <p>${advert.description}<p>
      <p>${advert.price}<p>
      <p>${advert.image}<p>
      `;
      return newAdvertListElement;
}
