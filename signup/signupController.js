export function signupController(signupElement) {
  signupElement.addEventListener("submit", (event) => {
    //no queremos que haga el comportamiento por defecto (querystring en barra dir)
    event.preventDefault();

    if (isFormValid(signupElement)) {
      //crear usuario
    }
  });

  //comprobar que las contraseñas sean iguales
  function validPassword(signupElement) {
    const passwordElement = signupElement.querySelector("#password");
    const passwordElementConfirm =
      signupElement.querySelector("#passwordConfirm");

    if (passwordElement.value !== passwordElementConfirm.value) {
      alert("Las contraseñas no son iguales");
      return false;
    }
    return true;
  }
  //validamos email
  function validEmail(signupElement) {
    const mailregExp = new RegExp(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
    const emailElement = signupElement.querySelector("#username");

    if (!mailregExp.test(emailElement.value)) {
      alert("El email no está bien escrito");
      return false;
    }
    return true;
  }
  //validamos formulario con los dos requisitos
  function isFormValid(signupElement) {
    return validEmail(signupElement && validPassword(signupElement));
  }
}
