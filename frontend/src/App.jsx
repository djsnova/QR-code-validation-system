import { useState } from 'react'
import PeopleSimulation from './components/PeopleSimulation '

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex items-center justify-center w-screen min-h-screen bg-gray-100 text-black p-8 ">
        <PeopleSimulation />
      </div>
    </>
  )
}

export default App
