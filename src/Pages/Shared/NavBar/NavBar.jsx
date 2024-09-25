import { NavLink } from "react-router-dom";



const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 mt-4 px-16">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to={"/"}>Home</NavLink>
                            <NavLink to={"/listed-books"}>Listed Books</NavLink>
                            <NavLink to={"/pages-to-read"}>Pages to Read</NavLink>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl font-semibold">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink to={"/"} 
                        className={({ isActive, isPending }) =>
                        isActive
                          ? "border border-emerald-500 rounded-lg mr-5 px-3 py-2 text-white bg-[#23BE0A] font-bold"
                          : isPending
                          ? "pending"
                          : "border border-emerald-500 rounded-lg mr-5 px-3 py-2"
                      }
                        >Home</NavLink>
                        <NavLink to={"/about-us"} className={({ isActive, isPending }) =>
                        isActive
                          ? "border border-emerald-500 rounded-lg mr-5 px-3 py-2 text-white bg-[#23BE0A] font-bold"
                          : isPending
                          ? "pending"
                          : "border border-emerald-500 rounded-lg mr-5 px-3 py-2"
                      }>About Us</NavLink>
                        <NavLink to={"/listed-books"} className={({ isActive, isPending }) =>
                        isActive
                          ? "border border-emerald-500 rounded-lg mr-5 px-3 py-2 text-white bg-[#23BE0A] font-bold"
                          : isPending
                          ? "pending"
                          : "border border-emerald-500 rounded-lg mr-5 px-3 py-2"
                      }>Listed Books</NavLink>
                        <NavLink to={"/story-books"} className={({ isActive, isPending }) =>
                        isActive
                          ? "border border-emerald-500 rounded-lg mr-5 px-3 py-2 text-white bg-[#23BE0A] font-bold"
                          : isPending
                          ? "pending"
                          : "border border-emerald-500 rounded-lg mr-5 px-3 py-2"
                      }>Story Books</NavLink>
                        <NavLink to={"/pages-to-read"} className={({ isActive, isPending }) =>
                        isActive
                          ? "border border-emerald-500 rounded-lg mr-5 px-3 py-2 text-white bg-[#23BE0A] font-bold"
                          : isPending
                          ? "pending"
                          : "border border-emerald-500 rounded-lg mr-5 px-3 py-2"
                      }>Pages to Read</NavLink>
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    <button className="px-4 py-2 rounded-lg text-base font-medium bg-[#23BE0A] text-white">Sign In</button>
                    <button className="px-4 py-2 rounded-lg text-base font-medium bg-[#59C6D2] text-white">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;