"use client";
import React, { useEffect, useState } from "react";
import { FaPhone, FaRegSmileBeam } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { BiCheckDouble, BiTrash } from "react-icons/bi";
import { FaClock } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import Image from "next/image";
import { BsForward, BsThreeDotsVertical } from "react-icons/bs";
import { RiShareForwardFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { HiMiniSpeakerWave, HiMiniSpeakerXMark } from "react-icons/hi2";
import { MdCallEnd } from "react-icons/md";
import { IoMdMic, IoMdMicOff } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import CallDaillingModal from "@/components/ui/modal/CallDaillingModal";
import { chatData } from "@/constants/userData";
import ChatsCard from "@/components/ui/ChatComponents/ChatsCard";
import SendMessage from "@/components/Chat/SendMessage";

export default function Chat() {
  const [isManuOpen, setIsManuOpen] = useState(false);
  const [userModal, setUserModal] = useState(false);
  //data fatching
  const [usersData, setUsersData] = useState(chatData);
  const [statusUser, setStatusUser] = useState("");
  const [deleted, setIsDeleted] = useState(false);
  const [deletedme, setIsDeletedme] = useState(false);

  const [showDropManu, setShowDropManu] = useState(false);
  const [showDropManuCall, setShowDropManuCall] = useState(false);
  const [showForwartManu, setShowForwardManu] = useState(false);
  // call dialing state
  const [isDailed, setIsDailed] = useState(false);

  // mute status

  const [MuteStatus, setMuteStatus] = useState(false);
  const [SoundStatus, setSoundStatus] = useState(false);

  //status categorices user filtering
  const requestedUser = chatData.filter(
    (user: any) => user?.status === "request",
  );
  const forwardRequest = chatData.filter(
    (user: any) => user?.status === "forward-request",
  );
  const cancelUser = chatData.filter((user: any) => user?.status === "cancel");
  const blockUser = chatData.filter((user: any) => user?.status === "block");

  useEffect(() => {
    if (statusUser === "request") {
      setUsersData(requestedUser);
    } else if (statusUser === "cancel") {
      setUsersData(cancelUser);
    } else if (statusUser === "block") {
      setUsersData(blockUser);
    } else if (statusUser === "forward-request") {
      setUsersData(forwardRequest);
    } else if (statusUser === "all") {
      setUsersData(chatData);
    }
  }, [
    usersData,
    statusUser,
    requestedUser,
    cancelUser,
    blockUser,
    forwardRequest,
  ]);

  const handleShowDropManuCall = () => {
    setShowDropManuCall(!showDropManuCall);
    setShowDropManu(false);
  };

  const handlemuteStatus = () => {
    setMuteStatus(!MuteStatus);
  };
  const handleSoundStatus = () => {
    setSoundStatus(!SoundStatus);
  };

  const handleShowDropManu = () => {
    setShowDropManu(!showDropManu);
    setShowForwardManu(false);
  };

  const handleForwardClick = () => {
    setShowForwardManu(!showForwartManu);
  };

  const handledeleteme = () => {
    setIsDeletedme(true);
    setIsManuOpen(!isManuOpen);
  };

  const handledelete = () => {
    setIsDeleted(true);
    setIsManuOpen(!isManuOpen);
  };
  const [isManuOpen2, setIsManuOpen2] = useState(false);
  //  const [isOpenPopUp, setIsOpenPopUp]= useState([])

  // const toggleMenu = (index:any) => {
  //   if (isOpenPopUp.includes(index)) {
  //     setIsOpenPopUp(isOpenPopUp?.filter(item => item !==index))
  //   }else {
  //     setIsOpenPopUp([...isOpenPopUp, index])
  //   }
  //   // setIsManuOpen(!isManuOpen);
  // };
  const [isOpenPopUp, setIsOpenPopUp] = useState<number[]>([]);
  const toggleMenu = (index: any) => {
    if (isOpenPopUp.includes(index)) {
      setIsOpenPopUp(isOpenPopUp.filter((item) => item !== index));
    } else {
      setIsOpenPopUp([...isOpenPopUp, index]);
    }
    // setIsMenuOpen(!isMenuOpen);
  };
  const toggoleManu2 = () => {
    setIsManuOpen2(!isManuOpen2);
  };
  const [isSelected, setIsSelected] = React.useState(true);
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys],
  );

  const [activeChat, setActiveChat] = useState(0);
  //   console.log(activeChat);
  const chatChange = (index: number) => {
    setActiveChat(index);
  };
  return (
    <div className="grid w-full grid-cols-12">
      <div className="col-span-full h-[calc(100vh-88px)] w-full bg-cyan-500 dark:bg-black md:col-span-3 ">
        <div className="p-3">
          <span className="flex">
            <form className="mt-2 w-full">
              <label
                htmlFor="default-search"
                className="sr-only mb-2 text-sm font-medium text-slate-900 dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                  <svg
                    className="h-4 w-4 text-slate-500 dark:text-slate-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <div className="flex items-end justify-between">
                  <input
                    type="search"
                    id="default-search"
                    className="placeholdeer-slate-300 block h-8 w-full rounded-lg border border-slate-300 bg-slate-50 p-4 ps-10 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Search messages or users"
                  />
                </div>

                {/* <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
              </div>
            </form>
            <div className="relative mt-2">
              <button className="mx-1 cursor-pointer rounded-lg border border-solid  border-slate-300 bg-slate-200 px-4 py-2 text-blue-500 shadow-lg dark:bg-black dark:text-white">
                <FiSettings onClick={handleShowDropManuCall} />
              </button>
              {showDropManuCall && (
                <div className="absolute left-0 top-10 z-99  flex  items-start ">
                  <div className="w-[300px] space-y-1 rounded-lg bg-[#4ED0E7] p-3 text-white dark:bg-slate-900">
                    <div key="" className="flex  justify-between ">
                      <span className="mr-5 font-medium text-white dark:text-slate-300">
                        OutComming Call
                      </span>
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input
                          type="checkbox"
                          value=""
                          className="peer sr-only"
                        />
                        <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:border-slate-600 dark:bg-slate-700 dark:peer-focus:ring-green-800 rtl:peer-checked:after:-translate-x-full"></div>
                      </label>
                    </div>
                    <div key="" className="flex  justify-between ">
                      <span className=" mr-5 font-medium text-white dark:text-slate-300">
                        Incoming Call
                      </span>
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input
                          type="checkbox"
                          value=""
                          className="peer sr-only"
                        />
                        <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:border-slate-600 dark:bg-slate-700 dark:peer-focus:ring-green-800 rtl:peer-checked:after:-translate-x-full"></div>
                      </label>
                    </div>
                    <div key="" className="flex  justify-between ">
                      <span className=" mr-5 font-medium text-white dark:text-slate-300">
                        Notification
                      </span>
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input
                          type="checkbox"
                          value=""
                          className="peer sr-only"
                        />
                        <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:border-slate-600 dark:bg-slate-700 dark:peer-focus:ring-green-800 rtl:peer-checked:after:-translate-x-full"></div>
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </span>
          <div className=" relative text-white">
            <div
              className=" relative my-2 w-full cursor-pointer rounded-xl bg-slate-900 bg-opacity-60 p-2"
              onClick={() => setUserModal(!userModal)}
            >
              All people
            </div>
            {userModal && (
              <div className=" absolute -right-56 top-0 z-50  flex size-56 cursor-pointer flex-col gap-2 rounded-xl bg-[#0B576E] p-2 dark:bg-[#141C2E]">
                <div
                  onClick={() => [
                    setStatusUser("request"),
                    setUserModal(false),
                  ]}
                  className=" w-full rounded-xl bg-cyan-500 bg-opacity-90 p-2 dark:bg-[#475569]"
                >
                  Request help {requestedUser?.length}
                </div>
                <div
                  onClick={() => [
                    setStatusUser("forward-request"),
                    setUserModal(false),
                  ]}
                  className=" w-full rounded-xl bg-cyan-500 bg-opacity-90 p-2 dark:bg-[#475569]"
                >
                  Forward Request {forwardRequest?.length}
                </div>
                <div
                  onClick={() => [setStatusUser("cancel"), setUserModal(false)]}
                  className=" w-full rounded-xl bg-cyan-500 bg-opacity-90 p-2 dark:bg-[#475569]"
                >
                  Cancel users {cancelUser?.length}
                </div>
                <div
                  onClick={() => [setStatusUser("block"), setUserModal(false)]}
                  className=" w-full rounded-xl bg-cyan-500 bg-opacity-90 p-2 dark:bg-[#475569]"
                >
                  Blocked users {blockUser?.length}
                </div>
              </div>
            )}
            <div
              onClick={() => [setStatusUser("all"), setUserModal(false)]}
              className=" w-full rounded-xl bg-slate-900 bg-opacity-60 p-2"
            >
              All users
            </div>
          </div>
        </div>
        <div className=" h-[calc(100vh-250px)] w-full overflow-y-scroll ">
          {usersData.map((item: any, index: number) => {
            return (
              <ChatsCard
                key={index}
                item={item}
                index={index}
                onClick={chatChange}
              />
            );
          })}
        </div>
      </div>
      <div className="col-span-full h-[calc(100vh-88px)] w-full overflow-hidden md:col-span-9">
        {/* [#3949ac]  */}
        {/* bg-[#39b7ea] */}
        <div className="flex items-center justify-between  border-b  border-solid  border-slate-300 px-6 py-2 dark:bg-slate-500 dark:text-white">
          <div className="item-center flex justify-between ">
            <div className=" relative mr-3 size-12">
              <Image
                src={chatData[activeChat].img}
                alt=""
                fill
                className="rounded-[50%]  "
              />
            </div>
            <div>
              <h1>{chatData[activeChat].name}</h1>
              <h1 className="text-[11px] text-slate-500 dark:text-white">
                Active on Chat
              </h1>
            </div>
          </div>
          <div className="flex  gap-x-2">
            <button
              className="rounded-lg border border-solid border-slate-300 bg-slate-100  px-4 py-2 text-blue-500 shadow-lg dark:bg-black dark:text-white"
              onClick={() => setIsDailed(true)}
            >
              <FaPhone />
            </button>
            <button className="rounded-lg border border-solid border-slate-300 bg-slate-100  px-4 py-2 text-blue-500 shadow-lg dark:bg-black dark:text-white">
              <FaMinus />
            </button>
            <div className="relative flex  gap-x-2">
              <button
                className="cursor-pointer rounded-lg border border-solid border-slate-300  bg-slate-300 px-4 py-2 text-blue-500 shadow-lg dark:bg-slate-800 dark:text-white"
                onClick={handleShowDropManu}
              >
                <FiSettings />
              </button>

              {showDropManu && (
                <div className="absolute -left-60 top-10 flex items-start justify-end  ">
                  <div className="w-[300px] space-y-1 rounded-lg bg-[#4ED0E7] p-3 text-white">
                    <div key={""}>
                      <div
                        className="relative mb-1 flex justify-between"
                        onClick={handleForwardClick}
                      >
                        <button>Forward</button>
                        <span>
                          <RiShareForwardFill size={30} color="white" />
                        </span>
                        {showForwartManu && (
                          <div className="absolute -left-55 top-5 flex items-start justify-end  ">
                            <div className="text-balck min-w-[200px] rounded-lg bg-slate-400 p-2">
                              <ul className="space-y-3 rounded">
                                <li className="my-1 flex cursor-pointer items-center  justify-between gap-1">
                                  <div className="flex items-center">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-950 p-1 text-white">
                                      <CgProfile size={28} />
                                    </span>
                                    <p className="px-2">Mr Jack</p>
                                  </div>
                                  <button className="rounded-full bg-green-500 px-2 py-1">
                                    Send
                                  </button>
                                </li>
                                <li className="my-1 flex cursor-pointer items-center  justify-between gap-1">
                                  <div className="flex items-center">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-950 p-1 text-white">
                                      {" "}
                                      <CgProfile size={28} />
                                    </span>
                                    <p className="px-2">Mr Jack</p>
                                  </div>
                                  <button className="rounded-full bg-green-500 px-2 py-1">
                                    Send
                                  </button>
                                </li>
                                <li className="my-1 flex cursor-pointer items-center  justify-between gap-1">
                                  <div className="flex items-center">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-950 p-1 text-white">
                                      {" "}
                                      <CgProfile size={28} />
                                    </span>
                                    <p className="px-2">Mr Jack</p>
                                  </div>
                                  <button className="rounded-full bg-rose-500 px-2 py-1">
                                    unsend
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div key="text">
                      <span className="mr-5 font-medium text-white dark:text-slate-300">
                        Mute
                      </span>
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input
                          type="checkbox"
                          value=""
                          className="peer sr-only"
                        />
                        <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:border-slate-600 dark:bg-slate-700 dark:peer-focus:ring-green-800 rtl:peer-checked:after:-translate-x-full"></div>
                      </label>
                    </div>
                    <div key="number">
                      <span className=" mr-5 font-medium text-white dark:text-slate-300">
                        Block
                      </span>
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input
                          type="checkbox"
                          value=""
                          className="peer sr-only"
                        />
                        <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:border-slate-600 dark:bg-slate-700 dark:peer-focus:ring-green-800 rtl:peer-checked:after:-translate-x-full"></div>
                      </label>
                    </div>

                    <div key="iteration">
                      <div className="flex items-center justify-between gap-1">
                        <span>Clear All Data</span>{" "}
                        <span>
                          <BiTrash size={30} />{" "}
                        </span>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="h-[77%] w-full  overflow-y-scroll bg-[#9AC4CD] p-4   dark:bg-slate-500 dark:text-white ">
          {chatData[activeChat].messages?.map((item: any, index: number) => {
            return item.sender === "You" ? (
              <div
                className="flex items-center justify-end gap-x-2 "
                key={index}
              >
                <div className="flex gap-1">
                  <div className="relative inline-block text-left ">
                    <div>
                      <button
                        type="button"
                        id="option-manu"
                        className="roumnded-md  mt-2  inline-flex w-full  justify-center rounded-full p-1 font-extrabold"
                        onClick={toggoleManu2}
                      >
                        <BsThreeDotsVertical size={25} />
                      </button>
                      {isManuOpen2 && (
                        <div className="absolute right-0 z-10 mt-2 w-36 origin-top-right  rounded-md bg-white shadow-sm ring-1 ring-black ring-opacity-5">
                          <div
                            role="manu"
                            aria-orientation="vertical"
                            aria-labelledby="opetion-menu"
                            className="py-1"
                          >
                            <button
                              role="manuitem"
                              className="block  w-full px-4 py-2 text-left  text-sm text-slate-700"
                            >
                              Copy
                            </button>{" "}
                            <button
                              onClick={handledeleteme}
                              role="manuitem"
                              className="block w-full px-4 py-2 text-left  text-sm text-slate-700"
                            >
                              Delete
                            </button>{" "}
                          </div>{" "}
                        </div>
                      )}
                    </div>
                    <div className="mt-2"></div>
                  </div>
                  {deletedme ? (
                    " You delete this message"
                  ) : (
                    <h1 className="rounded-es-[2rem] rounded-se-[2rem] rounded-ss-[2rem] bg-blue-500  bg-opacity-35 p-4 text-[14px] text-white ">
                      {/* {console.log(chatData[activeChat].messages)} */}
                      {chatData[activeChat].messages[2].text}
                      <div className="mt-2  flex justify-between">
                        <div className="flex">
                          <FaClock color="skyBlue" className="mr-1" />
                          <span className="text-xs text-white">10:00 </span>
                        </div>

                        <div>
                          {" "}
                          <BiCheckDouble color="blue" />
                        </div>
                      </div>
                    </h1>
                  )}
                </div>
              </div>
            ) : (
              <div
                key={index}
                className="mb-12 flex items-center justify-start gap-x-2 text-[14px] text-slate-600 "
              >
                <Image
                  src={chatData[activeChat].img}
                  alt="img"
                  width={50}
                  height={50}
                  className="rounded-[50%]"
                />
                <div className="flex items-center gap-1">
                  {deleted ? (
                    <h1 className="w-full rounded-ee-[3rem]  rounded-se-[3rem] rounded-ss-[3rem] bg-[#5b3b6d] p-4 text-white ">
                      this message is deleted
                    </h1>
                  ) : (
                    <h1 className=" flex h-auto w-2/3 items-center  justify-center rounded-full  bg-white bg-opacity-10 p-4  text-white ">
                      {/* {console.log(chatData[activeChat].messages)} */}

                      {chatData[activeChat].messages[2].text}
                      <div className="flex ">
                        <FaClock color="skyBlue" className="" />
                        <span className="text-xs text-white">10:00</span>
                      </div>
                      <div>
                        {" "}
                        <BiCheckDouble color="green" />
                      </div>
                    </h1>
                  )}
                  <div className="relative inline-block text-left ">
                    <div>
                      <button
                        type="button"
                        id="option-manu"
                        className="roumnded-md inline-flex  w-full  justify-center rounded-full p-1 font-extrabold"
                        onClick={() => toggleMenu(index)}
                      >
                        <BsThreeDotsVertical size={20} />
                      </button>
                      {isOpenPopUp.includes(index) && (
                        <div className="absolute right-0 mt-2 w-36 origin-top-right  rounded-md bg-white shadow-sm ring-1 ring-black ring-opacity-5">
                          <div
                            role="manu"
                            aria-orientation="vertical"
                            aria-labelledby="opetion-menu"
                            className="py-1"
                          >
                            <button
                              role="manuitem"
                              className="block w-full px-4 py-2 text-left  text-sm text-slate-700"
                            >
                              Copy
                            </button>{" "}
                            <button
                              role="manuitem"
                              onClick={handledelete}
                              className="block w-full px-4 py-2 text-left  text-sm text-slate-700"
                            >
                              Delete
                            </button>{" "}
                          </div>{" "}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <SendMessage />
      </div>
      {/* call dailing modal */}
      <CallDaillingModal
        isVisible={isDailed}
        onClose={setIsDailed}
        className="mt-6 "
      >
        <div className=" flex h-72 w-64 flex-col items-center justify-between rounded p-2  text-white md:mt-3">
          <div className="mt-3 flex flex-col items-center gap-y-3">
            <div className="rounded-full">
              <FaRegCircleUser className=" text-6xl text-slate-500" />
            </div>
            <div className="mt-1 text-xl">David Evle</div>
            <div className="flex w-full items-center justify-center gap-2 text-sm font-semibold  ">
              <p>11 :</p> <p>39 :</p> <p>12</p>
            </div>
          </div>

          <div className="mt-4 flex justify-center gap-5 space-x-4  ">
            <button
              className="rounded-full bg-green-500 px-3.5 py-3.5 text-white"
              onClick={handlemuteStatus}
            >
              {MuteStatus ? <IoMdMicOff size={20} /> : <IoMdMic size={20} />}
            </button>
            <button
              className="rounded-full bg-rose-500 px-3.5 py-3.5 text-white"
              onClick={() => setIsDailed(false)}
            >
              <MdCallEnd size={20} />
            </button>
            <button
              className="rounded-full bg-yellow-500 px-3.5 py-3.5 text-white"
              onClick={handleSoundStatus}
            >
              {SoundStatus ? (
                <HiMiniSpeakerXMark size={20} />
              ) : (
                <HiMiniSpeakerWave size={20} />
              )}
            </button>
          </div>
        </div>
      </CallDaillingModal>
    </div>
  );
}

//      export default Chat;
