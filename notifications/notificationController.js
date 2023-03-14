import { buildNotificationView } from "./notificationView.js";

export function notificationController(notificationsElement) {
  function showMessage(message) {
    notificationsElement.innerHTML = buildNotificationView(message);
  }
  return showMessage;
}
