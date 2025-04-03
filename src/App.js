
import './App.css';
import Navbar from './components/Navbar.js'; // import Navbar component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

import Skill from './components/Skill';
import Chat from './components/Chat';

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
