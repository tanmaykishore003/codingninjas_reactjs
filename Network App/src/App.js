import "./styles.css";
import { Component } from "react";
import Person from "./components/Person";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            network: [
                {
                    id: 1,
                    img:
                        "https://res.cloudinary.com/dl26pbek4/image/upload/v1675071817/pexels-rodnae-productions-7348711_doe69b.jpg",
                    email: "john@gmail.com",
                    show: true
                },
                {
                    id: 1,
                    img:
                        "https://res.cloudinary.com/dl26pbek4/image/upload/v1675071807/pexels-zaid-mohammed-15131063_bysy0s.jpg",
                    email: "stephen@gmail.com",
                    show: true
                },
                {
                    id: 1,
                    img:
                        "https://res.cloudinary.com/dl26pbek4/image/upload/v1675071812/pexels-ali-kazal-14520051_qrdgym.jpg",
                    email: "alex@gmail.com",
                    show: true
                }
            ]
        };
    }

    // Create function to remove person from your network here
    handleUser = (index) => {
        this.setState((prevState) => {
            const updatedNetwork = [...prevState.network];
            updatedNetwork.splice(index, 1);
            return { network: updatedNetwork };
        });
    }

    render() {
        return (
            <div className="App">
                <h1>My Network</h1>
                <div className="list">
                    {this.state.network.map((p, i) => (
                        <Person handleUser={() => this.handleUser(i)} key={i} person={p} index={i} />
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
