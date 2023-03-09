import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import SearchSection from './Components/SearchSection/SearchSection';
import SearchResults from './Components/SearchResults/SearchResults';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchSection />
      <SearchResults />
    </div>
  );
}

export default App;
