import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../store/todoStore";


export default function Todo({ text, isCompleted }: { text: string; isCompleted: boolean }) {
    const todos = useSelector((state: { todos: { id: number; text: string; isCompleted: boolean }[] }) => state.todos);
    const dispatch = useDispatch();
    return (
        <li>
            <input type="checkbox" checked={isCompleted} />
            <span>{text}</span>
            <button className="edit-todo-btn">Edit</button>
            <button className="delete-todo-btn">Delete</button>
        </li>
    )
}