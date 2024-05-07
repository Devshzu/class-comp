import React, { Component } from 'react'
import img from "../img/hand.png"
import Model from "./Model"
import smile from "../img/smile.png"

export default class input extends Component {
    
constructor(){
    super()
    this.state = {
   value: "",
   isSubmit: false 
    }
    this.cancelModel = this.cancelModel.bind(this);
}

 valHandler(e){
   this.setState({value: e.target.value})
 }

 isSubmit(e){
  e.preventDefault()
  this.setState({isSubmit: !this.state.isSubmit})
 }

 cancelModel(e){
    this.setState({value: ""})
   this.setState({isSubmit: e})
 }

  render() {
    console.log(this.state)
    return (
        <div className='w-[60%]'>
        {
       this.state.isSubmit ? (
        <>
        <Model value={this.state.value} cancelModel= {this.cancelModel}/>
            <form action="" onSubmit={(e)=>this.isSubmit(e)} className='flex justify-center items-center flex-col gap-2'>
        <input type="text" onChange={(e)=>this.valHandler(e)} className='w-full bg-slate-600 border-2 border-black rounded-md px-3 text-white' placeholder = "Enter What Excit you!" />
          <button className='bg-stone-700 text-white border-2 rounded px-4 cursor-pointer'>Submit</button>
        </form>
        <img src={img} alt="error" className='w-[80px] translate-x-[70px] mt-4'/>
        </>
        )
        : (
        <>
            <form action="" onSubmit={(e)=>this.isSubmit(e)} className='flex justify-center items-center flex-col gap-2'>
        <input type="text" onChange={(e)=>this.valHandler(e)} className='w-full bg-slate-600 border-2 border-black rounded-md px-3 text-white' placeholder = "Enter What Excit you!" />
          <button className='bg-stone-700 text-white border-2 rounded px-4 cursor-pointer'>Submit</button>
        </form>
        <img src={smile} alt="error" className='w-[80px] translate-x-[70px] mt-4'/>
        </>
        )
        }
        </div>
    )
  }
}
    