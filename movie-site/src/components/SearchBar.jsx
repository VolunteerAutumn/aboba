import { useState } from "react"

function SearchBar({ onSearch }) {

    const [query, setQuery] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        onSearch(query)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search shows..."
            />

            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar