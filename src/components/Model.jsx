import React, { Component } from 'react'
import { IoCloseCircle } from "react-icons/io5";

export default class Model extends Component {
    constructor(props){
    super()
    this.state = {
        val: ""
    }
    }


  render() {
    const {value, cancelModel} = this.props
    // console.log(cancelModel())
    return (
      <div className='w-[150px] min-h-max px-4 py-3 border-2 border-slate-900 rounded-md bg-slate-600 absolute right-[-140px] translate-y-[-150px]'>
        <IoCloseCircle onClick={()=>cancelModel(false)} className='translate-y-[-22px] translate-x-[-22px] cursor-pointer' />
        <p>{value}</p>
      </div>
    )
  }
}
