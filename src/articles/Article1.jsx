import React, { Component } from 'react';
import '../css/Article.css';

import image from "../assets/splash.png";


class Article extends Component {
    render() { 
        return (  
            <div classNameN="Article">
                <h1 className="ArticleHeader">
                    The Dawn of The New Age
                </h1>
                <h2 className="ArticleDate">
                    2020-03-25
                </h2>
                <img className="ArticleImage" src={image} width="500"/>
                <h3 className="ArticleText">
                    We are starting the development of our new game. With this one in mind we believe
                    that its time for something new! 
                    <div/>
                    Check this out!
                    <div/>
                    See ya another day
                </h3>

            </div>
        );
    }
}
 
export default Article;