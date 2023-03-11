export function buildAdvertsView(advert) {
  const newWallaListElement = document.createElement("article");
  newWallaListElement.innerHTML = `
      <p>${advert.name}<p>
      <p>${advert.description}<p>
      <p>${advert.price}<p>
      <p>${advert.image}<p>
      `;
      return newWallaListElement;
}
