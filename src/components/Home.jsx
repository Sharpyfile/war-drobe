import React, { Component } from 'react';
import "../css/Home.css"
class Home extends Component {
    render() { 
        return (  
            <div className="HomePage">            

                <h3>
                WELCOME TO THE WARDROBE - BEAT THEM UP!
                ARE YOU READY TO GIVE OUT SOME BEATING?!      
                </h3>   
                
                <h3>
                    Experience new type of fighting game where you are contantly high, now including
                </h3>
                    <li>
                        Furni-zombies! A new dangerous species have invaded your local shop with furnitures.
                        Fight your way through laps, bulbs and many more 
                    </li>
                    <li>
                        Take control over both of your arms and create powerful combos to deal with unexpecting foes!
                    </li>
                    <li>
                        Take some random pills located specifically inside that shop to gain powerful abilities!
                    </li>

                    <h3>
                        Play now!
                    </h3>
                    
            </div>
        );
    }
}
 
export default Home;