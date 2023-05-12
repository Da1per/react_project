import { configureStore } from '@reduxjs/toolkit'
import musicSlice from "./musicSlice"

const store = configureStore({
  reducer: {
    musicSlice:musicSlice,
  },
})

export default store