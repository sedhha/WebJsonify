import React from "react";
import './Headers.css';
import HeaderElements from '../Decorative_Components/DecorationComps';

function Header(props)
{

    return(
        <div className = "HeaderWidth">
        {
            props.HeaderNames.map((element,index) =>{

                return <HeaderElements title = {element} key = {index} headerhrefs = {props.HeaderHrefs[index]}/>    

            })
    }
        </div>
    );
}

export default Header;