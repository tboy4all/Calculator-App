import React from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { changeTheme } from '../slices/themeSlice'

const TopHead = () => {
  const dispatch = useAppDispatch()
  const { themeMode } = useAppSelector((state) => state.theme)

  const onThemeHandler = (themeMode: string) => {
    dispatch(changeTheme(themeMode))
  }
  return (
    <div className='w-full md:w-96'>
      <div
        className={`flex text-gray-50 justify-between items-center ${
          themeMode === 'themeMode2' ? 'text-[#35352c]' : ''
        } ${themeMode === 'themeMode3' ? 'text-[#ffe53d]' : ''}`}
      >
        <div className='font-bold mt-4'>
          <h6>Calc</h6>
        </div>
        <div className='flex justify-between gap-4'>
          <div className='mt-[30px]'>
            <span className='font-bold uppercase text-[10px]'>Theme</span>
          </div>
          <div>
            <div className='flex justify-around'>
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>
            <div className='flex items-center justify-around bg-gray-900 h-7 w-24 toggle-border mb-4'>
              <span
                onClick={() => onThemeHandler('themeMode1')}
                className={`w-4 h-4 bg-gray-900 rounded-lg ${
                  themeMode === 'themeMode1' ? 'bg-[#d03f2f]' : ''
                }`}
              ></span>
              <span
                onClick={() => onThemeHandler('themeMode2')}
                className={`w-4 h-4 bg-gray-900 rounded-lg ${
                  themeMode === 'themeMode2' ? 'bg-[#ca5502]' : ''
                } `}
              ></span>
              <span
                onClick={() => onThemeHandler('themeMode3')}
                className={`w-4 h-4 bg-gray-900 rounded-lg ${
                  themeMode === 'themeMode3' ? 'bg-[#00e0d1]' : ''
                }`}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHead
