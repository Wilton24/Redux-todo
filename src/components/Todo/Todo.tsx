import { useSelector, useDispatch } from "react-redux";

export default function Todo({ text, isCompleted, id }: { text: string; isCompleted: boolean; id: number }) {
    const todos = useSelector((state: { todos: { id: number; text: string; isCompleted: boolean }[] }) => state.todos);
    const dispatch = useDispatch();


    const handleDeleteTodo = (id: number) => {
        console.log("Delete todo with id:", id);
        dispatch({ type: 'todos/deleteTodo', payload: id });
    }
    return (
        <li>
            <input type="checkbox" />
            <span>{text}</span>
            <button className="edit-todo-btn">Edit</button>
            <button
                onClick={() => handleDeleteTodo(id)}
                className="delete-todo-btn">Delete</button>
        </li>
    )
}