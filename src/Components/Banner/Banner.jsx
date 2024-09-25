import { NavLink } from "react-router-dom";


const Banner = () => {
    return (
        <div className="mt-5 px-16">
            <div className="hero h-[500px] bg-base-200 rounded-xl">
                <div className="hero-content lg:flex-row-reverse gap-20">
                    <img src="https://i.ibb.co/QX03dhz/pngwing-1-removebg-preview.png" className="" />
                    <div>
                        <h1 className="text-5xl font-bold mb-11 mr-44">Books to freshen up <br /> your bookshelf</h1>
                        <NavLink to={"/listed-books"} className="px-4 py-3 rounded-lg bg-[#23BE0A] text-white mt-7">View The List</NavLink>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;