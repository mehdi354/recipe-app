import React from "react";
import Popular from "../components/Popular";
import Veggi from "../components/Veggi";
import { motion } from "framer-motion";
const Home = () => {
    return(
        <motion.div 
        animate={{opacity:1}}
        initial = {{opacity:0}}
        exit={{opacity:0}}
        transition={{duration:.5}}
        >
        
            <Veggi />
            <Popular />
            
        </motion.div>
    )
}

export default Home