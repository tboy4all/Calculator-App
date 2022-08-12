import React from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { updateCalc } from '../slices/calculatorSlice'

const Keypads = () => {
  const { themeMode } = useAppSelector((state) => state.theme)

  const dispatch = useAppDispatch()

  const handleClick = (value: string) => {
    dispatch(updateCalc(value))
  }
  return (
    <div className='w-full md:w-96'>
      <div
        className={`grid grid-cols-4 mt-4 p-4 gap-3 bg-gray-800 rounded-md drop-shadow-[0 5px #b4a597] ${
          themeMode === 'themeMode2'
            ? 'bg-[#d1cccc] drop-shadow-[0 5px #a69d91]'
            : ''
        } ${
          themeMode === 'themeMode3'
            ? 'bg-[#1d0934] drop-shadow-[0 5px #871c9c]'
            : ''
        }`}
      >
        <button
          onClick={() => handleClick('7')}
          className='bg-[#eae3dc] text-[#444b5a] w-55 rounded-[10px] p-3 font-bold text-xl drop-shadow-md'
        >
          7
        </button>
        <button
          onClick={() => handleClick('8')}
          className='bg-[#eae3dc] text-[#444b5a] w-55 rounded-[10px] p-3 font-bold text-xl drop-shadow-md'
        >
          8
        </button>
        <button
          onClick={() => handleClick('9')}
          className='bg-[#eae3dc] text-[#444b5a] w-55 rounded-[10px] p-3 font-bold text-xl drop-shadow-md'
        >
          9
        </button>
        <button
          onClick={() => handleClick('del')}
          className={`bg-[#637097] text-[#f6f7fa] w-55 rounded-[10px] p-3 font-bold text-xl drop-shadow-[0 5px #404e72] ${
            themeMode === 'themeMode2'
              ? 'bg-[#377f86] drop-shadow-[0 5px #1b5f65]'
              : ''
          } ${
            themeMode === 'themeMode3'
              ? 'bg-[#58077d] drop-shadow-[0 5px #bc15f4]'
              : ''
          }`}
        >
          DEL
        </button>
        <button
          onClick={() => handleClick('4')}
          className='bg-[#eae3dc] text-[#444b5a] w-55 rounded-[10px] p-3 font-bold text-xl'
        >
          4
        </button>
        <button
          onClick={() => handleClick('5')}
          className='bg-[#eae3dc] text-[#444b5a] w-55 rounded-[10px] p-3 font-bold text-xl'
        >
          5
        </button>
        <button
          onClick={() => handleClick('6')}
          className='bg-[#eae3dc] text-[#444b5a] w-55 rounded-[10px] p-3 font-bold text-xl'
        >
          6
        </button>
        <button
          onClick={() => handleClick('+')}
          className='bg-[#eae3dc] text-[#444b5a] w-55 rounded-[10px] p-3 font-bold text-xl'
        >
          +
        </button>
        <button
          onClick={() => handleClick('1')}
          className='bg-[#eae3dc] text-[#444b5a] w-55 rounded-[10px] p-3 font-bold text-xl'
        >
          1
        </button>
        <button
          onClick={() => handleClick('2')}
          className='bg-[#eae3dc] text-[#444b5a] w-55 rounded-[10px] p-3 font-bold text-xl'
        >
          2
        </button>
        <button
          onClick={() => handleClick('3')}
          className='bg-[#eae3dc] text-[#444b5a] w-55 rounded-[10px] p-3 font-bold text-xl'
        >
          3
        </button>
        <button
          onClick={() => handleClick('-')}
          className='bg-[#eae3dc] text-[#444b5a] w-55 rounded-[10px] p-3 font-bold text-xl'
        >
          -
        </button>
        <button className='bg-[#eae3dc] text-[#444b5a] w-55 rounded-[10px] p-3 font-bold text-xl'>
          .
        </button>
        <button
          onClick={() => handleClick('0')}
          className='bg-[#eae3dc] text-[#444b5a] w-55 rounded-[10px] p-3 font-bold text-xl'
        >
          0
        </button>
        <button className='bg-[#eae3dc] text-[#444b5a] w-55 rounded-[10px] p-3 font-bold text-xl'>
          /
        </button>
        <button
          onClick={() => handleClick('*')}
          className='bg-[#eae3dc] text-[#444b5a] w-55 rounded-[10px] p-3 font-bold text-xl'
        >
          *
        </button>
        <button
          onClick={() => handleClick('reset')}
          className={`col-span-2 bg-[#637097] text-[#f6f7fa] w-55 rounded-[10px] p-3 font-bold text-xl ${
            themeMode === 'themeMode2' ? 'bg-[#377f86]' : ''
          } ${themeMode === 'themeMode3' ? 'bg-[#58077d]' : ''}`}
        >
          RESET
        </button>
        <button
          onClick={() => handleClick('=')}
          className={`col-span-2 bg-[#d03f2f] text-[#f6f7fa] w-55 rounded-[10px] p-3 font-bold text-xl drop-shadow-[0 5px #93261a] ${
            themeMode === 'themeMode2'
              ? 'bg-[#ca5502] drop-shadow-[0 5px #893901]'
              : ''
          } ${
            themeMode === 'themeMode3'
              ? 'bg-[#00e0d1] drop-shadow-[0 5px #6cf9f2]'
              : ''
          }`}
        >
          =
        </button>
      </div>
    </div>
  )
}

export default Keypads
