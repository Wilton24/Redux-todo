import { useDispatch } from "react-redux";
import { useState } from "react";

let todoClass = "todo-item marked-complete";


export default function Todo({ text, isCompleted, isEditing, id }: { text: string; isCompleted: boolean; isEditing: boolean; id: number }) {
    const dispatch = useDispatch();
    const [enteredTodo, setEnteredTodo] = useState(text);

    const handleDeleteTodo = (id: number) => {
        dispatch({ type: 'todos/deleteTodo', payload: id });
    };

    const handleEditTodo = (id: number) => {
        dispatch({ type: 'todos/editTodo', payload: id });
    };

    const handleSaveTodo = (id: number) => {
        dispatch({ type: 'todos/saveTodo', payload: { id, text: enteredTodo } });
    };

    function markAsDone(id: number) {
        dispatch({ type: 'todos/markAsCompleted', payload: id })
    };


    return (
        <li onClick={() => markAsDone(id)}
            className={isCompleted ? todoClass : "todo-item"}>
            <input type="checkbox" />
            {isEditing ? (
                <input
                    type="text"
                    value={enteredTodo}
                    onChange={(e) => setEnteredTodo(e.target.value)}
                />
            ) : (
                <span>{text}</span>
            )}

            {isEditing ? (
                <button className="edit-todo-btn" onClick={() => handleSaveTodo(id)}>Save</button>
            ) : (
                <button className="edit-todo-btn" onClick={() => handleEditTodo(id)}>Edit</button>
            )}

            <button className="delete-todo-btn" onClick={() => handleDeleteTodo(id)}>
                {isEditing ? "Cancel" : "Delete"}
            </button>
        </li>
    );
}
