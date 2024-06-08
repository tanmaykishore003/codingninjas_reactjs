// Create component here to display the Basic information such as 
// Name: Email: Phone: Address:
// Make sure to include these in your code with semicolon

import { Component } from "react";

class Hero extends Component {
    render() {
        return (
            <>
                <h3>Name: Tanmay Kishore</h3>
                <p>Email: tanmaykishore003@gmail.com</p>
                <p>Phone: 9508990337</p>
                <p>Address: ABC, xyz street</p>
            </>
        );
    }
}

export default Hero;
