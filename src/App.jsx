import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectInfo from './pages/ProjectInfo';

function App() {
 return (
    <div>
      <Navbar />
      <div className="absolute top-15 left-2 right-2 xl:left-50 xl:right-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:id" element={<ProjectInfo />} />
        </Routes>
        <div className="mb-20" />
      </div>
    </div>
  );
}

export default App
