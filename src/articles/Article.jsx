import React, { Component } from 'react';
import '../css/Article.css';
import image from "../assets/concept.png";
class Article extends Component {
    state = {  }
    render() { 
        return (  
            <div classNameN="Article">
                <h1 className="ArticleHeader">
                    Tytuł artykułu
                </h1>
                <h2 className="ArticleDate">
                    Data publikacji
                </h2>
                <img className="ArticleImage" src={image} width="500"/>
                <h3 className="ArticleText">
                 
                </h3>

            </div>
        );
    }
}
 
export default Article;