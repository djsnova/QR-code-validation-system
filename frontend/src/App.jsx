import { useState } from 'react'
import PeopleSimulation from './components/PeopleSimulation '

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PeopleSimulation />
    </>
  )
}

export default App
