import React, { ReactNode } from 'react';
interface ModalProps{
isVisible: boolean;
onClose:(value:boolean)=>void;
children:ReactNode;
hideCloseIcon?: boolean;
}
const Modal:React.FC<ModalProps> = ({ isVisible, onClose, children, hideCloseIcon = true }) => {
  if (!isVisible) return null;
  console.log(isVisible);
  return (
    <div className="absolute flex  justify-center items-center inset-0 p-12 z-10 top-0 mt-3">
      <div className=" flex flex-col   ">
        {/* {
          hideCloseIcon && (
            <button
              className="relative text-sm text-white place-self-end -top-2 right-4  bg-gray-700 hover:bg-gray-900 h-10 w-10 rounded-full p-2"
              onClick={isVisible}
            >
              <span className="text-lg text-center ">X</span>
            </button>
          )
        } */}
        
        <button
          className="relative text-sm text-white place-self-end -top-2 -right-4  bg-red-700 hover:bg-red-900 h-10 w-10 rounded-full p-2"
          onClick={() => onClose(false)}
        >
          <span className="text-lg text-center ">X</span>
          <div className="rotate-45 absolute  top-96 z-50  ">

          <div className="bg-gray-500 w-14 h-14 -ml-4  rounded-br-[300px]   rotate-90">
          </div>
          </div>
        </button>
        <div className=" relative bg-gray-500  rounded  h-fit w-fit p-5 pt-6   overflow-auto">
          {children}
          
        </div>
      </div>
    </div>
  );
};

export default Modal;
