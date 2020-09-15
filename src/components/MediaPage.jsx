import React, { Component } from 'react';
import '../css/MediaPage.css';
import Concept from '../assets/concept.png';
import Splash from '../assets/splash.png';
import EarlyConcept from '../assets/earlyConcept.png';
import ikela2 from '../assets/ikela2.png';
import Drugman from '../assets/Drugman.png';
import LampMonster from '../assets/Lamp_Monster_export_transparent.png';
import Screenshot1 from '../assets/screenshot1.png';
import Surrounded from '../assets/surrounded.png';
import Meeting from '../assets/meeting.png';

class MediaPage extends Component {
    render() { 
        return (  
            <div >
                <div className="MediaPage">
                    <h1>
                    </h1>
                    Screenshots and concept arts
                </div>                
                <div className="MediaPage">
                    <img src={Concept} className="ImageObj"/>
                    <img src={Splash} className="ImageObj"/>
                    <img src={EarlyConcept} className="ImageObj"/>
                    <img src={ikela2} className="ImageObj"/>
                    <img src={Drugman} className="ImageObj"/>
                    <img src={LampMonster} className="ImageObj"/>
                    <img src={Screenshot1} className="ImageObj"/>
                    <img src={Surrounded} className="ImageObj"/>
                    <img src={Meeting} className="ImageObj"/>
                </div>
                
            </div>
        );
    }
}
 
export default MediaPage;