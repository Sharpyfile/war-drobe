import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import "../css/Sidebar.css"
class Sidebar extends Component {
    render() { 
        return ( 
            <div className="Sidebar">
                        <Link to="/WARdrobe" className="Home">Home</Link>

                        <Link to="/Blog" className="Blog">Blog</Link>
                        
                        <a href="https://github.com/mkotowski/WARdrobe" className="Git">Github</a>

                        <a href="https://store.steampowered.com" className="Steam">Steam</a>

                        <a href="https://discord.com" className="Discord">Discord</a>

                        <a href="https://twitter.com" className="Twitter2">Twitter</a>

                        <a href="https://facebook.com" className="Facebook2">Facebook</a>

                        <a href="https://reddit.com" className="Reddit">Reddit</a>

                        <Link to="/Media" className="Media">Media</Link>

                        <Link to="/About-us" className="About-us">About us</Link>

                        <Link to="/Contact" className="Contact">Contact</Link>

                        <Link to="/Store" className="Store">Store</Link>
            </div>
         );
    }
}
 
export default Sidebar;