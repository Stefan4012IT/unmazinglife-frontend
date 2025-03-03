import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/main.scss'; 
import Home from './pages/Home';
import BookLanding from './pages/BookLanding'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-landing" element={<BookLanding />} />
      </Routes>
    </Router>
  );
}

export default App;
