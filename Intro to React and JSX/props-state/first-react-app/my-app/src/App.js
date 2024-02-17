import Logo from './components/Logo';
import './App.css';
import Paragraph from './components/Paragraph';
import Link from './components/Link';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Paragraph/>
        <Link />
      </header>
    </div>
  );
}

export default App;
