const KEY = "favorites"

export function getFavorites() {
    return JSON.parse(localStorage.getItem(KEY)) || []
}

export function addFavorite(show) {
    const current = getFavorites()

    const exists = current.some(item => item.id === show.id)

    if (!exists) {
        const updated = [...current, show]
        localStorage.setItem(KEY, JSON.stringify(updated))
        return true
    }

    return false
}

export function removeFavorite(id) {
    const updated = getFavorites().filter(item => item.id !== id)
    localStorage.setItem(KEY, JSON.stringify(updated))
}