import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todos",
  initialState: {
    allTodos: [],
    edit: {
      todo: {},
      isedit: false
    }
  },

  reducers: {

    // add Todo //
    add: (state, action) => {
      return {
        ...state,
        allTodos: [action.payload, ...state.allTodos]
      }
    },

    remove: (state, action) => {
      return {
        ...state,
        allTodos: state.allTodos.filter(item => item.id !== action.payload)
      }
    },

    edit: (state, action) => {
      return {
        ...state,
        edit: { todo: action.payload, isedit: true }
      }
    },
    update: (state, action) => {
      return {
        ...state,
        allTodos: state.allTodos.map(item => item.id === action.payload.id ? action.payload : item),
        edit: { todo: {}, isedit: false }
      }
    }

  }
})
export const { add, remove, edit, update } = TodoSlice.actions;
export default TodoSlice.reducer;   