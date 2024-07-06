// App.js

import "./styles.css";
import { useRef } from "react";
import useLocalStorage from "./useLocalStorage";

export default function App() {
    const [name, setName] = useLocalStorage("name", "");
    const [age, setAge] = useLocalStorage("age", "");

    const nameInput = useRef();
    const ageInput = useRef();

    const handleClear = () => {
        nameInput.current.value = "";
        ageInput.current.value = "";
    };

    const handleChange = (e) => {
        e.preventDefault();
        const newName = nameInput.current.value;
        const newAge = ageInput.current.value;

        setName(newName);
        setAge(newAge);

        handleClear();
    };

    return (
        <div className="App">
            <div id="name">Name - {name}</div>
            <div id="age">Age - {age}</div>
            <form onSubmit={handleChange}>
                <input placeholder="Name" ref={nameInput} />
                <input placeholder="Age" type="number" min="1" ref={ageInput} />
                <button className="btn">Change</button>
            </form>
        </div>
    );
}
