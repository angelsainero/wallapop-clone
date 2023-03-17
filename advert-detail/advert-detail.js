export const getAdvertId = async (advertId) => {

 const response = await fetch(`http://localhost:8000/api/adverts/${advertId}`)

 if (!response.ok) {
    throw new Error('El anuncio no existe')
 } else {
    
 }

 const advert = await response.json();

 return advert;
}