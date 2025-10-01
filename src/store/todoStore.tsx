import { createSlice } from '@reduxjs/toolkit';

interface Todo {
    id: number;
    text: string;
    isEditing?: boolean;
    isCompleted: boolean;
}

const todoSlice = createSlice({
    name: 'todos',
    initialState: [] as Todo[],
    reducers: {
        addTodo: (state, action) => {
            state.push({
                id: Date.now(),
                text: action.payload,
                isEditing: false,
                isCompleted: false,
            });
        },
        deleteTodo: (state, action) => {
            const id = action.payload;
            return state.filter(todo => todo.id !== id);
        },
        saveTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.find(todo => todo.id === id);
            if (todo) {
                todo.text = text;
                todo.isEditing = false;
            }
        },
        editTodo: (state, action) => {
            const id = action.payload;
            const todo = state.find(todo => todo.id === id);
            if (todo) {
                todo.isEditing = true;
            }
        },
    }
});


export default todoSlice.reducer;
export const { addTodo } = todoSlice.actions;
