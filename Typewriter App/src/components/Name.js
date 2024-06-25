import React from "react";

export default class Name extends React.Component {
    constructor() {
        super();
        this.state = {
            fullName: "Coding Ninjas",
            curIndex: 0,
            currentName: ""
        };
    }

    // This function adds a character to the string.
    typeWriterEffect = () => {
        this.setState((prevState) => {
            return {
                curIndex: prevState.curIndex + 1,
                currentName: prevState.fullName.substring(0, prevState.curIndex)
            };
        });
    };

    // Required lifecycle methods here


    componentDidUpdate(prevProps, prevState, _) {
        console.log(this.props);
        if(prevProps.showName !== this.props.showName) {
            if(this.props.showName) {
                this.timer = setInterval(this.typeWriterEffect, 500)
            } else {
                clearInterval(this.timer)
            }
        }
    }

    render() {
        return <h1>{this.state.currentName}</h1>;
    }
}
