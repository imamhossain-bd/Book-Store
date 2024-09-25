/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Card = ({item}) => {

    const {bookId ,bookName, author, image, rating, tags} = item || {};

    return (
        <Link to={`/listed-books-details/${bookId}`}>
            <div className="card w-96 bg-base-100 border border-slate-400 cursor-pointer ">
                <figure className="h-[230px] w-[320px] bg-slate-400 mx-8 mb-3 mt-5 rounded-xl"><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="flex gap-5">
                        {tags.map((tag, index) => (
                            <span key={index} className="bg-[#23BE0A]/10 text-[#23BE0A] font-medium px-4 py-1 rounded-full">{`${tag}`}</span>
                        ))}
                    </div>
                    <h2 className="text-base font-medium">{bookName}</h2>
                    <p className="text-base font-medium mt-2 mb-3">By :  {author}</p>
                    <hr />
                    <div className="card-actions mt-5 justify-between flex-grow">
                        <div className="badge text-lg">Fiction</div>
                        <div className="badge gap-2 text-lg"> {rating} <FaStar /> </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;