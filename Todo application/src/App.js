import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { text: "Do the laundry" },
                { text: "Iron the clothes" },
                { text: "Go for a walk" }
            ]
        };
    }
    handleAdd = (newTodoText) => {
        // complete the function to add a new Todo to the list
        const newTodo = { text: newTodoText };
        this.setState((prevState) => ({
            todos: [...prevState.todos, newTodo]
        }));

    };

    handleRemove = (index) => {
        console.log(index);
        this.setState((prevState) => {
            const todos = [...prevState.todos];
            todos.splice(index, 1);
            return { todos };
        });
    };
    render() {
        console.log(this.props);
        return (
            <div className="App">
                <span>Todo</span>
                {/* Pass the todos list and function as props to utilize those in the component for adding and removing */}
                <Form handleAdd={this.handleAdd} />
                <List handleRemove={this.handleRemove} todos={this.state.todos} />
            </div>
        );
    }
}
