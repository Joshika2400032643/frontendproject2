import { useState } from 'react'
import './App.css'
import {Link} from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Welcome to klu</h1>
     <h2>Today topic is introduction to react</h2>
     <h3>today date is 29.07.2025</h3>
     <h4>2400032643</h4>
     <h5>my name is joshika</h5>
     <Link to="/Page1">Go To Page1</Link>
     <br></br>
     <Link to="/Page2">Go To Page2</Link>
    <br></br>
     <Link to="/Page3">Go To Page3</Link>
    </>
    
  )
}

export default App
