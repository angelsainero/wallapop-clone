// VISTA: no debe acceder al DOM

export function buildAdvertsView(advert) {
  const newAdvertListElement = document.createElement("article");
  newAdvertListElement.classList.add("advert"); //añadimos al dom la class
  newAdvertListElement.innerHTML = `
  <div class="adv-title">
    <img src="${advert.image}"/>
    <span>${advert.name}<span>
  </div>
  <p>${advert.description}<p>
  <div class=price>
  <p align="right">${advert.price}<p>
  `;
  return newAdvertListElement;
}
