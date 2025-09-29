import { useSelector, useDispatch } from "react-redux";

let todoClassName = "todo-item";


export default function Todo({ text, isCompleted, isEditing, id }: { text: string; isCompleted: boolean; isEditing: boolean; id: number }) {
    const todos = useSelector((state: { todos: { id: number; text: string; isCompleted: boolean }[] }) => state.todos);
    const dispatch = useDispatch();


    const handleDeleteTodo = (id: number) => {
        console.log("Delete todo with id:", id);
        dispatch({ type: 'todos/deleteTodo', payload: id });
    }

    function handleEditTodo(id: number) {
        console.log("Edit todo with id:", id);
        dispatch({ type: 'todos/editTodo', payload: id });
        console.log(todos);

    }


    let textContent = <input type="text" value={text} onChange={(e: any) => dispatch({ type: 'todos/editTodo', payload: { id, text: e.target.value } })} />

    return (
        <li className={todoClassName}>
            <input type="checkbox" />
            {/* <span>{text}</span> */}
            {isEditing ? textContent : <span>{text}</span>}
            <button
                onClick={() => handleEditTodo(id)}
                className="edit-todo-btn">{isEditing ? "Save" : "Edit"}</button>
            <button
                onClick={() => handleDeleteTodo(id)}
                className="delete-todo-btn">{isEditing ? "Cancel" : "Delete"}</button>
        </li>
    )
}