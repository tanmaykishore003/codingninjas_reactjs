// Create Skill component here to display your skills
// In this component there should be a list with each listitem as your skill.

import { Component } from "react";

class Skills extends Component {
    render() {
        return (
            <>
                <ul className="container">
                    <li>
                        <div className="skill">
                            HTML
                        </div>
                    </li>
                    <li>
                        <div className="skill">
                            CSS
                        </div>
                    </li>
                    <li>
                        <div className="skill">
                            JavaScript
                        </div>
                    </li>
                    <li>
                        <div className="skill">
                            React
                        </div>
                    </li>
                    <li>
                        <div className="skill">
                            Node
                        </div>
                    </li>
                </ul>
            </>
        )
    }
}

export default Skills;