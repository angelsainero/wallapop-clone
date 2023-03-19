export const buildAdvertDetail = (advert) => {
  return `
    <div class="detailed">
      <div class=adv-title>
        <img src="${advert.image}"/>
        <br>
        <span>${advert.name}<span>
      </div>
      <p>${advert.type}<p>
      <p>${advert.description}<p>
      <div class=price>
      <p align="right">Precio: ${advert.price}<p>    
      <button id="deleteAdvert">Borrar Anuncio</button>
    </div>
    `;
};

//pintamos el botón por defecto, si la logica no se cumple borro el botón, si se cumple ademas damos funcionalidad al botón
