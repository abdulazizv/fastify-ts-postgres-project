async function fetchSkinportItems() {
    const response = await fetch('https://api.skinport.com/v1/items?app_id=730&tradable=0');

    if(!response.ok) {
        throw new Error('Failed to fetch skinport items')
    }

    return response.json()
}

export { fetchSkinportItems }