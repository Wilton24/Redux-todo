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
                    <button>Delete</button>
                </li>
                <li>
                    <input type="checkbox" />
                    <span>Learn Redux</span>
                    <button>Delete</button>
                </li>
                <li>
                    <input type="checkbox" />
                    <span>Build something fun!</span>
                    <button>Delete</button>
                </li>
                <li>
                    <input type="checkbox" />
                    <span>Build something fun!</span>
                    <button>Delete</button>
                </li>
                <li>
                    <input type="checkbox" />
                    <span>Build something fun!</span>
                    <button>Delete</button>
                </li>
            </ul>
        </main>
    )
}
