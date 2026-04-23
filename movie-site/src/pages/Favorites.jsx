import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"
import { getFavorites, removeFavorite } from "../services/favorites"

function Favorites() {

    const [favorites, setFavorites] = useState([])

    function load() {
        setFavorites(getFavorites())
    }

    useEffect(() => {
        load()
    }, [])

    function handleRemove(id) {
        removeFavorite(id)
        load()
    }

    return (
        <div>

            <h1>❤️ Favorites</h1>

            <div className="movies-grid">

                {favorites.length === 0 && <p>No favorites yet 😢</p>}

                {favorites.map(show => (
                    <MovieCard
                        key={show.id}
                        show={show}
                        onRemove={handleRemove}
                    />
                ))}

            </div>

        </div>
    )
}

export default Favorites