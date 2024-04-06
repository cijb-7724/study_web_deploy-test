import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';


export default function Seminar4() {
  return (
      
    <main>
      <div>
        第4回！
      </div>
      <div className="text-xs md:text-9xl ">
        こんにちは
      </div>
      <div className="hidden md:block">
        pcで表示される文字
      </div>
      <div className="md:hidden">
        スマホで表示される文字
      </div>
      
    </main>
  );
}

