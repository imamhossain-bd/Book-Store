import { createBrowserRouter } from "react-router-dom";
import Roote from "../Layout/Roote";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import BooksDetails from "../Pages/BooksDetails/BooksDetails";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";
import BookReCharts from "../Pages/BookRecharts/BookReCharts";
import AboutUs from "../Components/AboutUs/AboutUs";
import StoryBooks from "../Components/StoryBooks/StoryBooks";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Roote/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/about-us",
            element: <AboutUs></AboutUs>
        },
        {
            path: "/listed-books",
            element: <ListedBooks/>
        },
        {
            path: "/story-books",
            element: <StoryBooks></StoryBooks>
        },
        {
            path: "/pages-to-read",
            element: <BookReCharts></BookReCharts>
        },
        {
          path: "/listed-books-details/:bookId",
          element: <BooksDetails></BooksDetails>
        }
      ]
    },
  ]);

export default router;