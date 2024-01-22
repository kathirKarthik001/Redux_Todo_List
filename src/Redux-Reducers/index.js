import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodos: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed:false
      };
      state.todos.push(todo);
    },
    delTodos: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload );
    },
    CompTodos: (state, action) => {
        const todo = state.todos.find((todo) => todo.id === action.payload);
        if (todo) {
            todo.completed = !todo.completed;
        }
      },
  },
});



export const {addTodos , delTodos , CompTodos} = todoSlice.actions
export default todoSlice.reducer