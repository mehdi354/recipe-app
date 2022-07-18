import React from "react";
import {FaPizzaSlice, FaHamburger,} from 'react-icons/fa';
import { GiNoodles,GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Catagory = () => {
    return(
        <List>
            <SLink to="/cuisine/italian">
                <FaPizzaSlice />
                <h4>Italian</h4>
            </SLink>
            <SLink to="/cuisine/american">
                <FaHamburger />
                <h4>American</h4>
            </SLink>
            <SLink to="/cuisine/thai">
                <GiNoodles />
                <h4>Thai</h4>
            </SLink>
            <SLink to="/cuisine/Korean">
                <GiChopsticks />
                <h4>Korean</h4>
            </SLink>
            
        </List>
    )
}

const List = styled.div`
display:flex;
margin:2rem 0rem;
justify-content:center;
`
const SLink = styled(NavLink)`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    border-radius:50%;
    text-decoration: none;
    width:6rem;
    height:6rem;
    cusrsor: pointer;
    transform: scale(0.8);
    background: #444;
    h4 {
        color: #FFF;
        font-size: 0.8rem;
        display:block;
        margin:0;
    }
    svg {
        color:#FFF;
        font-size: 1.5rem;
    }
    &.active {
        background: linear-gradient(to right, #f27121,#e94057)
    }
`

export default Catagory