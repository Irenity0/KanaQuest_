import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-base font-parkinsans text-primary">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><NavLink to={"/"}>Home</NavLink></li> 
                <li><NavLink to={"/learn"}>Start_Learning</NavLink></li> 
                <li><NavLink to={"/tutorial"}>Tutorials</NavLink></li> 
                <li><NavLink to={"/aboutUs"}>About_Us</NavLink></li> 
                <li className="hidden"><NavLink to={"/profile"}>My_Profile</NavLink></li>  
              </ul>
            </div>
            <a className="btn btn-ghost text-xl text-primary">KanaQuest_</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><NavLink to={"/"}>Home</NavLink></li> 
                <li><NavLink to={"/learn"}>Start_Learning</NavLink></li> 
                <li><NavLink to={"/tutorial"}>Tutorials</NavLink></li> 
                <li><NavLink to={"/aboutUs"}>About_Us</NavLink></li> 
                <li className="hidden"><NavLink to={"/profile"}>My_Profile</NavLink></li> 
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn border-2 border-primary text-primary">Log In</a>
          </div>
        </div>
    );
};

export default Navbar;