import React, { useState, useContext } from "react";
import { CartProvider, CartContext } from "./CartContext";
import flag from "./Flag_of_Rivne.svg.png";
import zoo from "./zoo.jpg";
import "./App.css";

import liceum1 from "./liceum1.png";
import liceum2 from "./liceum2.png";
import liceum3 from "./liceum3.png";
import liceum4 from "./liceum4.png";
import liceum5 from "./liceum5.png";
import liceum6 from "./liceum6.png";
import liceum7 from "./liceum7.png";
import liceum8 from "./liceum8.png";
import liceum9 from "./liceum9.png";
import liceum10 from "./liceum10.png";
import liceum11 from "./liceum11.png";
import liceum12 from "./liceum12.png";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  Outlet,
  Navigate,
  useNavigate
} from "react-router-dom";

/* ===========================
AUTH
=========================== */

function Login({ setAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    if (username && password) {
      setAuth(true);
      navigate("/");
    } else {
      alert("Enter username and password");
    }
  }

  return (
    <section>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">Login</button>

        <br /><br />

        <Link to="/register">Create account</Link>
      </form>
    </section>
  );
}

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault();
    console.log("REGISTERED USER:", username, password);
    navigate("/");
  }

  return (
    <section>
      <h1>Register</h1>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">Register</button>

        <br /><br />

        <Link to="/login">Back to login</Link>
      </form>
    </section>
  );
}

function ProtectedRoute({ auth, children }) {
  if (!auth) {
    return <Navigate to="/login" />;
  }
  return children;
}

/* ===========================
LAYOUT
=========================== */

function Layout({ setAuth }) {
  const { cart } = useContext(CartContext);

  return (
    <>
      <header className="header">
        <nav className="nav">
          <Link to="/">Rivne</Link>
          <Link to="/shakespeare">Shakespeare</Link>
          <Link to="/cards">Cards</Link>
          <Link to="/cart">Cart ({cart.length})</Link>

          <button onClick={() => setAuth(false)} style={{ marginLeft: "20px" }}>
            Logout
          </button>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

/* ===========================
CARDS
=========================== */

function Cards() {
  const { addToCart } = useContext(CartContext);

  const cards = [
    { name: "Sylveon V", img: "/sylveon1.png" },
    { name: "Sylveon VMAX", img: "/sylveon2.png" },
    { name: "Sylveon GX", img: "/sylveon3.png" },
    { name: "Sylveon EX", img: "/sylveon4.png" }
  ];

  return (
    <section>
      <h1>Sylveon Card Collection</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px"
      }}>
        {cards.map((card, i) => (
          <div key={i} style={{
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "10px",
            textAlign: "center"
          }}>
            <img src={card.img} alt={card.name} style={{ width: "100%" }} />
            <h3>{card.name}</h3>
            <button onClick={() => addToCart(card)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ===========================
CART
=========================== */

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <section>
      <h1>Your Cart</h1>
      {cart.length === 0 && <p>Cart is empty</p>}
      {cart.map((item, i) => (
        <div key={i} style={{ marginBottom: "20px" }}>
          <img src={item.img} alt={item.name} style={{ width: "150px" }} />
          <h3>{item.name}</h3>
          <button onClick={() => removeFromCart(i)}>Remove</button>
        </div>
      ))}
    </section>
  );
}

/* ===========================
RIVNE HOME
=========================== */

function RivneHome() {
  return (
    <section>
      <h1>Welcome to Rivne</h1>
      <p>
        Rivne is a historic city in northwestern Ukraine,
        combining medieval traditions with modern urban development.
      </p>

      <ul>
        <li><Link to="about">About Rivne</Link></li>
        <li><Link to="main-attraction">Main Attraction</Link></li>
        <li><Link to="other-attractions">Other Attractions</Link></li>
        <li><Link to="photos">City Photos</Link></li>
        <li><Link to="schools">Schools</Link></li>
      </ul>
    </section>
  );
}

/* ===========================
ABOUT
=========================== */

function AboutRivne() {
  return (
    <section>
      <h2>About Rivne</h2>
      <p>First mentioned in 1283, Rivne gained Magdeburg rights in 1492.</p>
      <p>Located on the Ustya River, Rivne serves as the administrative center of Rivne Oblast.</p>
      <p>Today it is known for education, culture and amber mining.</p>
      <img src={flag} alt="Rivne Flag" />
    </section>
  );
}

/* ===========================
MAIN ATTRACTION
=========================== */

function MainAttraction() {
  return (
    <section>
      <h2>Rivne Zoo</h2>
      <img src={zoo} alt="Rivne Zoo" />
      <p>Founded in 1982, Rivne Zoo houses more than 150 species.</p>
    </section>
  );
}

/* ===========================
OTHER ATTRACTIONS
=========================== */

function OtherAttractions() {
  const attractions = [
    { name: "Rivne Regional Museum", desc: "Regional history exhibits" },
    { name: "Shevchenko Park", desc: "Central park" },
    { name: "Rivne City Stadium", desc: "Sports arena" }
  ];

  return (
    <section>
      <h2>Other Attractions</h2>
      <ul>
        {attractions.map((a, i) => (
          <li key={i}>
            <Link to={`/attraction/${i}`}>{a.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function AttractionDetail() {
  const { id } = useParams();
  const attractions = [
    { name: "Rivne Regional Museum", desc: "Museum with local artifacts." },
    { name: "Shevchenko Park", desc: "Central recreation park." },
    { name: "Rivne City Stadium", desc: "Football arena." }
  ];

  const attraction = attractions[id];

  if (!attraction) return <h2>Attraction Not Found</h2>;

  return (
    <section>
      <h2>{attraction.name}</h2>
      <p>{attraction.desc}</p>
    </section>
  );
}

/* ===========================
PHOTOS
=========================== */

function Photos() {
  return (
    <section>
      <h2>City Photos</h2>
      <p>Rivne offers scenic parks, historical buildings and charming streets.</p>
    </section>
  );
}

/* ===========================
SCHOOLS
=========================== */

function RivneSchools() {
  const schools = [
    { name: "Rivne Lyceum №1", img: liceum1 },
    { name: "Rivne Lyceum №2", img: liceum2 },
    { name: "Rivne Lyceum №3", img: liceum3 },
    { name: "Rivne Lyceum №4", img: liceum4 },
    { name: "Rivne Lyceum №5", img: liceum5 },
    { name: "Rivne Lyceum №6", img: liceum6 },
    { name: "Rivne Lyceum №7", img: liceum7 },
    { name: "Rivne Lyceum №8", img: liceum8 },
    { name: "Rivne Lyceum №9", img: liceum9 },
    { name: "Rivne Lyceum №10", img: liceum10 },
    { name: "Rivne Lyceum №11", img: liceum11 },
    { name: "Rivne Lyceum №12", img: liceum12 }
  ];

  const [page, setPage] = useState(1);
  const perPage = 4;
  const start = (page - 1) * perPage;
  const visible = schools.slice(start, start + perPage);
  const totalPages = Math.ceil(schools.length / perPage);

  return (
    <section>
      <h2>Schools of Rivne</h2>
      {visible.map((school, i) => (
        <div key={i}>
          <h3>{school.name}</h3>
          <img src={school.img} alt={school.name} />
        </div>
      ))}

      <div style={{ marginTop: "20px" }}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => setPage(i + 1)} style={{ margin: "5px" }}>
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}

/* ===========================
SHAKESPEARE
=========================== */

function ShakespeareHome() {
  return (
    <section>
      <h1>William Shakespeare</h1>
      <p>English playwright and poet widely regarded as the greatest writer in the English language.</p>
      <ul>
        <li><Link to="about">Biography</Link></li>
        <li><Link to="works">Famous Works</Link></li>
        <li><Link to="globe">Globe Theatre</Link></li>
      </ul>
    </section>
  );
}

function ShakespeareAbout() {
  return (
    <section>
      <h2>Biography</h2>
      <p>Born in Stratford-upon-Avon in 1564.</p>
    </section>
  );
}

function ShakespeareWorks() {
  const works = [
    { title: "Hamlet" },
    { title: "Romeo and Juliet" },
    { title: "Macbeth" }
  ];

  return (
    <section>
      <h2>Famous Works</h2>
      <ul>
        {works.map((w, i) => (
          <li key={i}>
            <Link to={`/shakespeare/work/${i}`}>{w.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function WorkDetail() {
  const { id } = useParams();
  const works = [
    { title: "Hamlet", desc: "Prince Hamlet seeks revenge." },
    { title: "Romeo and Juliet", desc: "Tragic love story." },
    { title: "Macbeth", desc: "Ambition tragedy." }
  ];

  const work = works[id];

  if (!work) return <h2>Work Not Found</h2>;

  return (
    <section>
      <h2>{work.title}</h2>
      <p>{work.desc}</p>
    </section>
  );
}

function GlobeTheatre() {
  return (
    <section>
      <h2>Globe Theatre</h2>
      <p>Historic theatre in London associated with Shakespeare.</p>
    </section>
  );
}

/* ===========================
APP
=========================== */

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login setAuth={setAuth} />} />
          <Route path="/register" element={<Register />} />

          <Route path="/" element={<ProtectedRoute auth={auth}><Layout setAuth={setAuth} /></ProtectedRoute>}>

            <Route index element={<RivneHome />} />
            <Route path="about" element={<AboutRivne />} />
            <Route path="main-attraction" element={<MainAttraction />} />
            <Route path="other-attractions" element={<OtherAttractions />} />
            <Route path="attraction/:id" element={<AttractionDetail />} />
            <Route path="photos" element={<Photos />} />
            <Route path="schools" element={<RivneSchools />} />

            <Route path="shakespeare" element={<ShakespeareHome />} />
            <Route path="shakespeare/about" element={<ShakespeareAbout />} />
            <Route path="shakespeare/works" element={<ShakespeareWorks />} />
            <Route path="shakespeare/work/:id" element={<WorkDetail />} />
            <Route path="shakespeare/globe" element={<GlobeTheatre />} />

            <Route path="cards" element={<Cards />} />
            <Route path="cart" element={<Cart />} />

          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;