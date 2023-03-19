import { decodeToken } from "../utils/decodeToken.js"
import { deleteAdvert, getAdvertId } from "./advert-detail.js"
import { buildAdvertDetail } from "./advertDetailView.js"

export const advertDetailController = async (advertDetailElement, advertId) => {

try {
    const advert = await getAdvertId(advertId)
    advertDetailElement.innerHTML = buildAdvertDetail (advert)
    deleteButton(advertDetailElement, advert)

} catch (error) {
    alert(error)
}
function deleteButton(advertDetailElement, advert) {
    const token = localStorage.getItem('token')
    const deleteButtonElement = advertDetailElement.querySelector('#deleteAdvert')
    if (!token) {
        //borramos botón
        deleteButtonElement.remove()

        
    } else {
        const userInfo = decodeToken(token)
        if (advert.userId===userInfo.userId) {
            //damos funcionalidad al botón
            deleteButtonElement.addEventListener('click', async () => {
                const answer = confirm('¿Estas seguro de borrar el Anuncio?')
                if (answer) {
                    //ir a borrar el anuncio
                    await deleteAdvert(advert.id)
                    window.location= '/'
                } 
            })

        } else {
            //borramos el botón 
            deleteButtonElement.remove()
        }

    }
}
}

