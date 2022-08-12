import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  inputValue: string
  displayValue: string
}

const initialState: InitialState = {
  inputValue: '',
  displayValue: '0',
}

const calculatorSlice = createSlice({
  name: 'calculate',
  initialState,
  reducers: {
    updateCalc: (state, action: PayloadAction<string>) => {
      const val = action.payload
      switch (val) {
        case '=': {
          if (state.inputValue !== '') {
            try {
              const resultFormat = eval(state.inputValue)
              state.displayValue = resultFormat.toLocaleString('en-US')
            } catch (e) {
              alert('Math error')
              state.displayValue = ''
            }
          }
          break
        }

        case 'del': {
          const inputValue = state.inputValue.substring(
            0,
            state.inputValue.length - 1
          )
          state.inputValue = inputValue
          break
        }

        case 'reset': {
          state.inputValue = ''
          state.displayValue = '0'
          break
        }

        default: {
          state.inputValue += val
        }
      }
    },
  },
})

export default calculatorSlice.reducer
export const { updateCalc } = calculatorSlice.actions
