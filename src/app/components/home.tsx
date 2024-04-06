import React from 'react';
import {Link} from 'react-router-dom';


export default function Home() {
  const str = "こんにちは";
  return (
    <main className="flex min-h-screen flex-col p-8">
      <script src="https://kit.fontawesome.com/d4e86ebdaa.js"></script>
      <div className="flex grow bg-red-400 items-center justify-center ">
        <div className="flex">
          Atcoder
        </div>
      </div>
      <button className="flex grow bg-emerald-400 items-center justify-center">
        Brainfuck
      </button>
      <div className="flex grow bg-teal-400 items-center justify-center">
        Contest
      </div>
      <div className="flex grow bg-purple-400 items-center justify-center">
        <Link to="/test">Go to test</Link>
      </div>
      <div className="flex grow bg-yellow-300 items-center justify-center">
        <Link to="/seminar3">Go to seminar3</Link>
      </div>
      <div className="flex grow bg-pink-300 items-center justify-center">
        <Link to="/seminar4">Go to seminar4</Link>
      </div>
      <div className="flex grow bg-white- items-center justify-center">
        <div className="fa-10x fa-brands fa-tiktok"></div>
        <span className="fa fa-facebook fa-border"></span>
        <span className="fa fa-twitter"></span>
        <span className="fa-10x fa-brands fa-tiktok"></span>
        <span className="fa-brands fa-github fa-spin"></span>
        <span className="fa-solid fa-masks-theater fa-5x"></span>
      </div>
      
    </main>
  )
}