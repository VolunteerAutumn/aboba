import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import ShowDetails from "./pages/ShowDetails"

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/show/:id" element={<ShowDetails />} />
            </Routes>
        </>
    )
}

export default App