// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaRegUserCircle, FaSearch } from "react-icons/fa";
const NavBar = () => {
    return (
        <div className="lg:flex items-center justify-between border-2 lg:border-none rounded-xl">
            <div className="text-3xl text-center bg-yellow-400 p-2 lg:bg-white rounded-xl">F-Recipes</div>
            <div className="flex lg:justify-evenly justify-between gap-10 mt-3">
                <a href="#" className="text-2xl">Home</a>
                <a href="#" className="text-2xl">Recipes</a>
                <a href="#" className="text-2xl">About</a>
                <a href="#" className="text-2xl">Search</a>
            </div>
            <div className="flex lg:justify-end justify-between gap-5 items-center mt-3 ">
                <div className="flex items-center rounded-2xl bg-slate-200 pl-3">
                <FaSearch className="text-3xl" /><input type="search" name="" id="" placeholder="Search" className="text-black text-3xl bg-slate-200 pl-2 pt-2 pb-2 outline-none rounded-2xl" />
                </div>
                <button className="rounded-full bg-lime-700 p-5 text-2xl"><FaRegUserCircle /></button>
            </div>
        </div>
    );
};

export default NavBar;