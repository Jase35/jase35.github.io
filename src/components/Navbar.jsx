import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import infoData from '../assets/info.json';

function Navbar() {
  return (
    <div className="fixed z-50 shadow-md flex flex-col xl:flex-row xl:justify-between absolute bg-main w-full right-0 left-0 top-0 xl:pl-2">
        <NavLink to="/" className="xl:p-2 head-text-theme text-lg xl:text-4xl text-center">Jase Beaubien</NavLink>
        <nav className="flex justify-between xl:justify-center items-center w-full xl:w-auto">
            <NavLink
                className="xl:p-2 xl:pl-4 xl:pr-4 relative group navlink w-1/3 xl:w-auto text-sm xl:text-4xl"
                to="/"
            >
                Home
                <ul className="absolute z-49 hidden xl:group-hover:block bg-theme-red left-0 right-0 mt-2">
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
            </NavLink>

            <NavLink
                className="xl:p-2 xl:pl-4 xl:pr-4 relative group navlink w-1/3 xl:w-auto text-sm xl:text-4xl"
                to="/experience"
            >
                Experience
                <ul className="absolute z-49 hidden xl:group-hover:block bg-theme-red left-0 right-0 mt-2">
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
            </NavLink>

            <NavLink
                className="xl:p-2 xl:pl-4 xl:pr-4 relative group navlink w-1/3 xl:w-auto text-sm xl:text-4xl"
                to="/contact"
            >
                Contact
                <ul className="absolute z-49 hidden xl:group-hover:block bg-theme-red left-0 right-0 mt-2">
                    <li>
                        <button className="subnavlink" onClick={() => window.open('mailto:' + infoData.email, '_blank', 'noopener,noreferrer')}>
                            Email Now
                        </button>
                    </li>
                </ul>
            </NavLink>
        </nav>
    </div>
  );
}

export default Navbar;