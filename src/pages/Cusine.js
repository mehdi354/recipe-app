import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {link,useParams} from 'react-router-dom'
const Cusine = () => {
    
    const [cuisine,setCuisine] = useState([])
    let params = useParams()

    useEffect(()=>{
       
        getCuisine(params.type)
    },[params.type])

    const getCuisine = async (name) => {
        const checked = localStorage.getItem('cuisine')
        if(checked) {
            console.log("checked")
            setCuisine(JSON.parse(checked))
        }else {
            const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
            const recipes = await data.json()
            setCuisine(recipes.results);
            localStorage.setItem('cuisine', JSON.stringify(cuisine))
        }
        // localStorage.setItem()
    };
    
    return(
        <div>
        
            Cusine
            
        </div>
    )
}

const CusineStyle = styled.div``;

export default Cusine