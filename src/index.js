/* import React from "react"; */
import ReactDom from "react-dom/client";
/* import App from "./App"; */
import "./style.css";
import Navbar from "./component/Navbar";
import Category from "./component/Category";
import Salesimage from "./component/Sales_image";
import Recommended from "./component/Recommended";
import Topic from "./component/Topic";
import MostPopular from "./component/Mostpopular";
import Footer from "./component/Footer";


const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <>
        <Navbar></Navbar>
        <Category></Category>
        <Salesimage></Salesimage>
        <Recommended></Recommended>
        <Topic></Topic>
        <MostPopular></MostPopular>
        <Footer></Footer>
        {/* <App></App> */}
    </>
);