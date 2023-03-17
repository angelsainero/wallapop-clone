//MODELO

export async function loginUser(email, password) {
    //construir objeto con email y password siguiendo lo definido en el endpoint auth/register
    const user = {
      username: email,
      password: password,
    };
    //consumir el api de sparrest usando un POST y enviando los datos que introducido el user
    
    const response = await fetch('http://127.0.0.1:8000/auth/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            "Content-Type":"application/json"
        }
    })
    if (!response.ok) {
        throw new Error('Error al identificar el usuario')
    }
    
    //gestionar la respuesta de sparrest (el token JWt)
    const data = await response.json()

    return data.accessToken;







  }