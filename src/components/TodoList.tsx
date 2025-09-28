export default function Todolist() {

    return (
        <main>
            <h2>Todo List</h2>
            <input type="text" />
            <button className="add-todo">Add Todo</button>

            <ul className="todo-list">
                <li>
                    <input type="checkbox" />
                    <span>Learn React</span>
                    <button className="edit-todo-btn">Edit</button>
                    <button className="delete-todo-btn">Delete</button>
                </li>
                <li>
                    <input type="checkbox" />
                    <span>Learn Redux</span>
                    <button className="edit-todo-btn">Edit</button>
                    <button className="delete-todo-btn">Delete</button>
                </li>
                <li>
                    <input type="checkbox" />
                    <span>Build something fun!</span>
                    <button className="edit-todo-btn">Edit</button>
                    <button className="delete-todo-btn">Delete</button>
                </li>
                <li>
                    <input type="checkbox" />
                    <span>Build something fun!</span>
                    <button className="edit-todo-btn">Edit</button>
                    <button className="delete-todo-btn">Delete</button>
                </li>
                <li>
                    <input type="checkbox" />
                    <span>Build something fun!</span>
                    <button className="edit-todo-btn">Edit</button>
                    <button className="delete-todo-btn">Delete</button>
                </li>
            </ul>
        </main>
    )
}
