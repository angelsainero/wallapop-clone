import { getAdvertId } from "./advert-detail.js"
import { buildAdvertDetail } from "./advertDetailView.js"

export const advertDetailController = async (advertDetailElement, advertId) => {

try {
    const advert = await getAdvertId(advertId)
    advertDetailElement.innerHTML = buildAdvertDetail (advert)

} catch (error) {
    alert(error)
}
}