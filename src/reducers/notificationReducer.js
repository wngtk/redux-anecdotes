import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    addNotification(state, action) {
      return action.payload
    }
  }
})

export const { addNotification } = notificationSlice.actions
export default notificationSlice.reducer
