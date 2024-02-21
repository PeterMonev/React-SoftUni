import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import Contacts from "./components/Contacts";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Starships from "./components/Starships";
import StarshipsList from "./components/StarshipList";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <h1>Hello React Router</h1>

      <Navigation />

      <Routes>
      <Route path="*" element={<NotFound />}/>
       <Route path="/" element={<Home />}/>
       <Route path="/pricing" element={<Pricing/>}/>
       <Route path="/contacts" element={<Contacts />}/>
       <Route path="/about" element={<About />}/>
       <Route path="/starships" element={<StarshipsList />}/>
       <Route path="/starships/:starshipId" element={<Starships />}/>
       <Route path="/millennium-falcon" element={<Navigate to="Starships/10"/>}/>
      </Routes>
    </div>
  ); 
}

export default App;
