import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';

interface Props {
  title: string;
  onClick?: () => void; 
}

const RedButton: React.FC<Props> = ({ title, onClick }) => {
  return (
    <button
      className="p-2 border bg-red-500 hover:bg-red-600 text-nowrap rounded-md flex items-center"
      onClick={onClick}
    >
      <AiOutlineClose className="mr-1" />
      {title}
    </button>

  )
}

export default RedButton