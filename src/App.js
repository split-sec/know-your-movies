import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar.js';
import SearchSection from './Components/SearchSection/SearchSection';
import NewApi from './Components/NewApi.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchSection />
      <Footer />
      <NewApi />
    </div>
  );
}

export default App;
