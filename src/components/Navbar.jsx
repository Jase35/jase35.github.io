import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import infoData from '../assets/info.json';

function Navbar() {
  return (
    <div className="fixed z-50 shadow-md flex flex-col xl:flex-row xl:justify-between absolute bg-main w-full right-0 left-0 top-0 pl-2">
        <div>
            <NavLink to="/" className="head-text-theme text-lg xl:text-4xl text-center xl:absolute top-2 left-4">Jase A. Beaubien</NavLink>
        </div>
        <nav className="justify-center items-center w-full xl:w-auto">
            <ul style={{ listStyle: 'none', display: 'flex', gap: '0px' }} className="justify-between xl:justify-center xl:items-center">
                <li className="relative group">
                    <NavLink
                        className="navlink text-sm xl:text-4xl"
                        to="/"
                    >
                        Home
                    </NavLink>

                    <ul className="absolute z-49 hidden xl:group-hover:block bg-main left-0 right-0">
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
                        className="navlink text-sm xl:text-4xl"
                        to="/experience"
                    >
                        Experience
                    </NavLink>

                    <ul className="absolute z-49 hidden xl:group-hover:block bg-main left-0 right-0">
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
                        className="navlink text-sm xl:text-4xl"
                        to="/contact"
                    >
                        Contact
                    </NavLink>

                    <ul className="absolute z-49 hidden xl:group-hover:block bg-main left-0 right-0">
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