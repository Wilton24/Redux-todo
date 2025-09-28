import { useSelector, useDispatch } from "react-redux";
import Todo from "./Todo";

export default function TodoList() {
    const todos = useSelector((state: { todos: { id: number; text: string; isCompleted: boolean }[] }) => state.todos);
    const dispatch = useDispatch();

    return (
        <main>
            <h2>Todo List</h2>
            <input type="text" />
            <button className="add-todo">Add Todo</button>
            <ul className="todo-list">

                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        isCompleted={todo.isCompleted}
                    />
                ))}
            </ul>
        </main>
    )
}
