import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'


function App() {

  return (
    <>
      <h1>Fitness app</h1>
      <Counter label="cardiotrain"/>
      <Counter  label="freewighttrain"/>
      <Counter label="aglassofwater"/>
      

    </>
  )
}

export default App
