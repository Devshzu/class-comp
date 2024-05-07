import React, { Component } from 'react'
import Input from './components/Input'
import bg from "../src/img/bg.jpg"
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='w-[100vw] h-[100vh] flex justify-center items-center relative'>
      <img src={bg} alt="error" className='w-full h-full object-cover relative opacity-70'/>
      <div className='w-[30%] h-[50%] rounded-xl bg-slate-300 flex justify-center items-center flex-col gap-2 absolute'>
      <p className='text-lg font-medium'>Enter What Excit you!</p>
      <Input/>
     
      </div>
      </div>
    )
  }
}
