import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../slices/themeSlice'
import calcReducer from '../slices/calculatorSlice'

const store = configureStore({
  reducer: {
    theme: themeReducer,
    calculate: calcReducer,
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
