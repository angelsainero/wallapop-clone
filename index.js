import { advertListController } from "./advert-list/advertListController.js";
import { notificationController } from "./notifications/notificationController.js";


//Accedemos para obtener el Nodo
const advertListElement = document.querySelector('.wallapop-list');
const notificationsElement = document.querySelector('.notifications')

//se lo pasamos al controlador
const showMessage= notificationController(notificationsElement); //comunicación entre controladores
advertListController(advertListElement, showMessage);
