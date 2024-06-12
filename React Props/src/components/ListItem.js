import React, { Component } from "react";

// Complete this Component
class ListItem extends Component {


    render() {
        const { name, icon, link, bgColor } = this.props
        console.log(this.props);
        return (
            <div
                className="ListItem"
                style={{
                    backgroundColor: bgColor,
                    height: 30
                }}
            >
                <img src={icon} alt="" />
                <a href={link}>{name}</a>
            </div>

        );
    }

};

export default ListItem;
