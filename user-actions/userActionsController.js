import { decodeToken } from "../utils/decodeToken.js";
import { hello } from "./userActionsView.js";

export function userActionsController(userActionsElement) {
  const token = localStorage.getItem("token");
  const closeSessionElement = userActionsElement.querySelector('#closeSession')

  if (token) {
    // si hay token borrar link login y signup 
    const loginlinkElement = userActionsElement.querySelector('#login')
    const signupLinkElement = userActionsElement.querySelector('#signup')
    loginlinkElement.remove()
    signupLinkElement.remove()
    const payload = decodeToken(token)
    
    userActionsElement.appendChild(hello(payload.username))
    closeSessionElement.addEventListener ('click', () => {
      localStorage.removeItem('token')
      window.location.reload()
    })

  } else {
    // borrar link de crear Anuncio
    const createlinkElement = userActionsElement.querySelector('#createAdvert')
    createlinkElement.remove()    
    closeSessionElement.remove()
  }
}
