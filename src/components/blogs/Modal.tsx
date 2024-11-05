import React from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="bg-[#f2f2f2] bg-opacity-50 backdrop-blur fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center z-10"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-white drop-shadow-lg lg:px-[3rem] px-[2.5rem] rounded-[1rem] relative flex lg:w-[70vw] w-full lg:h-[64vh] h-[72vh] lg:mx-0 mx-[4vw] justify-center items-center " onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          aria-label="Close modal"
          className='absolute top-[1rem] right-[1.5rem]'
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
