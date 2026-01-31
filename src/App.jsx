import './App.css'
import { Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectInfo from './pages/ProjectInfo';
import Silly from './pages/Silly';

function App() {
  return(
    <div>
      <Navbar />
      <div className="absolute top-14 xl:top-18 left-2 right-2 xl:left-50 xl:right-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:id" element={<ProjectInfo />} />
          <Route path="/silly" element={<Silly />} />
        </Routes>
        <div className="mb-20" />
      </div>
    </div>
  );
}

export default App
