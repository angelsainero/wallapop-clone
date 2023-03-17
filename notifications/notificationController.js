import { pubSub } from "../pubSub.js";
import { buildNotificationView } from "./notificationView.js";


export function notificationController(notificationsElement) {
  function showMessage(message) {
    notificationsElement.innerHTML = buildNotificationView(message);
  }

  //nos suscribimos a los topics (topic suscrito, ejecución funcion)
  pubSub.subscribe(pubSub.TOPICS.SHOW_NOTIFICATION, (message)=>{
    showMessage(message)
  })


  return showMessage;
}


