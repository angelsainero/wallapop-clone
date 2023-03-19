import { createAdvert } from "./createAdvert.js";

export const createAdvertController = async (createAdvertElement) => {
  createAdvertElement.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(createAdvertElement);
    const image = formData.get('picture');
    const name = formData.get('name')
    const description = formData.get('description')
    const price = formData.get('price')
    const type = formData.get('type')


    try {
        await createAdvert(image, name, description, price, type)
        window.location = '/'
      } catch (error) {
        alert(error)
      }
    })
  }



   
