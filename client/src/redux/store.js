import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../redux/features/userReducer'
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})