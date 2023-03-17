import { createUser } from "./signup.js";

export function signupController(signupElement) {
  signupElement.addEventListener("submit", async (event) => {
    //no queremos que haga el comportamiento por defecto (querystring en barra dir)
    event.preventDefault();
    
    const emailElement = signupElement.querySelector("#username");
    const passwordElement = signupElement.querySelector("#password");
    const passwordElementConfirm = signupElement.querySelector("#passwordConfirm");

    if (
      validEmail(emailElement.value) &&
      validPassword(passwordElement.value, passwordElementConfirm.value)
    ) {
        try {
            await createUser(emailElement.value, passwordElement.value);
            signupElement.reset();
            alert('usuario creado correctamente')
            window.location = '/'
        } catch (error) {
            alert (error.message)
            
        }
    }
  });
  
  //validamos email
  function validEmail(email) {
    const mailregExp = new RegExp(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );

    if (!mailregExp.test(email)) {
      alert("El email no está bien escrito");
      return false;
    }
    return true;
  }
  //comprobar que las contraseñas sean iguales
  function validPassword(password, passwordConfirmation) {
    
    if (password !== passwordConfirmation) {
      alert("Las contraseñas no son iguales");
      return false;
    }
    return true;
  }

 }
