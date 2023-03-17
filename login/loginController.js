import { validEmail } from "../utils/validEmail.js";

export function loginController(loginElement) {
  loginElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailElement = loginElement.querySelector('#username')
    if (!validEmail(emailElement.value)) {
        alert ("Email incorrecto")
    }


  });
}
