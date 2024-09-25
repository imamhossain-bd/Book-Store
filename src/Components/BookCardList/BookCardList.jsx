/* eslint-disable react/prop-types */
// import { NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineContactPage } from "react-icons/md";

const BookCardList = ({ data }) => {
    const {bookName, author, image, rating, tags, totalPages, publisher, yearOfPublishing, category} = data || {};
    return (
        <div className="px-7">
            <div className="w-full h-[277px] flex gap-6 border border-[#131313]/20 mt-7 rounded-lg mb-4">
                <div className="w-[300px] h-[230px] bg-slate-400 rounded-xl mt-6 ml-7">
                    <img className="ml-16 mt-8" src={image} alt="" />
                </div>
                <div className="w-full px-8">
                    <h2 className="text-xl font-semibold mt-6">{bookName}</h2>
                    <p className="text-base font-medium mt-3">By : {author}</p>
                    <div className="flex gap-6 mt-3">
                    <h2 className="flex gap-2 items-center text-lg font-medium">
                            <span>Tags:</span>
                            {tags && tags.map((tag, index) => (
                                <span key={index} className="bg-[#23BE0A]/10 text-[#23BE0A] text-lg font-normal px-4 py-1 rounded-full"># {tag}</span>
                            ))}
                        </h2>
                        <div className="flex items-center gap-3">
                            <p><FaLocationDot /> </p>
                            <p className="text-[#131313]/60 font-medium">Year of Publishing: {yearOfPublishing}</p>
                        </div>
                    </div>
                    <div className="flex gap-6 mb-5 mt-4 ">
                        <div className="flex items-center gap-3">
                            <p><FaUserGroup /> </p>
                            <span className="text-[#131313]/60">Publisher: {publisher}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <p><MdOutlineContactPage /></p>
                            <span className="text-[#131313]/60">{totalPages}</span>
                        </div>
                    </div>
                    <hr />
                    <div className="flex gap-5 mt-5">
                    <a className="py-2 px-4 rounded-full bg-[#328EFF]/20 text-[#328EFF]" >Category: {category}</a>
                    <a className="py-2 px-4 rounded-full bg-[#FFAC33]/20 text-[#FFAC33]" >Rating: {rating}</a>
                    <button className="py-2 px-4 rounded-full bg-[#23BE0A] text-white">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCardList;