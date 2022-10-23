import { CssBaseline, GeistProvider } from '@geist-ui/core'
import { ReactElement, useState } from 'react'

import './App.css'

import { Home } from './pages/Home'
import { GifsContextProvider } from './context/GifsContext'

const App = (props: any): ReactElement => {
  const [themeType, setThemeType] = useState('dark')
  const switchThemes = (): any => {
    setThemeType(last => (last === 'dark' ? 'light' : 'dark'))
  }
  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <GifsContextProvider>
        <Home switchThemes={switchThemes} />
      </GifsContextProvider>
    </GeistProvider>
  )
}
export default App
