import { useParams } from "react-router-dom";
import UseHookData from "../../Hooks/UseHookData";
import { useEffect, useState } from "react";
import { saveToLocalStorage, saveToLocalStorageWishList } from "../../Utils/LocalStorage";
import { ToastContainer } from "react-toastify";



const BooksDetails = () => {
    const [singleData, setSingleData] = useState([]);
    const { bookId } = useParams();
    const { data } = UseHookData();




    const handleBooks = () => {
        saveToLocalStorage(singleData);
    }

    const handleWishlist = () => {
        saveToLocalStorageWishList(singleData);
    };

    useEffect(() => {
        if (data) {
            const singleData = data.find((item) => item.bookId == bookId);
            setSingleData(singleData);
        }

    }, [{ data, bookId }])

    const { bookName, author, image, rating, tags, review, totalPages, publisher, yearOfPublishing, category } = singleData || {};

    return (
        <div className="px-28 mt-10  w-full mb-5">
            <div className="bg-base-100 flex shadow-xl h-[465px]">
                <div className="w-[575px] h-[465px] bg-slate-300 rounded-lg">
                    <img className="ml-36 mt-16 w-[230px]" src={image} alt="" />
                </div>
                <div className="w-[750px] px-10">
                    <h1 className="text-xl font-semibold">{bookName}</h1>
                    <h3 className="text-lg font-medium mt-3 mb-5">By :  {author}</h3>
                    <hr />
                    <h4 className="text-base font-semibold mt-4 mb-4">{category}</h4>
                    <hr />
                    <p className="text-base mt-4"><span className="text-lg font-medium">Review</span> : {review}</p>
                    <p className="mb-4 mt-3 flex gap-5 items-center">
                        <span className="text-lg font-medium">Tags:</span>
                        {Array.isArray(tags) && tags.length > 0 && (
                            tags.map((tag, index) => (
                                <span key={index} className="bg-[#23BE0A]/10 text-[#23BE0A] font-medium px-4 py-1 rounded-full"># {tag}</span>
                            ))
                        )}
                    </p>
                    <hr />
                    <div className="flex gap-10">
                        <div>
                            <ul className="mt-4 text-[#131313]/70">
                                <li>Number of Pages :</li>
                                <li>Publisher :</li>
                                <li>Year of Publishing :</li>
                                <li>Rating :</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="mt-4 text-base font-medium">
                                <li>{totalPages}</li>
                                <li>{publisher}</li>
                                <li>{yearOfPublishing}</li>
                                <li>{rating}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex gap-5 mt-4">
                                    <ToastContainer></ToastContainer>
                        <button onClick={handleBooks} className="py-2 px-4 border hover:bg-[#23BE0A] hover:text-white hover:border-none border-[#131313]/50 text-black rounded-lg">Read</button>

                        <button onClick={handleWishlist} className="py-2 px-4 bg-[#50B1C9] text-white rounded-lg">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksDetails;