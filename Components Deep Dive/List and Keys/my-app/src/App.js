import { BookList } from './components/BookList'
import './App.css';
import { CharacterList } from './components/Characters';

function App() { 
  const books = [
    { title: 'Northanger Abbey', "author": "Austen, Jane", "year": 1814, "editor": "Penguin", "price": 20},
    { title: 'War and Peace', "author": "Toystoy, Leo", "year": 1865, "editor": "Penguin", "price": 20},
    { title: 'Lord of the Rings', "author": "Toystoy, Leo", "year": 1876, "editor": "Penguin", "price": 20},
    { title: 'Anna Karenina', "author": "Tolkien, J.R.", "year": 1937, "editor": "Penguin", "price": 20},
  ];

  return (
    <div className="App">
       <CharacterList />
       <BookList books={books} />
    </div>
  );
}

export default App;
