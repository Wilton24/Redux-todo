import { createSlice } from '@reduxjs/toolkit';

interface Todo {
    id: number;
    text: string;
    isCompleted: boolean;
}

const initialState: Todo[] = [
    { id: 1, text: "Learn React", isCompleted: false },
    { id: 2, text: "Practice Redux", isCompleted: true },
    { id: 3, text: "Build a Todo App", isCompleted: false },
];

const todoSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push({
                id: Date.now(),
                text: action.payload,
                isCompleted: false,
            });
        },
        deleteTodo: (state, action) => {
            const id = action.payload;
            return state.filter(todo => todo.id !== id);
        },
    }
});


export default todoSlice.reducer;
export const { addTodo } = todoSlice.actions;
