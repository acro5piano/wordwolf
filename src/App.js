import React from 'react'
import { Play } from './pages/Play'
import { Prepare } from './pages/Prepare'

const search = new URLSearchParams(window.location.search.slice(1))

const mode = search.get('mode') || 'prepare'

function App() {
  switch (mode) {
    case 'play':
      return <Play />
    case 'prepare':
    default:
      return <Prepare />
  }
}

export default App
