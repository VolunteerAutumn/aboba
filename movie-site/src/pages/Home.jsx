import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import SearchBar from "../components/SearchBar"
import { getPopularShows, searchShows } from "../services/api"

function Home() {

    const [shows, setShows] = useState([])

    useEffect(() => {
        loadPopular()
    }, [])

    async function loadPopular() {
        const data = await getPopularShows()
        setShows(data)
    }

    async function handleSearch(query) {

        if (!query) {
            loadPopular()
            return
        }

        const results = await searchShows(query)
        setShows(results)
    }

    return (
        <div>

            <h1>Streaming Library</h1>


            <SearchBar onSearch={handleSearch} />

            <div className="movies-grid">

                {shows.map(show => (
                    <MovieCard key={show.id} show={show} />
                ))}

            </div>

        </div>
    )
}

export default Home