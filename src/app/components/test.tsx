import React from 'react';
import {Link} from 'react-router-dom';

export default function Test() {
  return (
  <main className="flex min-h-screen flex-col p-8">
    <div className="flex grow bg-red-400 items-center justify-center ">
      <div className="flex items-center justify-center">
        {">[->+>+<<]>>[-<<+>>]<<<[->>->[-]>[-]>[-]<<<[->+>+<<]>>[-<<+>>]<[[-]>+<]>>+<[[-]>-<]>[<<<<[->+>+<<]>>[-<<+>>]>>->+<]<<<<<]>>[-<->]>>>>[-<<<<<<+>>>>>>]<<<<<<"}  
      </div>
      <div className="flex grow bg-purple-400 items-center justify-center">
        <Link to="/">Go back home</Link>
      </div>
      <button className="flex grow bg-emerald-400 items-center justify-center">
        kaka
      </button>
    </div>
  </main>
  )
}