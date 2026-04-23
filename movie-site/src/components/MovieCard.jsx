import { useNavigate } from "react-router-dom"
import { addFavorite } from "../services/favorites"

function MovieCard({ show, onRemove }) {

    const navigate = useNavigate()

    function handleFavorite(e) {
        e.stopPropagation()

        const success = addFavorite(show)

        if (success) alert("Added ❤️")
        else alert("Already exists 😏")
    }

    function handleRemove(e) {
        e.stopPropagation()
        onRemove?.(show.id)
    }

    return (
        <div
            className="movie-card"
            onClick={() => navigate(`/show/${show.id}`)}
        >

            {show.image && (
                <img src={show.image.medium} alt={show.name} />
            )}

            <h3>{show.name}</h3>

            <p>⭐ {show.rating?.average || "N/A"}</p>

            {onRemove ? (
                <button className="delete-btn" onClick={handleRemove}>
                    ❌ Remove
                </button>
            ) : (
                <button onClick={handleFavorite}>
                    ❤️ Add
                </button>
            )}

        </div>
    )
}

export default MovieCard