import React from 'react'
import { useAppSelector } from './app/hooks'
import DisplayResultScreen from './components/DisplayResultScreen'
import Keypads from './components/Keypads'
import TopHead from './components/TopHead'

function App() {
  // const dispatch = useAppDispatch()
  const { themeMode } = useAppSelector((state) => state.theme)

  return (
    <div
      className={`flex items-center flex-col h-screen bg-[#3a4764] p-10 ${
        themeMode === 'themeMode2' ? 'bg-[#e6e6e6]' : ''
      } ${themeMode === 'themeMode3' ? 'bg-[#160628]' : ''}`}
    >
      <TopHead />
      <DisplayResultScreen />
      <Keypads />
    </div>
  )
}

export default App
