import React from 'react';
import ItemImg from './ItemImg';
import TextBig from './TextBig';


export default function Galery(){
    return(
        <div className="one-column content">
            <TextBig label="" />
            <div className="gelaria1">
                <ItemImg src="./ma1.PNG" label="Bob"/>
                <ItemImg src="./ma2.PNG" label="Mia"/>
                <ItemImg src="./ma3.PNG" label="Tobi"/>
            </div> 
            <div className="gelaria2">
                   <ItemImg src="./ma4.PNG" label="Zoe"/>
                    <ItemImg src="./ma5.PNG" label="Roberta"/>
                    <ItemImg src="./ma6.PNG" label="Yummi"/>
            </div>
        </div>
    )
}