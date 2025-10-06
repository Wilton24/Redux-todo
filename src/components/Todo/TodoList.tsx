import { useSelector, useDispatch } from "react-redux";
import Todo from "./Todo";
import { useRef } from "react";


export default function TodoList() {
    const addTodoRef = useRef<HTMLInputElement>(null);
    const todos = useSelector((state: { todos: { id: number; text: string; isEditing: boolean; isCompleted: boolean }[] }) => state.todos);
    const dispatch = useDispatch();

    function handleAddTodo() {
        if (addTodoRef.current?.value === "") return;
        dispatch({ type: 'todos/addTodo', payload: addTodoRef.current?.value });
        addTodoRef.current!.value = "";
        console.log(todos);
    }

    return (
        <main>
            <h2>Todo List</h2>
            <input type="text" ref={addTodoRef} />
            <button
                onClick={() => handleAddTodo()}
                className="add-todo">Add Todo</button>
            <ul className="todo-list">

                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        isEditing={todo.isEditing}
                        isCompleted={todo.isCompleted}
                    />
                ))}
            </ul>
        </main>
    )
}
