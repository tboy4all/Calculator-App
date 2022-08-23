import React from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { updateCalc } from '../slices/calculatorSlice'

const Keypads = () => {
  const { themeMode } = useAppSelector((state) => state.theme)

  const dispatch = useAppDispatch()

  const handleClick = (value: string) => {
    dispatch(updateCalc(value))
  }
  const frontendMentor =
    'https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29'
  return (
    <div className='w-full md:w-96'>
      <div
        className={`grid grid-cols-4 mt-4 p-4 gap-4 bg-gray-800 rounded-md ${
          themeMode === 'themeMode2' ? 'bg-[#d1cccc] ' : ''
        } ${themeMode === 'themeMode3' ? 'bg-[#1d0936]' : ''} `}
      >
        <button
          onClick={() => handleClick('7')}
          className={`bg-[#eae3dc] text-[#444b5a] w-55 rounded-[10px] p-3 font-bold text-xl drop-shadow-[0_5px_#b4a597] ${
            themeMode === 'themeMode2'
              ? 'text-[#35352c] bg-[#e5e4e1] drop-shadow-[0_5px_#a69d91] '
              : ''
          } ${
            themeMode === 'themeMode3'
              ? 'text-[#ffe53dfd] bg-[#341c4f] drop-shadow-[0_5px_#871c9c]'
              : ''
          } `}
        >
          7
        </button>
        <button
          onClick={() => handleClick('8')}
          className={`bg-[#eae3dc] text-[#444b5a] w-55 rounded-[10px] p-3 font-bold text-xl drop-shadow-[0_5px_#b4a597] ${
            themeMode === 'themeMode2'
              ? 'text-[#35352c] bg-[#e5e4e1] drop-shadow-[0_5px_#a69d91] '
              : ''
          } ${
            themeMode === 'themeMode3'
              ? 'text-[#ffe53dfd] bg-[#341c4f] drop-shadow-[0_5px_#871c9c]'
              : ''
          } `}
        >
          8
        </button>
        <button
          onClick={() => handleClick('9')}
          className={`bg-[#eae3dc] text-[#444b5a] w-55 rounded-[10px] p-3 font-bold text-xl drop-shadow-[0_5px_#b4a597] ${
            themeMode === 'themeMode2'
              ? 'text-[#35352c] bg-[#e5e4e1] drop-shadow-[0_5px_#a69d91] '
              : ''
          } ${
            themeMode === 'themeMode3'
              ? 'text-[#ffe53dfd] bg-[#341c4f] drop-shadow-[0_5px_#871c9c]'
              : ''
          } `}
        >
          9
        </button>
        <button
          onClick={() => handleClick('del')}
          className={`bg-[#637097] text-[#f6f7fa] w-55 rounded-[10px] p-3 font-bold text-xl drop-shadow-[0_5px_#404e72] ${
            themeMode === 'themeMode2'
              ? 'bg-[#377f86] drop-shadow-[0_5px_#1b5f65]'
              : ''
          } ${
            themeMode === 'themeMode3'
              ? 'bg-[#58077d] drop-shadow-[0_5px_#bc15f4]'
              : ''
          }`}
        >
          DEL
        </button>
        <button
          onClick={() => handleClick('4')}
          className={`bg-[#eae3dc] text-[#444b5a] w-55 rounded-[10px] p-3 font-bold text-xl drop-shadow-[0_5px_#b4a597] ${
            themeMode === 'themeMode2'
              ? 'text-[#35352c] bg-[#e5e4e1] drop-shadow-[0_5px_#a69d91] '
              : ''
          } ${
            themeMode === 'themeMode3'
              ? 'text-[#ffe53dfd] bg-[#341c4f] drop-shadow-[0_5px_#871c9c]'
              : ''
          } `}
        >
          4
        </button>
        <button
          onClick={() => handleClick('5')}
          className={`bg-[#eae3dc] text-[#444b5a] w-55 rounded-[10px] p-3 font-bold text-xl drop-shadow-[0_5px_#b4a597] ${
            themeMode === 'themeMode2'
              ? 'text-[#35352c] bg-[#e5e4e1] drop-shadow-[0_5px_#a69d91] '
              : ''
          } ${
            themeMode === 'themeMode3'
              ? 'text-[#ffe53dfd] bg-[#341c4f] drop-shadow-[0_5px_#871c9c]'
              : ''
          } `}
        >
          5
        </button>
        <button
          onClick={() => handleClick('6')}
          className={`bg-[#eae3dc] text-[#444b5a] w-55 rounded-[10px] p-3 font-bold text-xl drop-shadow-[0_5px_#b4a597] ${
            themeMode === 'themeMode2'
              ? 'text-[#35352c] bg-[#e5e4e1] drop-shadow-[0_5px_#a69d91] '
              : ''
          } ${
            themeMode === 'themeMode3'
              ? 'text-[#ffe53dfd] bg-[#341c4f] drop-shadow-[0_5px_#871c9c]'
              : ''
          } `}
        >
          6
        </button>
        <button
          onClick={() => handleClick('+')}
          className={`bg-[#eae3dc] text-[#444b5a] w-55 rounded-[10px] p-3 font-bold text-xl drop-shadow-[0_5px_#b4a597] ${
            themeMode === 'themeMode2'
              ? 'text-[#35352c] bg-[#e5e4e1] drop-shadow-[0_5px_#a69d91] '
              : ''
          } ${
            themeMode === 'themeMode3'
              ? 'text-[#ffe53dfd] bg-[#341c4f] drop-shadow-[0_5px_#871c9c]'
              : ''
          } `}
        >
          +
        </button>
        <button
          onClick={() => handleClick('1')}
          className={`bg-[#eae3dc] text-[#444b5a] w-55 rounded-[10px] p-3 font-bold text-xl drop-shadow-[0_5px_#b4a597] ${
            themeMode === 'themeMode2'
              ? 'text-[#35352c] bg-[#e5e4e1] drop-shadow-[0_5px_#a69d91] '
              : ''
          } ${
            themeMode === 'themeMode3'
              ? 'text-[#ffe53dfd] bg-[#341c4f] drop-shadow-[0_5px_#871c9c]'
              : ''
          } `}
        >
          1
        </button>
        <button
          onClick={() => handleClick('2')}
          className={`bg-[#eae3dc] text-[#444b5a] w-55 rounded-[10px] p-3 font-bold text-xl drop-shadow-[0_5px_#b4a597] ${
            themeMode === 'themeMode2'
              ? 'text-[#35352c] bg-[#e5e4e1] drop-shadow-[0_5px_#a69d91] '
              : ''
          } ${
            themeMode === 'themeMode3'
              ? 'text-[#ffe53dfd] bg-[#341c4f] drop-shadow-[0_5px_#871c9c]'
              : ''
          } `}
        >
          2
        </button>
        <button
          onClick={() => handleClick('3')}
          className={`bg-[#eae3dc] text-[#444b5a] w-55 rounded-[10px] p-3 font-bold text-xl drop-shadow-[0_5px_#b4a597] ${
            themeMode === 'themeMode2'
              ? 'text-[#35352c] bg-[#e5e4e1] drop-shadow-[0_5px_#a69d91] '
              : ''
          } ${
            themeMode === 'themeMode3'
              ? 'text-[#ffe53dfd] bg-[#341c4f] drop-shadow-[0_5px_#871c9c]'
              : ''
          } `}
        >
          3
        </button>
        <button
          onClick={() => handleClick('-')}
          className={`bg-[#eae3dc] text-[#444b5a] w-55 rounded-[10px] p-3 font-bold text-xl drop-shadow-[0_5px_#b4a597] ${
            themeMode === 'themeMode2'
              ? 'text-[#35352c] bg-[#e5e4e1] drop-shadow-[0_5px_#a69d91] '
              : ''
          } ${
            themeMode === 'themeMode3'
              ? 'text-[#ffe53dfd] bg-[#341c4f] drop-shadow-[0_5px_#871c9c]'
              : ''
          } `}
        >
          -
        </button>
        <button
          className={`bg-[#eae3dc] text-[#444b5a] w-55 rounded-[10px] p-3 font-bold text-xl drop-shadow-[0_5px_#b4a597] ${
            themeMode === 'themeMode2'
              ? 'text-[#35352c] bg-[#e5e4e1] drop-shadow-[0_5px_#a69d91] '
              : ''
          } ${
            themeMode === 'themeMode3'
              ? 'text-[#ffe53dfd] bg-[#341c4f] drop-shadow-[0_5px_#871c9c]'
              : ''
          } `}
        >
          .
        </button>
        <button
          onClick={() => handleClick('0')}
          className={`bg-[#eae3dc] text-[#444b5a] w-55 rounded-[10px] p-3 font-bold text-xl drop-shadow-[0_5px_#b4a597] ${
            themeMode === 'themeMode2'
              ? 'text-[#35352c] bg-[#e5e4e1] drop-shadow-[0_5px_#a69d91] '
              : ''
          } ${
            themeMode === 'themeMode3'
              ? 'text-[#ffe53dfd] bg-[#341c4f] drop-shadow-[0_5px_#871c9c]'
              : ''
          } `}
        >
          0
        </button>
        <button
          className={`bg-[#eae3dc] text-[#444b5a] w-55 rounded-[10px] p-3 font-bold text-xl drop-shadow-[0_5px_#b4a597] ${
            themeMode === 'themeMode2'
              ? 'text-[#35352c] bg-[#e5e4e1] drop-shadow-[0_5px_#a69d91] '
              : ''
          } ${
            themeMode === 'themeMode3'
              ? 'text-[#ffe53dfd] bg-[#341c4f] drop-shadow-[0_5px_#871c9c]'
              : ''
          } `}
        >
          /
        </button>
        <button
          onClick={() => handleClick('*')}
          className={`bg-[#eae3dc] text-[#444b5a] w-55 rounded-[10px] p-3 font-bold text-xl drop-shadow-[0_5px_#b4a597] ${
            themeMode === 'themeMode2'
              ? 'text-[#35352c] bg-[#e5e4e1] drop-shadow-[0_5px_#a69d91] '
              : ''
          } ${
            themeMode === 'themeMode3'
              ? 'text-[#ffe53dfd] bg-[#341c4f] drop-shadow-[0_5px_#871c9c]'
              : ''
          } `}
        >
          *
        </button>
        <button
          onClick={() => handleClick('reset')}
          className={`col-span-2 bg-[#637097] text-[#f6f7fa] w-55 rounded-[10px] p-3 font-bold text-xl drop-shadow-[0_5px_#404e72] ${
            themeMode === 'themeMode2'
              ? 'bg-[#377f86] drop-shadow-[0_5px_#1b5f65]'
              : ''
          } ${
            themeMode === 'themeMode3'
              ? 'bg-[#58077d] drop-shadow-[0_5px_#bc15f4]'
              : ''
          }`}
        >
          RESET
        </button>
        <button
          onClick={() => handleClick('=')}
          className={`col-span-2 bg-[#d03f2f] text-[#f6f7fa] w-55 rounded-[10px] p-3 font-bold text-xl drop-shadow-[0_5px_#93261a] ${
            themeMode === 'themeMode2'
              ? 'bg-[#ca5502] drop-shadow-[0_5px_#893901]'
              : ''
          } ${
            themeMode === 'themeMode3'
              ? 'bg-[#00e0d1] drop-shadow-[0_5px_#6cf9f2]'
              : ''
          }`}
        >
          =
        </button>
      </div>
      <div className='mt-4 text-center'>
        <p className='text-sm font-bold '>
          <span className='text-[#ffe53dfd]'>Challenge by</span>{' '}
          <span className='text-[#00e0d1]'>
            {' '}
            <a href={frontendMentor}>Frontend Mentor.</a>
          </span>{' '}
          <span className='text-[#ffe53dfd]'> Coded by</span>{' '}
          <span className='text-[#00e0d1]'>Taiye Suleiman</span>
        </p>
      </div>
    </div>
  )
}

export default Keypads
