/**
 * Header component for the website.
 * @returns {JSX.Element} The rendered header component.
 */
import { Link } from "react-router-dom";
import "../styles/generated.css";


const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-purple-800 text-fuchsia-400 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-5">
        <h1 className="font-bold text-5xl font-pacifico">
          <Link to="/">Ben Sutter</Link>
        </h1>
        <ul className="flex space-x-4">
          <li>
            <button className="px-3 py-2 rounded-lg bg-fuchsia-600 text-fuchsia-200 font-bold hover:bg-fuchsia-700 hover:text-fuchsia-300">
              <Link to="/blog">Blog</Link>
            </button>
          </li>
          <li>
            <button className="px-3 py-2 rounded-lg bg-fuchsia-600 text-fuchsia-200 font-bold hover:bg-fuchsia-700 hover:text-fuchsia-300">
              <Link to="/resume">Resume</Link>
            </button>
          </li>
          <li>
            <button className="px-3 py-2 rounded-lg bg-fuchsia-600 text-fuchsia-200 font-bold hover:bg-fuchsia-700 hover:text-fuchsia-300">
              <Link to="/about">About Me</Link>
            </button>
          </li>
          <li>
            <button className="px-3 py-2 rounded-lg bg-fuchsia-600 text-fuchsia-200 font-bold hover:bg-fuchsia-700 hover:text-fuchsia-300">
              <Link to="/contact">Contact</Link>
            </button>
          </li>
          <li>
            <button className="px-3 py-2 rounded-lg bg-fuchsia-600 text-fuchsia-200 font-bold hover:bg-fuchsia-700 hover:text-fuchsia-300">
              <a href="https://github.com/Ben-Sutter">GitHub</a>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
