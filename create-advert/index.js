import { createAdvertController } from "./createAdvertController.js"

const token = localStorage.getItem('token')

if (!token) {
    //si no ha iniciado sesión le mandamos al home    
    window.location = '/'
} else {
    const createAdvertElement = document.querySelector('#createAdvert')
    createAdvertController(createAdvertElement)
}