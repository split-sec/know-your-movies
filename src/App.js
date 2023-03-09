import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar.js';
import SearchSection from './Components/SearchSection/SearchSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchSection />
      <Footer />
    </div>
  );
}

export default App;
