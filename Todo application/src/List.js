import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
    handleRemove = (index) => {
        this.props.handleRemove(index);
    }
    render() {
        console.log(this.props);
        const { todos } = this.props;
        return (
            <div className="list">
                {/* Render the todo here from the props*/}
                {todos.map((todo, index) => (
                    <Todo handleRemove={() => this.props.handleRemove(index)} key={index} todo={todo} />
                ))}
            </div>
        );
    }
}
