import { fetchSkinportItems } from "@utils/skinportApi";
import { setCache,getCache } from "@utils/cache";

export async function getSkinportItems() {
    const cachedItems = getCache('skinportItems', 1000 * 600 * 600);

    if(cachedItems){
        return { success: true, data: cachedItems, error_code: 0, message: "OK" };
    }

    try {
        const items = await fetchSkinportItems();
        setCache('skinportItems', items);
        return { success: true, data: items, error_code: null, message: "OK" };
    } catch(e) {
        throw new Error('Failed to fetch skinport items');
    }
}