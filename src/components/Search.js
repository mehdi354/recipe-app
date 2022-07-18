import React, { useState } from "react";
import styled from "styled-components";
import {FaSearch} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Search = () => {
    const [input,setInput] = useState('');
    const navigate = useNavigate()
    const onSubmitHandeller = (e) => {
        e.preventDefault();
        navigate('/search/' + input)
    }
    return(
        <FormStyle onSubmit={onSubmitHandeller}>
            <div>
                <FaSearch></FaSearch>
                <input type="text" onChange={e => setInput(e.target.value)} value={input}/>
            </div>
            
        </FormStyle>
    )
}

const FormStyle = styled.form`
margin: 0 20rem;
// position:relative;
div {
    width:100%;
    border-radius: 10px;
    position:relative;
    input {
        border: none;
        background: #444;
        font-size:1.5rem;
        color: #FFF;
        padding: 1rem 3rem;
        border:none;
        border-radius: 1rem;
        outline:none;
        width:100%;
    }
    svg {
        position: absolute;
        top:50%;
        left:0%;
        transform: translate(100%, -50%);
        color: #FFF;
    }
}

`
export default Search