import { advertListController } from "./advert-list/advertListController.js";

//Accedemos para obtener el Nodo
const advertListElement = document.querySelector(".wallapop-list");

//se lo pasamos al controlador
advertListController(advertListElement);
