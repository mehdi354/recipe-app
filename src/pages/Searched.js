import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {Link, link,useParams} from 'react-router-dom'

const Searched = () => {

    const [cuisine,setCuisine] = useState([])
    let params = useParams()

    useEffect(()=>{
       getCuisine(params.type)
    },[params.type])

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        console.log(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const recipes = await data.json()
        setCuisine(recipes.results);
    };
    console.log(cuisine)    


    return(

            <Grid>
            
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
const Grid = styled.div`
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
export default Searched