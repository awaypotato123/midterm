import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Multiple from "./Multiple";
import Dropdown from './Dropdown';
import Checkbox from './Checkbox';

function App() {
  const [count, setCount] = useState(0)


  
  return (
    <>
     <Multiple/>
     <Dropdown/>
     <Checkbox/>

     

    </>
  )
}

export default App
