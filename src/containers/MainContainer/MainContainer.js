import React from 'react';

import Card from '../../components/UI/Card/CardUI';
import classes from './MainContainer.css';


const MainContainer = () => {
    const cardInfo =[
        {image:"https://images.all-free-download.com/images/graphicthumb/tuna_fish_bigeye_tuna_215705.jpg",title:"cherry",text:"afsdasf",id:"1"},
        {image:"https://s3.amazonaws.com/divcomplatform/seafoodsource.com/images/58e56a7df141df00115725f58a2a6f36.jpeg",title:"asdfasf",text:"afsdasf",id:"2"},
        {image:"https://static.wixstatic.com/media/58e86f_517206ab04c34cd58340efe646936359~mv2.jpg/v1/fill/w_480,h_320,al_c,q_85,usm_0.66_1.00_0.01/58e86f_517206ab04c34cd58340efe646936359~mv2.webp",title:"asdfsaf",text:"afsdasf",id:"3"},
        {image:"data:image/jpeg;base64,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",title:"asdfasf",text:"afsdasf",id:"4"}
    ];

    return (
        <div className={classes.grid}>
            {cardInfo.map(Card)}
        </div>
    );
}

export default MainContainer;