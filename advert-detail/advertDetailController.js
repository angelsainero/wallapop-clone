import { getAdvertId } from "./advert-detail.js"

export const advertDetailController = async (advertDetailElement, advertId) => {

try {
    const advert = await getAdvertId(advertId)
    console.log(advert)

} catch (error) {
    alert(error)
}
}