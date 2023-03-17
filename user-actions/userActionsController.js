export function userActionsController(userActionsElement) {
  const token = localStorage.getItem("token");
  if (token) {
    // si hay token borrar link login y signup 
    const loginlinkElement = userActionsElement.querySelector('#login')
    const signupLinkElement = userActionsElement.querySelector('#signup')
    loginlinkElement.remove()
    signupLinkElement.remove()
  } else {
    // borrar link de crear Anuncio
    const createlinkElement = userActionsElement.querySelector('#createAdvert')
    createlinkElement.remove()
    
    
  }
}
