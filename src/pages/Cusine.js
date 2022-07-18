import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {Link,useParams} from 'react-router-dom'
const Cusine = () => {
    
    const [cuisine,setCuisine] = useState([])
    let params = useParams()

    useEffect(()=>{
       getCuisine(params.type)
    },[params.type])

    const getCuisine = async (name) => {
        // const checked = localStorage.getItem('cuisine')
        // if(checked) {
            // console.log("checked")
            // setCuisine(JSON.parse(checked))
        // }else {
            const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
            console.log(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
            const recipes = await data.json()
            setCuisine(recipes.results);
            // localStorage.setItem('cuisine', JSON.stringify(cuisine))
        // }
        // localStorage.setItem()
    };
    console.log(cuisine)    
    return(
        <Grid
        animate={{opacity:1}}
        initial = {{opacity:0}}
        exit={{opacity:0}}
        transition={{duration:.5}}
        >
        
            {
                cuisine.map(meal => {
                    return(
                        <Card key={meal.id}>
                            <img src={meal.image} alt={meal.title} />
                            
                            <Link to={`/recipe/${meal.id}`}>{meal.title}</Link>
                        </Card>
                    )
                })
            }
            
        </Grid>
    )
}

const Grid = styled(motion.div)`
display:grid;
grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
grid-gap: 3rem;
overflow:hidden;
`;

const Card = styled.div`
img {
    width:100%;
    border-radius: 2rem;
}
a{
    text-decoration:none;
    
}
h4 {
    text-align: center;
    padding:1rem;
}
`;

export default Cusine