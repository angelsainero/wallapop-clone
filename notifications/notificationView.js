export function buildNotificationView(message) {
 return `
 <div class="alert-gray">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
  ${message}.
</div>  
  
 `   
}