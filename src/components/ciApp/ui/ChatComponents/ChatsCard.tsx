"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaCog } from "react-icons/fa";
import Link from "next/link";
import { BiTrash } from "react-icons/bi";
interface ChatCardProps{
    item:any;
    onClick:(value:number)=>void;
    index:number;
    onDelete?:(value:number)=>void;
}
const ChatsCard:React.FC<ChatCardProps> = ({ item, onClick, index, onDelete }) => {
  const [settingIcon, setSettingIcon] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  const [deleteItem, setDeleteItem]= useState(null)
  const boxRef = useRef<HTMLDivElement| null>(null);


const handleDeleteItem =()=>{
  setDeleteItem(deleteItem)
}


  const handleClickOutside = (event:MouseEvent) => {
    if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
      // Clicked outside the box
      setShowSetting(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      onMouseEnter={() => setSettingIcon(true)}
      onMouseLeave={() => setSettingIcon(false)}
      className="flex bg-white m-2 gap-1 grid grid-cols-5 rounded-lg p-2 items-center relative cursor-pointer "
      onClick={() => onClick(index)}
    >
      <div className="w-9 h-9 rounded-[50%] col-span-1 relative bg-[#39b7ea]">
        <Image src={item.img} alt="" fill className="rounded-[50%]" />
      </div>
      <div className=" col-span-3">
        <h1>{item.name}</h1>
        <h1 className="text-gray-500 text-[14px]">{item.lastMesg}</h1>
      </div>
      <div className=" col-span-1 flex justify-end">
        <h3 className="text-gray-400 text-[12px]">{item.day}</h3>
        <button
          className={`text-gray-400 text-[14px] mt-2 ml-1 ${
            showSetting || settingIcon ? "block" : "hidden"
          }`}
          onClick={() => setShowSetting(!showSetting)}
        >
          <FaCog />
        </button>

        <div
          ref={boxRef}
          className={`text-left shadow border border-solid border-gray-300 p-2 flex justify-center rounded-md rounded-es-2xl rounded-se-2xl rounded-ee-none absolute z-50 right-6 bottom-5 flex-col   items-start w-40 ${
            showSetting ? "flex" : "hidden"
          } bg-white`}
        >
          <div key="text" className="  z-50">
              <span className="ms-3 font-medium text-black dark:text-gray-300 mr-5 pr-3">
                Mute
              </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
             
            </label>
          </div>
          <div key="number">
              <span className="ms-3 pr-3  font-medium text-black dark:text-gray-300 mr-5">
                Block
              </span>
            <label className="relative inline-flex items-center cursor-pointer">
             
               <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
            </label>
          </div>
          <div key="date"></div>
          {/* <div key="single_date">Forward </div> */}
          {/* <div key="iteration">Clear Chat</div> */}
          <div key="iteration">
            <div className="flex justify-between px-2 gap-8">
              <span onClick={handleDeleteItem} >Delete</span>{" "}
              <span>
                <BiTrash size={30} />{" "}
              </span>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatsCard;