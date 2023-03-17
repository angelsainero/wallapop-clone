import { pubSub } from "../pubSub.js";
import { validEmail } from "../utils/validEmail.js";
import { loginUser } from "./login.js";

export function loginController(loginElement) {
  loginElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailElement = loginElement.querySelector("#username");
    if (!validEmail(emailElement.value)) {
      
      pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, "Email incorrecto")
    } else {
      logUser(loginElement);
    }
  });
  //nueva forma de acceder a los datos de form sin querySelector
  async function logUser(loginElement) {
    const formData = new FormData(loginElement);
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      //guardamos el token 
      const jwt = await loginUser(username,password)   
      localStorage.setItem('token', jwt)
      window.location= '/'   
    } catch (error) {
      pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, error.message)
    }
  }
}
