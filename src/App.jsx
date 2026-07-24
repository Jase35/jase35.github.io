import './App.css'
import { Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import PageLoader from './components/PageLoader';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectInfo from './pages/ProjectInfo';

function App() {
  return(
    <div>
      <Navbar />
      <div className="absolute top-14 xl:top-18 left-2 right-2 xl:left-50 xl:right-50">
        <Routes>
          <Route path="/" element={<PageLoader><Home /></PageLoader>} />
          <Route path="/experience" element={<PageLoader><Projects /></PageLoader>} />
          <Route path="/contact" element={<PageLoader><Contact /></PageLoader>} />
          <Route path="/project/:id" element={<PageLoader><ProjectInfo /></PageLoader>} />
        </Routes>
        <div className="mb-20" />
      </div>
    </div>
  );
}

export default App
