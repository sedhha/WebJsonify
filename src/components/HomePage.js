import React from "react";
import GlobalSiteConstants from '../components/ConstantFiles/GlobalSiteConstants';
import {Descriptor,HeadersVu} from '../components/Decorative_Components/DecorationComps';


function HomePage()
{
    return(
        <div>

    <Descriptor Q1 = {GlobalSiteConstants.Q1} />
    <Descriptor Q1 = {GlobalSiteConstants.Q2} />

    <div className = "ImageContainer">
    <img src = {GlobalSiteConstants.FrontPageImageDetails.FrontPageImageLocation} 
    alt = {GlobalSiteConstants.FrontPageImageDetails.FrontPageImageAlt}
    className = "ImageAnimationEffect"
    />
    </div>

    <HeadersVu Q1 = {GlobalSiteConstants.Q3} texts = {GlobalSiteConstants.Q3.TextsToAnimate}/>
    

    </div>
    );
}

export default HomePage;