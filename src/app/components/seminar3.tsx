import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import Questions from './seminar3/questions';


export default function Seminar3() {

  const [number, setNumber] = useState(10000000000);
  const [squaredNumber, setsquareNumber] = useState(1);
  const [isModalOpen, setisModalOpen] = useState(false);

  useEffect (() => {
    setsquareNumber(number * number)
  }, [number])

  return (
      
    <main>
      <div>
        第3回！
      </div>
      <button onClick = {() => setNumber(number + 1)}>
        増やす
      </button>
      <div>
        {number}
      </div>
      <div>
        squaredNumber: {squaredNumber}
      </div>
      <div className="items-center justify-center">
        <div>
          <Questions number="1" q="sin(30°)の値は？" a="0.5" />
        </div>
        <div>
          <Questions number="2" q="sin(1°)の値は？" a="0.017" />
        </div>
      </div>
      <div>
        henkou
      </div>
    </main>
  );
}

