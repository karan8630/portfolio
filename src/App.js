
import './App.css';
import Navbar from './Components/Navbar.js'; // import Navbar component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Skill from './Components/Skill';
import Chat from './Components/Chat';

function App() {
  return (
    <Router>
    <div className="app">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </div>
   </Router>
  );
}

export default App;
