export function signupController(signupElement) {
  signupElement.addEventListener("submit", (event) => {
    //no queremos que haga el comportamiento por defecto (querystring en barra dir)
    event.preventDefault();

    const passwordElement = signupElement.querySelector("#password");
    const passwordElementConfirm = signupElement.querySelector("#passwordConfirm");
    const emailElement = signupElement.querySelector("#username");

    if (
      validEmail(emailElement.value) &&
      validPassword(passwordElement.value, passwordElementConfirm.value)
    ) {
      createUser(emailElement.value, passwordElement.value);
    }
  });

  //comprobar que las contraseñas sean iguales
  function validPassword(password, passwordConfirmation) {
    const passwordElementConfirm =
      signupElement.querySelector("#passwordConfirm");

    if (password !== passwordConfirmation) {
      alert("Las contraseñas no son iguales");
      return false;
    }
    return true;
  }
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

  async function createUser(email, password) {
    //construir objeto con email y password siguiendo lo definido en el endpoint auth/register
    const user = {
      username: email,
      password: password,
    };
    //consumir el api de sparrest usando un POST y enviando los datos que introducido el user
    
    await fetch('http://127.0.0.1:8000/auth/register', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            "Content-Type":"application/json"
        }
    })
    //gestionar la respuesta





  }
}
