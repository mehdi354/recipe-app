import React from "react";
import Home from "./Home";
import {
    Routes,
    Route,
    useLocation,
  } from "react-router-dom";
import Cusine from "./Cusine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";
const Pages = () => {
    const location = useLocation()
    return(
       
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/cuisine/:type" element={<Cusine />} />
                <Route path="/search/:type" element={<Searched />} />
                <Route path="/recipe/:type" element={<Recipe />} />
            </Routes>
            
        </AnimatePresence>
    )
}


export default Pages