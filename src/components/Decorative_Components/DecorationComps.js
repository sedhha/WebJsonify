import React from "react";
import './decoration.css';
import { Link } from "react-router-dom";




function HeaderElements(props)
{
    return(
        <div className = "HeaderOptions">
        <Link to = {props.headerhrefs}>{props.title}</Link>
        
        </div>
    );
}

function Descriptor(props)
{
    const style = {
        fontSize: props.Q1.fontSize,
        fontStyle: props.Q1.fontStyle,
        fontWeight: props.Q1.fontWeight,
        color: props.Q1.fontColor,
        height: props.Q1.OverallHeight,
        marginTop: props.Q1.marginTop,
        textAlign: props.Q1.textAlign,
        
    }
    return(
        <div style = {style} className = "ZoomEffect">
        {props.Q1.DisplayMessage}
        </div>
    );
}

function HeadersVu(props)
{
    const style = {
        fontSize: props.Q1.fontSize,
        fontStyle: props.Q1.fontStyle,
        fontWeight: props.Q1.fontWeight,
        color: props.Q1.fontColor,
        height: props.Q1.OverallHeight,
        textAlign: props.Q1.textAlign,
        marginRight: props.Q1.marginRight
    }
    return(
        <div style = {{
            marginTop:props.Q1.marginTop,
            textAlign:props.Q1.textAlign
        }}>
        {
            props.texts.map((elem,index) => {

            return(<div style = {style} key = {index} className = "Table-Cell-Rep ZoomEffect">{elem}</div>);

        })
    
        }

        </div>
    );
    
}

export default HeaderElements;
export {Descriptor,HeadersVu};