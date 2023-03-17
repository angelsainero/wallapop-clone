import { signupController } from "./signupController.js";
import { notificationController } from "../notifications/notificationController.js";

const signupElement = document.querySelector("#createUser");
const notificationsElement = document.querySelector(".notifications");

notificationController(notificationsElement); 


signupController(signupElement);

//tras traernos todo lo relacionado con el notification controller aplicamos PubSub pattern 
//signupController es el Publisher porque el es quién va a solicitar que se muestre una notificación.
//notificationController es el que va a esta escuchando ese topic para que cada vez que sigContro.. emita 
//sobre un tpic, el notificationController reaccione

