import { advertDetailController } from "./advertDetailController.js";

//leemos de la url el id del anuncio
const params = new URLSearchParams(window.location.search);
const advertId = params.get("advertId");

if (!advertId) {
  //si no existe query param
  window.location = "/";
} else {
  //crear controlador para pasar el id
  const advertDetailElement = document.querySelector(".advert-detail");
  advertDetailController(advertDetailElement, advertId);
}
