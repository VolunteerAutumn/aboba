import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ShowDetails() {

    const { id } = useParams()
    const [show, setShow] = useState(null)

    useEffect(() => {

        async function fetchShow() {
            const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
            const data = await res.json()
            setShow(data)
        }

        fetchShow()

    }, [id])

    if (!show) return <p>Loading...</p>

    return (
        <div>

            <h1>{show.name}</h1>

            {show.image && (
                <img src={show.image.original} alt={show.name} />
            )}

            <div dangerouslySetInnerHTML={{ __html: show.summary }} />

        </div>
    )
}

export default ShowDetails