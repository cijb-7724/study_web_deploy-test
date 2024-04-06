import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';

const Questions = (props: {number:string, q:string, a:string}) => {
    const modalStyle: Modal.Styles = {
      content: {
        position: 'fixed',
        top: '0%',
        left: '70%',
        width: '30%',
        height: '50%',
        
      }
    }

    const [isModalOpen, setisModalOpen] = useState(false);
 
    return (
        
      <main>
        <Modal
          isOpen = {isModalOpen}
          onRequestClose={() => setisModalOpen(false)}
          style = {modalStyle}
        >
          <div className = "text-black">
            {props.a}
          </div>
        </Modal>
  
        <div className="items-center justify-center">
          <div onClick = {() => setisModalOpen(true)}>
            問題{props.number}:{props.q}
          </div>
        </div>
      </main>
    );
  }
  
  export default Questions;
