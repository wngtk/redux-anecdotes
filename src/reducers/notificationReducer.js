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

const { addNotification } = notificationSlice.actions

export const setNotification = (content, ms = 5000) => {
  let timer = null
  return async (dispatch) => {
    dispatch(addNotification(content))
    clearTimeout(timer)
    timer = setTimeout(() => {
      dispatch(addNotification(''))
    }, ms)
  }
}


export default notificationSlice.reducer
