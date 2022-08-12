import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  themeMode: string
}

const initialState: InitialState = {
  themeMode: '',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<string>) => {
      state.themeMode = action.payload
    },
  },
})

export default themeSlice.reducer
export const { changeTheme } = themeSlice.actions
