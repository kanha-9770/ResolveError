import React from 'react'
import "./OurStrength.css"
import { CloseButton } from '../Constants/OurStrength/OurStrength-Data';

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
    children: React.ReactNode;
  }

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, children }) => {
    if (!isVisible) return null;
  return (
    <div className="modal-overlay bg-white bg-opacity-50 backdrop-blur-sm fixed inset-0  flex   z-50">
      <div className="bg-white w-[70rem] h-[100vh] mt-20 p-8 rounded-[2.5rem] relative">
        <button onClick={onClose} className="absolute top-5 right-5 text-[2.5rem]">
          {CloseButton}
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal