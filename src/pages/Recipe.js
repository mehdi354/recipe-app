import React , {useEffect, useState} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {link,useParams} from 'react-router-dom'

const Recipe = () => {
    const [details,setDetails] = useState({})
    const [activeTab,setActiveTab] = useState('instructions')

    let params = useParams()
    const getRecipe = async () => {

        const api = await fetch(`https://api.spoonacular.com/recipes/${params.type}/information?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
        const data = await api.json();
        console.log(data)
        setDetails(data)
        // setPopular(data.recipes)
        

    }

    useEffect(()=>{
        console.log(params)
        getRecipe()
    },[params.type])
    return(
        <DetailWrapper>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt={details.title} />
            </div>
            <Info>
                <Button className={activeTab==='instructions' ? 'active' : ''} onClick={()=>setActiveTab('instructions')}>Instructions</Button>
                <Button className={activeTab==='ingrediants' ? 'active' : ''} onClick={()=>setActiveTab('ingrediants')}>Ingrediants</Button>
                {
                    activeTab === 'instructions' && (
                        <div>
                            <p dangerouslySetInnerHTML={{__html: details.summary}} ></p>

                            <p dangerouslySetInnerHTML={{__html: details.instructions}} ></p>
                            
                        </div>
                    )
                }

                {
                    activeTab === 'ingrediants' && (
                        <div>
                            <ul>
                        {details.extendedIngredients.map(ing => {
                            return(
                                <li key={ing.id}>{ing.original}</li>
                            )
                        })}
                    </ul>
                        </div>
                    )
                }
                
                {/* <div>
                    <h3 dangerouslySetInnerHTML={{__html: details.summary}} ></h3>
                    <h3 dangerouslySetInnerHTML={{__html: details.instructions}} ></h3>
                    <ul>
                        {details.extendedIngredients.map(ing => {
                            return(
                                <li key={ing.id}>{ing.original}</li>
                            )
                        })}
                    </ul>
                </div> */}
            </Info>
        </DetailWrapper>
    )
}

const DetailWrapper= styled.div`
    margin-top:10rem;
    margin-bottom:5rem;
    display:flex;
    p {
        font-size: 15px;
        margin-bottom: 2rem;
        font-weight: 400;
    }
    li {
        font-size: 15px;
        line-height:2.5rem;
    }
    ul {
        margin-top :2 rem;
        padding:0
    }
`;

const Button= styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: #FFF;
    border: 2px solid #444;
    font-weight: 400;
    margin: 0px 1rem;
    &.active {
        background: #444;
        color: #FFF;
    }
`;

const Info= styled.div`
    margin-left: 10rem
`;

export default Recipe