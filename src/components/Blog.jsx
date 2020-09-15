import React, { Component } from 'react';
import Article from '../articles/Article';
import Article1 from '../articles/Article1';

class Blog extends Component {
    render() { 
        return (  
            <div>
                <Article1 />
                <Article />
                
            </div>           
            
        );
    }
}
 
export default Blog;