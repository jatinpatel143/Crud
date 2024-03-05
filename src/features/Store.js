import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "../todos/TodoSlice"

export const store = configureStore({
    reducer: {
        todos: todoreducer,
    }

})
