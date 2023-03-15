export function signupController(signupElement) {
  signupElement.addEventListener("submit", (event) => {
    //no queremos que haga el comportamiento por defecto (querystring en barra dir)
    event.preventDefault();  

    
    
    //comprobar que las contraseñas sean iguales
    const passwordElement = document.querySelector("#password");
    const passwordElementConfirm = document.querySelector("#passwordConfirm");
    
    if (passwordElement.value !== passwordElementConfirm.value) {
        alert("Las contraseñas no son iguales");
    
    }
    //validamos email
    const mailregExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    const emailElement = signupElement.querySelector('#username')   

    if(!mailregExp.test(emailElement.value)){
        alert('El email no está bien escrito');
    }
});
}
