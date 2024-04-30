"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaCog } from "react-icons/fa";
import { BiTrash } from "react-icons/bi";
interface ChatCardProps {
  item: any;
  onClick: (value: number) => void;
  index: number;
  onDelete?: (value: number) => void;
}
const ChatsCard: React.FC<ChatCardProps> = ({
  item,
  onClick,
  index,
  onDelete,
}) => {
  const [settingIcon, setSettingIcon] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);
  const boxRef = useRef<HTMLDivElement | null>(null);

  const handleDeleteItem = () => {
    setDeleteItem(deleteItem);
  };

  const handleClickOutside = (event: MouseEvent) => {
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
      className="relative z-50  m-2 grid cursor-pointer grid-cols-5 items-center gap-1 rounded-lg bg-[#4ed0e7] p-2 dark:bg-slate-600 "
      onClick={() => onClick(index)}
    >
      <div className="relative  col-span-1 h-9 w-9 rounded-[50%]">
        <Image src={item.img} alt="" fill className="rounded-[50%]" />
        <div className={`absolute -top-1 right-0 size-3 rounded-full  ${item.status === 'request' ?  'bg-green-500' : item.status === 'cancel' ? 'bg-rose-600' : item.status ==='block' ? 'bg-yellow-500' : 'bg-purple-500'}`}>

        </div>
      </div>
      <div className=" col-span-3">
        <h1 className="text-slate-950">{item.name}</h1>
        <h1 className="text-white text-sm">
          {item.lastMesg?.length > 15
            ? `${item.lastMesg?.slice(0, 15)}...`
            : item.lastMesg}
        </h1>
      </div>
      <div className=" col-span-1 flex justify-end">
        <h3 className="text-gray-400 text-[12px]">{item.day}</h3>
        <button
          className={`text-gray-400 ml-1 mt-2 text-[14px] ${
            showSetting || settingIcon ? "block" : "hidden"
          }`}
          onClick={() => setShowSetting(!showSetting)}
        >
          <FaCog />
        </button>

        <div
          ref={boxRef}
          className={`border-gray-300 absolute  bottom-5 right-6 z-50 flex w-40 flex-col items-start justify-center rounded-md rounded-ee-none rounded-es-2xl rounded-se-2xl border border-solid p-2  text-left shadow ${
            showSetting ? "flex" : "hidden"
          } bg-white `}
        >
          <div key="text" className="  z-50">
            <span className="dark:text-gray-300 mr-5 ms-3 pr-3 font-medium text-black">
              Mute
            </span>
            <label className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" value="" className="peer sr-only" />
              <div className="after:border-gray-300 dark:border-gray-600 peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:bg-slate-700 dark:peer-focus:ring-green-800 rtl:peer-checked:after:-translate-x-full"></div>
            </label>
          </div>
          <div key="number">
            <span className="dark:text-gray-300 mr-5  ms-3 pr-3 font-medium text-black">
              Block
            </span>
            <label className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" value="" className="peer sr-only" />
              <div className="after:border-gray-300 dark:border-gray-600 peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:bg-slate-700 dark:peer-focus:ring-green-800 rtl:peer-checked:after:-translate-x-full"></div>
            </label>
          </div>
          <div key="date"></div>
          {/* <div key="single_date">Forward </div> */}
          {/* <div key="iteration">Clear Chat</div> */}
          <div key="iteration">
            <div className="flex justify-between gap-8 px-2">
              <span onClick={handleDeleteItem}>Delete</span>{" "}
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
