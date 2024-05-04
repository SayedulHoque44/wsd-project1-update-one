"use client";
import Image from "next/image";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { startChat } from "@/redux/fetures/liveChat/chatPartnerSlice";
import { TbCloudOff, TbCopyOff, TbPhoneCall, TbPhoneOff } from "react-icons/tb";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { useState } from "react";
interface ChatCardProps {
  item: any;
}
const ChatsCard: React.FC<ChatCardProps> = ({ item }) => {
  //toggle
  const [uploadOff, setUploadOff] = useState(true);
  const [phoneOff, setPhoneOff] = useState(true);
  const [copyOff, setCopyOff] = useState(true);
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={() => dispatch(startChat(item))}
      className="m-2  flex  cursor-pointer  items-center justify-between rounded-lg bg-[#343546] p-2 dark:bg-slate-800 "
    >
      <div className="flex items-center gap-2">
        <div className="relative h-9 w-9 rounded-[50%]">
          <Image src={item.img} alt="" fill className="rounded-[50%]" />
          <div
            className={`absolute -top-1 right-0 size-3 rounded-full  ${
              item.status === "all_users" ? "bg-green-500" : "bg-rose-600"
            }`}
          ></div>
        </div>
        <div>
          <h1 className="text-white">{item.name}</h1>
          <h1 className="text-sm text-slate-300">
            {item.lastMesg?.length > 10
              ? `${item.lastMesg?.slice(0, 10)}...`
              : item.lastMesg}
          </h1>
        </div>
      </div>
      <div className="relative flex items-center gap-2">
        {item.status === "requeste_users" ? (
          <>
            <button className="rounded-full bg-pink-500 px-5 py-1 text-white ">
              Add
            </button>
            <button className="rounded-full bg-cyan-500 px-5 py-1 text-white ">
              Cancel
            </button>
          </>
        ) : item.status === "forward_users" ? (
          <>
            <button className="rounded-full bg-green-500 px-4 py-1 text-white ">
              Accepted
            </button>
            <button className="rounded-full bg-rose-500 px-4 py-1 text-white ">
              Rejected
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setUploadOff(!uploadOff)}>
              {uploadOff ? (
                <FaCloudUploadAlt className="size-5" />
              ) : (
                <TbCloudOff className="size-5" />
              )}
            </button>

            <button
              onClick={() => setCopyOff(!copyOff)}
              className="rounded-full bg-cyan-500 p-1 text-white"
            >
              {copyOff ? (
                <HiOutlineChatBubbleLeftRight className="size-3.5" />
              ) : (
                <TbCopyOff className="size-3.5" />
              )}
            </button>
            <button
              onClick={() => setPhoneOff(!phoneOff)}
              className="rounded-full bg-blue-600 p-1 text-white"
            >
              {phoneOff ? (
                <TbPhoneCall className="size-3.5" />
              ) : (
                <TbPhoneOff className="size-3.5" />
              )}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatsCard;
