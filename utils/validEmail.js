export function validEmail(email) {
    const mailregExp = new RegExp(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      );
      return mailregExp.test(email)
  
}