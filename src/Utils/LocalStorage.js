import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const showToastMessage = (massage) => {
    toast.warning(massage);
};
export const saveToLocalStorage =  (readBook) => {

   

    const saveData = JSON.parse(localStorage.getItem("Read Books")) || [];
    const existData = saveData.find((item) => item.bookId == readBook.bookId);
    if (!existData) {
        saveData.push(readBook);
        localStorage.setItem("Read Books", JSON.stringify(saveData));
    } 
    else{
        showToastMessage("Already in Read book list")
    }
}

export const saveToLocalStorageWishList =  (wishBook) => {
    
        const readBookData = JSON.parse(localStorage.getItem("Read Books")) || [];
        const existInReadBookData = readBookData.find((item) => item.bookId == wishBook.bookId);
        
        if (existInReadBookData) {
            // alert("Already in Read book list")
            showToastMessage("Already in Read book list Can't add To Wishlist")
        } 
        else{
            const wishBookData = JSON.parse(localStorage.getItem("Wishlist Books")) || [];

            const existInWishBookData = wishBookData.find((item) => item.bookId == wishBook.bookId);
            
            if (existInWishBookData) {
                //alert("Already in Wish book list")
                showToastMessage("Already in Wish book list")
            }else{
                wishBookData.push(wishBook);
                localStorage.setItem("Wishlist Books", JSON.stringify(wishBookData));
            }
        }
}

export const getFromLocalStorage = (key) => {
    const data = JSON.parse(localStorage.getItem(key)) || [];
    return data;
}



