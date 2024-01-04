import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header/header.js";

const Home = lazy(() => import("./components/Home/home.js"));
const AddBook = lazy(() => import("./components/Createbook/createbook.js"));
const ViewBooks = lazy(() => import("./components/Viewbook/viewbooks.js"));
const ShowBook = lazy(() => import("./components/Showbook/showbook.js"));
const EditBook = lazy(() => import("./components/Editbook/editbook.js"));
const DeleteBook = lazy(() => import("./components/Deletebook/deletebook.js"));

function App() {
  return (
    <>
    <div>
      <Header/>
    </div>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addbook" element={<AddBook />}></Route>
        <Route path="/mybooks" element={<ViewBooks />} />
        <Route path="/book/:id" element={<ShowBook />} />
        <Route path="/edit/:id" element={<EditBook />} />
        <Route path="/delete/:id" element={<DeleteBook />} />
      </Routes>
    </Suspense>
    </>
  );
}

export default App;
