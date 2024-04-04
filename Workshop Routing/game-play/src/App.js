import { Route, Routes, useNavigate } from 'react-router-dom'
import { Header } from './components/Header/Header';
import { Suspense, useEffect, useState, lazy } from 'react';
import uniqid from 'uniqid';

import * as gameService from './services/gameService'; 

import HomePage from './components/Home/Home';
import Login from './components/Login/Login';
import CreateGame from './components/CreateGame/CreateGame';
import Catalog from './components/Catalog/Catalog';
import './App.css';
import Details from './components/Details/Details';



const Register = lazy(() => import('./components/Register/Register'))

function App() {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  const addComment = (gameId, comment) => {
      setGames(state => {
        const game = state.find(g => g._id === gameId);
        const comments = game.comments || [];
        comments.push(comment )

        return [
          ...state.filter(x => x._id !== gameId),
          {...game, comments: comments},
        ]
      })
  }

  const addGameHandler = (gameData) => {
     setGames(state => [
      ...state,
      gameData,
      {
        ...gameData,
        _id: uniqid()
      }
     ]);

     navigate('/catalog');
  };

  useEffect(() => {
    gameService.getAll()
    .then(result => {
      setGames(result);
  });

  }, []);
  
  return (
<div id="box">
   <Header />

  {/* Main Content */}
  <main id="main-content">

  {/*Home Page*/}
    
    <Routes>
       <Route path="/" element={  <HomePage games={games}/> } />
       <Route path="/login" element={  <Login /> } />
       <Route path="/register" element={<Suspense fallback={<span>Loading...</span>}>  <Register /> </Suspense> } />
       <Route path="/create" element={  <CreateGame addGameHandler={addGameHandler} /> } />
       <Route path="/catalog" element={  <Catalog games={games}/> } />
       <Route path="/catalog/:gameId" element={ <Details games={games} addComment={addComment}/>}  />
     </Routes>
  
  </main>  

  {/* Login Page ( Only for Guest users ) */}
 


  {/* Register Page ( Only for Guest users ) */}

  {/* Create Page ( Only for logged-in users ) */}
 
  {/* Edit Page ( Only for the creator )*/}
  {/* <section id="edit-page" className="auth">
    <form id="edit">
      <div className="container">
        <h1>Edit Game</h1>
        <label htmlFor="leg-title">Legendary title:</label>
        <input type="text" id="title" name="title" defaultValue="" />
        <label htmlFor="category">Category:</label>
        <input type="text" id="category" name="category" defaultValue="" />
        <label htmlFor="levels">MaxLevel:</label>
        <input
          type="number"
          id="maxLevel"
          name="maxLevel"
          min={1}
          defaultValue=""
        />
        <label htmlFor="game-img">Image:</label>
        <input type="text" id="imageUrl" name="imageUrl" defaultValue="" />
        <label htmlFor="summary">Summary:</label>
        <textarea name="summary" id="summary" defaultValue={""} />
        <input className="btn submit" type="submit" defaultValue="Edit Game" />
      </div>
    </form>
  </section> */}
  {/*Details Page*/}

  {/* Catalogue */}

</div>

  );
}

export default App;
