export const createAdvert = async (image, name, description, price, type) => {
  const advert = {
    image: image,
    name: name,
    description: description,
    price: price,
    type: type,
  };

  const token = localStorage.getItem('token')
  const response = await fetch("http://127.0.0.1:8000/api/adverts", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(advert),
  });
  if (!response.ok) {
    throw new Error("Error creando Anuncio");
  }
};
