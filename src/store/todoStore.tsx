import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: [] as { id: number; text: string; isCompleted: boolean }[],
    reducers: {
        addTodo: (state, action) => {
            state.push({
                id: Date.now(),
                text: action.payload,
                isCompleted: false,
            });
        }
    }
});


export default todoSlice.reducer;
export const { addTodo } = todoSlice.actions;
