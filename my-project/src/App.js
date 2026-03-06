import React, { useState } from "react";
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
  Navigate,
  useNavigate
} from "react-router-dom";

/* ===========================
AUTH COMPONENTS
=========================== */

function Login({ setAuth }) {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin(e){
    e.preventDefault();

    if(username && password){
      setAuth(true);
      navigate("/");
    }else{
      alert("Enter username and password");
    }
  }

  return(
    <section>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />

        <br/><br/>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <br/><br/>

        <button type="submit">Login</button>

        <br/><br/>

        <Link to="/register">Create account</Link>

      </form>
    </section>
  )
}

function Register(){

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  function handleRegister(e){
    e.preventDefault();

    console.log("REGISTERED USER:");
    console.log(username,password);

    navigate("/");
  }

  return(
    <section>

      <h1>Register</h1>

      <form onSubmit={handleRegister}>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />

        <br/><br/>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <br/><br/>

        <button type="submit">Register</button>

        <br/><br/>

        <Link to="/login">Back to login</Link>

      </form>

    </section>
  )
}

/* ===========================
PROTECTED ROUTE
=========================== */

function ProtectedRoute({auth, children}){

  if(!auth){
    return <Navigate to="/login"/>
  }

  return children
}

/* ===========================
GLOBAL LAYOUT
=========================== */

function Layout({setAuth}) {

  return (
    <>
      <header className="header">

        <nav className="nav">

          <Link to="/">Rivne</Link>

          <Link to="/shakespeare">Shakespeare</Link>

          <button
            onClick={()=>setAuth(false)}
            style={{marginLeft:"20px"}}
          >
            Logout
          </button>

        </nav>

      </header>

      <main>
        <Outlet/>
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
        Rivne is a historic city in northwestern Ukraine,
        combining medieval traditions with modern urban development.
      </p>

      <ul>

        <li><Link to="about">About Rivne</Link></li>

        <li><Link to="main-attraction">Main Attraction</Link></li>

        <li><Link to="other-attractions">Other Attractions</Link></li>

        <li><Link to="photos">City Photos</Link></li>

      </ul>

    </section>

  )

}

function AboutRivne(){

  return(

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
        Today it is known for education, culture,
        engineering industries and amber mining.
      </p>

      <img src={flag} alt="Rivne Flag"/>

    </section>

  )

}

function MainAttraction(){

  return(

    <section>

      <h2>Rivne Zoo</h2>

      <img src={zoo} alt="Rivne Zoo"/>

      <p>
        Founded in 1982, Rivne Zoo covers approximately
        12 hectares and houses more than 150 species.
      </p>

      <ul>

        <li>Lions and Tigers</li>

        <li>Bears and Wolves</li>

        <li>Zebras and Kangaroos</li>

        <li>Reptiles and Exotic Birds</li>

      </ul>

    </section>

  )

}

function OtherAttractions(){

  const attractions = [

    {name:"Rivne Regional Museum",desc:"Regional history exhibits"},

    {name:"Shevchenko Park",desc:"A large green park"},

    {name:"Rivne City Stadium",desc:"Main sports venue"}

  ]

  return(

    <section>

      <h2>Other Attractions</h2>

      <ul>

        {attractions.map((a,i)=>(

          <li key={i}>

            <Link to={`/attraction/${i}`}>{a.name}</Link>

          </li>

        ))}

      </ul>

    </section>

  )

}

function AttractionDetail(){

  const {id} = useParams()

  const attractions = [

    {name:"Rivne Regional Museum",desc:"Museum with local history artifacts."},

    {name:"Shevchenko Park",desc:"Central recreation park."},

    {name:"Rivne City Stadium",desc:"Football and sport arena."}

  ]

  const attraction = attractions[id]

  if(!attraction){

    return <h2>Attraction Not Found</h2>

  }

  return(

    <section>

      <h2>{attraction.name}</h2>

      <p>{attraction.desc}</p>

    </section>

  )

}

function Photos(){

  return(

    <section>

      <h2>City Photos</h2>

      <p>
        Rivne offers scenic parks, historical buildings
        and charming streets along the Ustya River.
      </p>

    </section>

  )

}

/* ===========================
SHAKESPEARE SECTION
=========================== */

function ShakespeareHome(){

  return(

    <section>

      <h1>William Shakespeare</h1>

      <p>
        English playwright and poet widely regarded
        as the greatest writer in the English language.
      </p>

      <ul>

        <li><Link to="about">Biography</Link></li>

        <li><Link to="works">Famous Works</Link></li>

        <li><Link to="globe">Globe Theatre</Link></li>

      </ul>

    </section>

  )

}

function ShakespeareAbout(){

  return(

    <section>

      <h2>Biography</h2>

      <p>
        Born in Stratford-upon-Avon in 1564.
        Shakespeare wrote 39 plays and 154 sonnets.
      </p>

    </section>

  )

}

function ShakespeareWorks(){

  const works=[

    {title:"Hamlet",desc:"A tragedy of revenge."},

    {title:"Romeo and Juliet",desc:"A tragic love story."},

    {title:"Macbeth",desc:"A tale of ambition."}

  ]

  return(

    <section>

      <h2>Famous Works</h2>

      <ul>

        {works.map((w,i)=>(

          <li key={i}>

            <Link to={`/shakespeare/work/${i}`}>{w.title}</Link>

          </li>

        ))}

      </ul>

    </section>

  )

}

function WorkDetail(){

  const {id} = useParams()

  const works=[

    {title:"Hamlet",desc:"Prince Hamlet seeks revenge."},

    {title:"Romeo and Juliet",desc:"Two lovers from feuding families."},

    {title:"Macbeth",desc:"A general consumed by ambition."}

  ]

  const work = works[id]

  if(!work){

    return <h2>Work Not Found</h2>

  }

  return(

    <section>

      <h2>{work.title}</h2>

      <p>{work.desc}</p>

    </section>

  )

}

function GlobeTheatre(){

  return(

    <section>

      <h2>Globe Theatre</h2>

      <p>
        The Globe Theatre in London hosted many
        of Shakespeare's plays.
      </p>

    </section>

  )

}

/* ===========================
APP ROUTER
=========================== */

function App(){

  const [auth,setAuth] = useState(false)

  return(

    <Router>

      <Routes>

        <Route path="/login" element={<Login setAuth={setAuth}/>}/>

        <Route path="/register" element={<Register/>}/>

        <Route
          path="/"
          element={
            <ProtectedRoute auth={auth}>
              <Layout setAuth={setAuth}/>
            </ProtectedRoute>
          }
        >

          <Route index element={<RivneHome/>}/>

          <Route path="about" element={<AboutRivne/>}/>

          <Route path="main-attraction" element={<MainAttraction/>}/>

          <Route path="other-attractions" element={<OtherAttractions/>}/>

          <Route path="attraction/:id" element={<AttractionDetail/>}/>

          <Route path="photos" element={<Photos/>}/>

          <Route path="shakespeare" element={<ShakespeareHome/>}/>

          <Route path="shakespeare/about" element={<ShakespeareAbout/>}/>

          <Route path="shakespeare/works" element={<ShakespeareWorks/>}/>

          <Route path="shakespeare/work/:id" element={<WorkDetail/>}/>

          <Route path="shakespeare/globe" element={<GlobeTheatre/>}/>

        </Route>

      </Routes>

    </Router>

  )

}

export default App