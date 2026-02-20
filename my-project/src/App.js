import React from "react";
import flag from "./Flag_of_Rivne.svg.png";
import zoo from "./zoo.jpg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  Outlet,
} from "react-router-dom";

/* ===========================
   GLOBAL LAYOUT
=========================== */

function Layout() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <Link to="/">Rivne</Link>
          <Link to="/shakespeare">Shakespeare</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

/* ===========================
   RIVNE SECTION
=========================== */

function RivneHome() {
  return (
    <section>
      <h1>Welcome to Rivne</h1>
      <p>
        Rivne is a historic city in northwestern Ukraine, combining medieval
        traditions with modern urban development.
      </p>

      <ul>
        <li><Link to="about">About Rivne</Link></li>
        <li><Link to="main-attraction">Main Attraction</Link></li>
        <li><Link to="other-attractions">Other Attractions</Link></li>
        <li><Link to="photos">City Photos</Link></li>
      </ul>
    </section>
  );
}

function AboutRivne() {
  return (
    <section>
      <h2>About Rivne</h2>
      <p>
        First mentioned in 1283, Rivne gained Magdeburg rights in 1492,
        strengthening its economic and administrative independence.
      </p>
      <p>
        Located on the Ustya River, Rivne serves as the administrative
        center of Rivne Oblast.
      </p>
      <p>
        Today it is known for education, culture, engineering industries,
        and amber mining.
      </p>
      <img src={flag} alt="Rivne Flag" />
    </section>
  );
}

function MainAttraction() {
  return (
    <section>
      <h2>Rivne Zoo</h2>
      <img src={zoo} alt="Rivne Zoo" />
      <p>
        Founded in 1982, Rivne Zoo covers approximately 12 hectares
        and houses more than 150 species of animals.
      </p>
      <ul>
        <li>Lions and Tigers</li>
        <li>Bears and Wolves</li>
        <li>Zebras and Kangaroos</li>
        <li>Reptiles and Exotic Birds</li>
      </ul>
    </section>
  );
}

function OtherAttractions() {
  const attractions = [
    { name: "Rivne Regional Museum", desc: "Regional history and archaeology exhibits." },
    { name: "Shevchenko Park", desc: "A peaceful green park for walks and festivals." },
    { name: "Rivne City Stadium", desc: "Main sports venue of the city." },
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
  const index = parseInt(id, 10);

  const attractions = [
    { name: "Rivne Regional Museum", desc: "A museum showcasing regional heritage and artifacts." },
    { name: "Shevchenko Park", desc: "A central park perfect for recreation." },
    { name: "Rivne City Stadium", desc: "Hosts football matches and sports events." },
  ];

  if (!attractions[index]) return <h2>Attraction Not Found</h2>;

  return (
    <section>
      <h2>{attractions[index].name}</h2>
      <p>{attractions[index].desc}</p>
    </section>
  );
}

function Photos() {
  return (
    <section>
      <h2>City Photos</h2>
      <p>
        Rivne offers scenic parks, historical buildings,
        and charming streets along the Ustya River.
      </p>
    </section>
  );
}

/* ===========================
   SHAKESPEARE SECTION
=========================== */

function ShakespeareHome() {
  return (
    <section>
      <h1>William Shakespeare</h1>
      <p>
        English playwright and poet (1564–1616), widely regarded as the
        greatest writer in the English language.
      </p>

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
      <p>
        Born in Stratford-upon-Avon, Shakespeare wrote 39 plays,
        154 sonnets, and numerous poems.
      </p>
      <p>
        His works explore love, ambition, betrayal, and the
        complexity of human nature.
      </p>
    </section>
  );
}

function ShakespeareWorks() {
  const works = [
    { title: "Hamlet", desc: "A tragedy of revenge and existential doubt." },
    { title: "Romeo and Juliet", desc: "A tragic love story between young lovers." },
    { title: "Macbeth", desc: "A dark tale of ambition and power." },
    { title: "Othello", desc: "A tragedy of jealousy and betrayal." },
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
  const index = parseInt(id, 10);

  const works = [
    { title: "Hamlet", desc: "Prince Hamlet seeks revenge for his father's murder." },
    { title: "Romeo and Juliet", desc: "Two lovers from feuding families fall in love." },
    { title: "Macbeth", desc: "A general consumed by ambition." },
    { title: "Othello", desc: "A noble general manipulated into jealousy." },
  ];

  if (!works[index]) return <h2>Work Not Found</h2>;

  return (
    <section>
      <h2>{works[index].title}</h2>
      <p>{works[index].desc}</p>
    </section>
  );
}

function GlobeTheatre() {
  return (
    <section>
      <h2>Globe Theatre</h2>
      <p>
        The Globe Theatre in London hosted many of Shakespeare’s plays
        during the late 16th and early 17th centuries.
      </p>
    </section>
  );
}

/* ===========================
   404 PAGE
=========================== */

function NotFound() {
  return (
    <section>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Return Home</Link>
    </section>
  );
}

/* ===========================
   ROUTER
=========================== */

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>

          {/* Rivne */}
          <Route index element={<RivneHome />} />
          <Route path="about" element={<AboutRivne />} />
          <Route path="main-attraction" element={<MainAttraction />} />
          <Route path="other-attractions" element={<OtherAttractions />} />
          <Route path="attraction/:id" element={<AttractionDetail />} />
          <Route path="photos" element={<Photos />} />

          {/* Shakespeare */}
          <Route path="shakespeare" element={<ShakespeareHome />} />
          <Route path="shakespeare/about" element={<ShakespeareAbout />} />
          <Route path="shakespeare/works" element={<ShakespeareWorks />} />
          <Route path="shakespeare/work/:id" element={<WorkDetail />} />
          <Route path="shakespeare/globe" element={<GlobeTheatre />} />

          <Route path="*" element={<NotFound />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;