const BASE_URL = "https://api.tvmaze.com"

export async function getPopularShows() {
    const res = await fetch(`${BASE_URL}/shows`)
    const data = await res.json()
    return data.slice(0, 20)
}

export async function searchShows(query) {
    const res = await fetch(`${BASE_URL}/search/shows?q=${query}`)
    const data = await res.json()
    return data.map(item => item.show)
}