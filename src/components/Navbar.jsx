import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import infoData from '../assets/info.json';

function Navbar() {
  return (
    <div className="fixed z-50 shadow-md flex justify-between absolute bg-emerald-600 w-full right-0 left-0 top-0 pl-2">
        <div>
            <NavLink to="/" className="head-text-theme absolute top-2 left-4">Jase A. Beaubien</NavLink>
        </div>
        <nav>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '0px' }}>
            <li className="relative group">
                <NavLink
                    className="navlink"
                    to="/"
                >
                    Home
                </NavLink>

                <ul className="absolute z-49 hidden group-hover:block bg-emerald-600 left-0 right-0">
                    <li>
                        <HashLink to="/#about" className="subnavlink">About</HashLink>
                    </li>
                    <li>
                        <HashLink to="/#mission" className="subnavlink">Mission</HashLink>
                    </li>
                    <li>
                        <HashLink to="/#answers" className="subnavlink">Q & A</HashLink>
                    </li>
                </ul>
            </li>
            <li className="relative group">
                <NavLink
                    className="navlink"
                    to="/experience"
                >
                    Experience
                </NavLink>

                <ul className="absolute z-49 hidden group-hover:block bg-emerald-600 left-0 right-0">
                    <li>
                        <HashLink to="/experience#projects" className="subnavlink">Projects</HashLink>
                    </li>
                    <li>
                        <HashLink to="/experience#education" className="subnavlink">Education</HashLink>
                    </li>
                    <li>
                        <HashLink to="/experience#employment" className="subnavlink">Employment</HashLink>
                    </li>
                    <li>
                        <HashLink to="/experience#extracurriculars" className="subnavlink">Extracurriculars</HashLink>
                    </li>
                </ul>
            </li>
            <li className="relative group">
                <NavLink
                    className="navlink"
                    to="/contact"
                >
                    Contact
                </NavLink>

                <ul className="absolute z-49 hidden group-hover:block bg-emerald-600 left-0 right-0">
                    <li>
                        <button className="subnavlink" onClick={() => window.open('mailto:' + infoData.email, '_blank', 'noopener,noreferrer')}>
                            Email Now
                        </button>
                    </li>
                </ul>
            </li>
        </ul>
        </nav>
    </div>
  );
}

export default Navbar;