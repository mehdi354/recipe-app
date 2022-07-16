
import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';
const Popular = () => {

    const [popular,setPopular] = useState([])

    const getPopular = async () => {
        const checked = localStorage.getItem('popular')
        if(checked) {
            console.log("checked")
            setPopular(JSON.parse(checked))
        }else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
            const data = await api.json();
            console.log(data)
            setPopular(data.recipes)
            localStorage.setItem('popular', JSON.stringify(data.recipes))
        }

    }

    useEffect(()=>{
        getPopular()
    },[])

    return(
        <Wrapper>
            <h3>Popular Picks</h3>
            <Splide options={
                {
                    
                    perPage: 4,
                    pagination: false,
                    arrows: false,
                    drag: 'free',
                    gap: ' 5rem'
                }
            }>
            {popular.map((recipe,index) => {
                return(
                    <SplideSlide key={recipe.id}>
                        <Card >
                            <p>{recipe.title}</p>
                            <img src={recipe.image} alt={recipe.title} />
                            <Gradiant></Gradiant>
                        </Card>
                    </SplideSlide>
                )
            })}
            </Splide>
            
        </Wrapper>
    )
}


const Wrapper = styled.div`
margin: 4rem 0rem;
`;

const Card = styled.div`
min-height: 15rem;
    border-radius: 2rem;
    overflow: hidden;
    position :relative;
    img {
        border-radius: 2rem;
        position: absolute;
        left:0px;
        width:100%;
        height:100%;
        object-fit:cover
    }
    p {
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom:0%;
        text-align:center;
        height:40%;
        transform: translate(-50%,0%);
        display:flex;
        justify-content:center;
        allign-items: center;
        color: #FFF;
    }
`;

const Gradiant = styled.div`
z-index:3;
position:absolute;
width:100%;
height:100%;
background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.5));
`;

export default Popular