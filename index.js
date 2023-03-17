import { advertListController } from "./advert-list/advertListController.js";
import { notificationController } from "./notifications/notificationController.js";
import { userActionsController } from "./user-actions/userActionsController.js";



//Accedemos para obtener el Nodo
const advertListElement = document.querySelector(".wallapop-list");
const notificationsElement = document.querySelector(".notifications");
const userActionsElement = document.querySelector(".actions");

//se lo pasamos al controlador
const showMessage = notificationController(notificationsElement); 
advertListController(advertListElement);
userActionsController(userActionsElement);


//punto de unión entre controladores
advertListElement.addEventListener("newNotification", (event) => {
  console.log("he recibido el evento", event.detail.message);
  showMessage(event.detail.message)
});


