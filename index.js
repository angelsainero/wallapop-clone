import { advertListController } from "./advert-list/advertListController.js";
import { notificationController } from "./notifications/notificationController.js";

//Accedemos para obtener el Nodo
const advertListElement = document.querySelector(".wallapop-list");
const notificationsElement = document.querySelector(".notifications");

//punto de unión entre controladores
advertListElement.addEventListener("newNotification", (event) => {
  console.log("he recibido el evento", event.detail.message);
  showMessage(event.detail.message)
});

//se lo pasamos al controlador
const showMessage = notificationController(notificationsElement); 
advertListController(advertListElement);
