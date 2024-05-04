import { BackEnd } from "./BackEnd"
import { FrontEnd } from "./FrontEnd"

export const WhatIDo = () => {
  return (
    <div className="shadow-box">
      <div className='pt-3 ps-3 pl-3 pb-5'>
        <h2 className="text-white">What I do?</h2>
        <hr />
        <BackEnd />
        <FrontEnd />
      </div>
    </div>
  )
}