import "./App.css";
import { Header } from "./componets/common/Header";
import { Footer } from "./componets/common/Footer";
import { Search } from "./componets/search/Search";
import { UserList } from "./componets/user-list/UserList";

function App() {
  return (
    <div>
      <Header />
         <main className="main">
  
            <section className="card users-container">
            
            <Search />
            <UserList />
            </section>

         </main>
      <Footer />
    </div>
  );
}

export default App;
