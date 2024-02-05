import "./App.css";
import MovieList from "./components/MovieList";

function App() {
  const movies = [
    {title: 'Man of Steel', year: 2008, cast: ['Henry Cavil','Russel']},
    {title: 'Harry Potter', year: 2008, cast: ['Daneil','Emma']},
    {title: 'Lord of the Rings', year: 2008, cast: ['Orlando Bloom','Russel']}
];

   console.log('Render');

  return (
    <div className="App">
       <MovieList movies={movies} />
    </div>
  );
}

export default App;
