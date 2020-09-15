import React, { Component } from 'react';
import '../css/ContactUs.css';

class Contact extends Component {
    render() { 
        return (  
            <div className="ContactUs">
                <body>
                    Contact us at:
                </body>
                <li>
                    sharpyfile@gmail.com
                </li>
                <li>
                    another mail
                </li>
                <li>
                    (+48) 123-456-789
                </li>

            </div>
        );
    }
}
 
export default Contact;