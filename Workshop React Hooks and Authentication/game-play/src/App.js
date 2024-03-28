import { Route, Routes, useNavigate } from 'react-router-dom'
import { Header } from './components/Header/Header';
import { Suspense, useEffect, useState, lazy } from 'react';

import * as gameService from './services/gameService'; 
import { AuthContext } from './contexts/AuthContext';
import { GameContext } from './contexts/GameContex';

import HomePage from './components/Home/Home';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import CreateGame from './components/CreateGame/CreateGame';
import Catalog from './components/Catalog/Catalog';
import './App.css';
import Details from './components/Details/Details';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Edit } from './components/Edit/Edit';



const Register = lazy(() => import('./components/Register/Register'))

function App() {
  const [games, setGames] = useState([]);
  const [auth, setAuth] = useLocalStorage("auth", {});
  const navigate = useNavigate();

  const userLogin = (authData) => {
    setAuth(authData);
  } 

  const userLogout = () => {
    setAuth({});
  };

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

  const gameAdd = (gameData) => {
     setGames(state => [
      ...state,
      gameData
      
     ]);

     navigate('/catalog');
  };

  const gameEdit = (gameId, gameData) => {
    setGames(state => state.map(x =>  x._id === gameId ? gameData : x));
  }

  useEffect(() => {
    gameService.getAll()
    .then(result => {
      setGames(result);
  });

  }, []);
  
  return (

<AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>    
<div id="box">
   <Header />

  <main id="main-content">
     <GameContext.Provider value={{games, gameAdd, gameEdit}}> 
      <Routes>
       <Route path="/" element={  <HomePage games={games}/> } />
       <Route path="/login" element={  <Login /> } />
       <Route path="/register" element={<Suspense fallback={<span>Loading...</span>}>  <Register /> </Suspense> } />
       <Route path='/logout' element={<Logout />} />
       <Route path="/create" element={  <CreateGame /> } />
       <Route path="/catalog" element={  <Catalog games={games}/> } />
       <Route path="/catalog/:gameId" element={ <Details games={games} addComment={addComment}/>}  />
       <Route path='/games/:gameId/edit' element={ <Edit />} />
      </Routes>
     </GameContext.Provider>
  </main>  

</div>
</AuthContext.Provider>  
  );
}

export default App;
