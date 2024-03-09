import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    list: [],
    filter: "all"
  },
  reducers: {
    addTodo: (state, action) => (
      state.list.push({
        id: new Date().toISOString(),
        text: action.payload,
        completed: false,
      })
    )
  }
})

export const  {addTodo} = todoSlice.actions

export default todoSlice.reducer