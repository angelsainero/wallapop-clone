export const buildAdvertDetail = (advert) => {
 return `
    <div class="">
      <img src="${advert.image}"/>
      <span>${advert.name}<span>
    </div>
    <p>${advert.type}<p>
    <p>${advert.description}<p>
    <div class=price>
    <p align="right">${advert.price}<p>
    </a>
    `
}