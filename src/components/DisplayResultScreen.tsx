import React from 'react'
import { useAppSelector } from '../app/hooks'

const DisplayResultScreen = () => {
  const { themeMode } = useAppSelector((state) => state.theme)
  const { inputValue, displayValue } = useAppSelector(
    (state) => state.calculate
  )

  // const inputValue = useAppSelector((state) => state.calculate)
  // const displayValue = useAppSelector((state) => state.calculate)
  return (
    <div className='w-full md:w-96 '>
      <div
        className={`text-white bg-gray-900 rounded-md ${
          themeMode === 'themeMode2' ? 'text-[#35352c] bg-[#ededed]' : ''
        } ${themeMode === 'themeMode3' ? 'text-[#ffe53d] bg-[#1d0934]' : ''}`}
      >
        <input
          disabled
          className={`px-4 outline-none w-full text-right pb-2 text-xl bg-gray-900 rounded-md ${
            themeMode === 'themeMode2' ? 'text-[#35352c] bg-[#ededed]' : ''
          } ${themeMode === 'themeMode3' ? 'text-[#ffe53d] bg-[#1d0934]' : ''}`}
          type={'text'}
          value={inputValue}
        />
        <input
          disabled
          className={`px-4 outline-none w-full text-right pb-4 text-4xl font-bold bg-gray-900  rounded-md  ${
            themeMode === 'themeMode2' ? 'text-[#35352c] bg-[#ededed]' : ''
          } ${themeMode === 'themeMode3' ? 'text-[#ffe53d] bg-[#1d0934]' : ''}`}
          type={'text'}
          value={displayValue}
        />
      </div>
    </div>
  )
}

export default DisplayResultScreen
