  export async function getAdverts(){
    const advertsURL = 'http://127.0.0.1:8000/api/adverts'

    const response = await fetch(advertsURL);
    const adverts = await response.json();

    return adverts
    
  }