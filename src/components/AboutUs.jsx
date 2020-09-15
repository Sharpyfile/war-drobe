import React, { Component } from 'react';
import "../css/AboutUs.css"

class AboutUs extends Component {
    render() { 
        return (  
            <div className="AboutUs">
                We are a team of 3 guys from Politechnika Łódzka               
                <li>
                    Jakub Guzek - 3D artist, level designer, engine programmer
                </li>
                <li>
                    Michał Kotowski - engine programmer, game designer
                </li>
                <li>
                    Łukasz Gołygowski - gameplay programmer, game designer
                </li>
                We are planning to expand our game in the future as we can.
            </div>
        );
    }
}
 
export default AboutUs;