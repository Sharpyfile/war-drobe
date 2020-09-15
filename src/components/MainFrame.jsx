import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./Home";
import Blog from './Blog';
import AboutUs from './AboutUs';
import Contact from './Contact';
import StorePage from './StorePage';
import MediaPage from './MediaPage';

class MainFrame extends Component {
    render() { 
        return (  
                <div className="Main-Frame">
                        <Switch>
                            <Route path="/Blog" exact component={Blog}/>
                            <Route exact path="/WARdrobe"exact component={Home}/>
                            <Route exact path="/Home"exact component={Home}/>
                            <Route path="/About-us" exact component={AboutUs}/>
                            <Route path="/Contact" exact component={Contact}/>
                            <Route path="/Store" exact component={StorePage}/>
                            <Route path="/Media" exact component={MediaPage}/>
                        </Switch>
                </div>
        );
    }
}
 
export default MainFrame;