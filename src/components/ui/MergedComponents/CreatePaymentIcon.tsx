import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IoIosContact } from "react-icons/io";
import { RiDeleteBin6Line, RiDragDropFill } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { BiEdit, BiTrash } from "react-icons/bi";

import dynamic from "next/dynamic";
const CreatePaymentIcon: React.FC = () => {
  const [ContentValue, setContentValue] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);
  const [paymentIcon, setPaymentIcon] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [pageSize, setPageSize] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [showConfirmation, setShowConfirmatin] = useState(false);
  const [draggedRow, setDraggedRow] = useState(null);
  const editor = useRef(null);
  // delete recor hooks
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteIndexBlog, SetDeleteIndexBlog] = useState<any>(null);
  const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
  const handleClosePopUp = () => {
    setIsVisible(false);
  };

  const config = {
    height: 600,
  };

  const [bloagData, setBlogData] = useState([
    {
      title: "Large Society",
      blog: " Words combined with a handfull of model to generate which looks reasonable",
    },
    {
      title: "Large Society",
      blog: " Words combined with a handfull of model to generate which looks reasonable",
    },
    {
      title: "Large Society",
      blog: " Words combined with a handfull of model to generate which looks reasonable",
    },
    {
      title: "Large Society",
      blog: " Words combined with a handfull of model to generate which looks reasonable",
    },
    {
      title: "Large Society",
      blog: " Words combined with a handfull of model to generate which looks reasonable",
    },
    {
      title: "Large Society",
      blog: " Words combined with a handfull of model to generate which looks reasonable",
    },
  ]);

  const [content, setContent] = useState("");
  //   useEffect(() => {
  //     const handlePerformance = async () => {
  //       const size = (performance.getEntriesByType("resource")).reduce(
  //         (total, resource) => total + resource.transferSize,
  //         0
  //       );
  //       setPageSize(size);
  //     };
  //   }, []);
  const inputStyle = "p-2 border w-full rounded-md border-blue-400";

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsVisible(false);
    setIsFormSubmitted(true);
  };
  const handleConfirmation = (confirmed: boolean) => {
    if (confirmed) {
      setIsChecked(!isChecked);
    }
    setShowConfirmatin(false);
  };

  const [activeBlogIndex, setActiveBlogIndex] = useState([]);

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: any,
  ) => {
    setActiveBlogIndex(index === activeBlogIndex ? null : index);
    if (isChecked) {
      setIsChecked(!isChecked);
    } else {
      setShowConfirmatin(true);
    }
  };

  // Delete Data handle code

  const handleRemoveRowFromTable = (index: number) => {
    setShowDeleteConfirmation(true);
    SetDeleteIndexBlog(index);
  };
  const confirmDelete = () => {
    setBlogData((prevData) => {
      const newData = [...prevData];
      newData.splice(deleteIndexBlog, 1);
      return newData;
    });
    setShowDeleteConfirmation(false);
  };

  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
  };
  // Delete Data handle code

  // drage blog box funtinality

  const handleDrageStart = (e: React.DragEvent, index: any) => {
    setDraggedRow(index);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", index);
  };

  const handleDragOver = (e: React.DragEvent, index: any) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, index: any) => {
    e.preventDefault();
    const draggedRowIndex = Number(e.dataTransfer.getData("text/html"));
    const newTableData = [...bloagData];
    const draggedRowData = newTableData[draggedRowIndex];

    newTableData.splice(draggedRowIndex, 1);
    newTableData.splice(index, 0, draggedRowData);
    setBlogData(newTableData);
    setDraggedRow(null);
  };

  // for input taking file code
  const FileInputRef = useRef<HTMLInputElement>(null);
  const FileInputRef2 = useRef<HTMLInputElement>(null);
  const [selectInputFiles, setSlectInputFile] = useState<any>();
  const [selectInputFilesBaner, setSlectInputFileBaner] = useState<any>([]);
  const [confirmationPopUp, setConfirmationPopUp] = useState(false);
  const [confirmationPopUpBaner, setConfirmationPopUpBaner] = useState(false);
  const [uploadSucces, setUploadSuccess] = useState(false);
  const [uploadedFile, setUploadedFiles] = useState([]);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const selectedFiles = files as FileList;
    const file = selectedFiles[0];
    if (file) {
      setSlectInputFile(file);
    }
  };
  const handleFileChangeBaner = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const file = files as FileList;
    if (file && file.length > 0) {
      // setSlectInputFileBaner(Array.from(file));
    }
  };
  const handleConfirmationPopUp = () => {
    setConfirmationPopUp(true);
  };
  const handleConfirmationPopUpBaner = () => {
    setConfirmationPopUpBaner(true);
  };

  const handleCancel = () => {
    setConfirmationPopUp(false);
  };
  const handleCancelBaner = () => {
    setConfirmationPopUpBaner(false);
  };

  const handleEditClick = () => {
    FileInputRef.current?.click();
  };
  const handleEditClickBaner = () => {
    FileInputRef2.current?.click();
  };

  const handleDeleteFile = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSlectInputFile(null); //this is for now temporary use when data store in db this ilne
    setConfirmationPopUp(false);
  };
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [confirmationPopUpIUplod, setConfirmationPopUpate] = useState(false);

  const handleDeleteFileBaner = (index: any) => {
    setDeleteIndex(index); //this is for now temporary use when data store in db this ilne
    setConfirmationPopUpate(true);
  };
  // const handleDeleteFileBaner = () => {
  //   setDeleteIndex(null);

  // };

  const handleDeleteUplod = () => {
    //   const updatedFiles = [...uploadedFile];
    //   updatedFiles.splice(deleteIndex, 1);
    //   setUploadedFiles(updatedFiles);
    //   setConfirmationPopUpate(false);
    //   setDeleteIndex(null);
  };

  const handleUplodCancel = () => {
    setConfirmationPopUpate(false);
  };

  const handleUploadLogo = () => {
    setSlectInputFile(null);
    setUploadSuccess(true);

    setTimeout(() => {
      setUploadSuccess(false);
    }, 3000);
  };
  const handleUploadClick = () => {
    //   setUploadedFiles([...uploadedFile, ...selectInputFilesBaner]);
    //   setSlectInputFileBaner([]);
    //   setUploadSuccess(true);

    setTimeout(() => {
      setUploadSuccess(false);
    }, 1000);
  };

  // for input taking file code

  const buttonStyle =
    "bg-indigo-600 p-2 w-40 text-lg font-semibold text-white mt-4  rounded-md border border-indigo-500 flex items-center justify-center gap-2 hover:bg-indigo-100";

  return (
    <div>
      {/* <div className="">
        <Popup trigger={<button>show page size</button>} modal>
          <h1>page size:{pageSize}</h1>
        </Popup>
      </div> */}
      <div className="m-1  flex w-full place-items-end justify-center">
        <div>
          <p className="text-center text-2xl font-bold">Service</p>
          <div className="flex w-full  justify-between">
            <div className="... flex  justify-center">
              <div className="... w-48 flex-none  rounded-2xl"></div>
              <div className="...  grow  text-center">
                <div className="mb-3 ">
                  <div className="relative mb-4 flex w-full flex-wrap items-stretch ">
                    <input
                      type="search"
                      className=" relative m-0 block min-w-0 flex-auto  rounded-full border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="button-addon2"
                    />

                    <span
                      className=" input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                      id="basic-addon2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-36">
              <button
                className="rounded-sm border border-indigo-500 bg-white p-1 hover:bg-indigo-100"
                onClick={() => setIsVisible(true)}
              >
                creation blog +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-20 grid grid-cols-6 place-content-start gap-1 px-3 pl-20 pr-20 ">
          {bloagData.map((item, index) => (
            <div
              draggable
              key={index}
              className={`text-center font-medium ${
                index === draggedRow ? "bg-gray-100" : ""
              }`}
            >
              <div className="flex flex-col gap-1 px-2  ">
                <div className="flex justify-end gap-1">
                  {/* Togale tbn */}
                  <label className="flex cursor-pointer select-none items-center">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        // onChange={()=>handleCheckboxChange(index)}
                        className="sr-only"
                      />
                      <div
                        className={`box block h-8 w-14 rounded-full ${
                          isChecked ? "bg-green-500" : "bg-gray-200"
                        }`}
                      ></div>
                      <div
                        className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center  rounded-full bg-white  transition ${
                          isChecked ? "translate-x-full" : ""
                        }`}
                      ></div>
                    </div>
                  </label>
                  {/* Togale btn */}

                  <RiDragDropFill
                    className="cursor-pointer text-blue-500"
                    size={24}
                    onDragStart={(e) => handleDrageStart(e, index)}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDrop={(e) => handleDrop(e, index)}
                    // onClick={() => handleMoveup(index)}
                  />
                  <AiOutlineEdit
                    className="h-5 w-5 cursor-pointer text-green-500"
                    // onClick={() => handleUpdate(index)}
                    onClick={() => setIsVisible(true)}
                  />
                  <RiDeleteBin6Line
                    onClick={() => handleRemoveRowFromTable(index)}
                    className="text-red-500 h-5 w-5 cursor-pointer"
                  />
                </div>

                <div className="Box1 bg-gradient-to-t from-blue-950 to-violet-900 p-2 ">
                  <div className="... flex flex-col items-center justify-center p-2 px-3">
                    <div className="my-3 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-yellow-700 to-pink-600">
                      <IoIosContact size={33} color="white" />
                    </div>
                    <div className="my-1 text-center  text-white">
                      <b>{item.title}</b>
                    </div>
                    <div className="ml-2 mt-3 text-center text-sm text-white">
                      {item.blog}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isFormSubmitted && (
        <div className="pt-6">
          <ul>
            <div className="border-gray-800 w-96 border px-8 py-4">
              {/* {paymentIcon &&
                typeof paymentIcon === "object" &&
                paymentIcon instanceof File && (
                  <img
                    src={URL.createObjectURL(paymentIcon)}
                    alt=""
                    style={{ maxWidth: "100%" }}
                  />
                )} */}
              <button className="mt-3 bg-green-600 px-4 py-1.5 text-white">
                Edit
              </button>
            </div>
          </ul>
        </div>
      )}
      {isVisible && (
        <div className="fixed  right-16 top-0 m-3 mx-auto flex h-full w-fit items-start  justify-center overflow-scroll rounded-md bg-white pt-6 ">
          <div className="relative  -mt-7 h-[0px] w-fit   px-1">
            <div className="  ml-[990px] mt-3  ">
              <button
                className=" bg-red-700 hover:bg-red-900 h-12 w-12 place-self-end      rounded-full p-2  text-sm text-white"
                onClick={handleClosePopUp}
              >
                <span className="text-center text-lg ">X</span>
              </button>
            </div>
            {/* <PhotoVideoUpdate/> */}
            <div className="mx-auto w-1/2 ">
              <input
                type="file"
                name="banner"
                className="  hidden"
                onChange={handleFileChangeBaner}
                ref={FileInputRef2}
              />
              <div className="flex items-center gap-2 space-x-4">
                <button
                  className="rounded bg-blue-500 px-4 py-2 text-white"
                  onClick={() => FileInputRef2.current?.click()}
                >
                  Select Service Icon{" "}
                </button>
                {selectInputFilesBaner.length > 0 && (
                  <div className="m-2 mt-4 flex w-[250px] items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <div>
                        {selectInputFilesBaner.map((file: any, index: any) => (
                          <div key={index} className="flex space-x-1">
                            <Image
                              src={URL.createObjectURL(file)}
                              alt="Baner"
                              className="mr-3 h-20 w-20 rounded"
                              width={20}
                              height={20}
                            />
                            <button
                              className="h-fit rounded bg-green-500 px-2 py-2 text-white"
                              onClick={handleEditClickBaner}
                            >
                              <BiEdit size={30} />
                            </button>
                            <button
                              className="bg-red-500 h-fit rounded px-2 py-2 text-white"
                              onClick={handleConfirmationPopUpBaner}
                            >
                              <BiTrash size={30} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* <div className="text-medium px-2 py-2 mr-3 w-40 ">
                {selectInputFiles.name}
              </div> */}
                  </div>
                )}
              </div>
            </div>
            <button
              className={`${buttonStyle} ml-auto mr-3`}
              onClick={handleUploadClick}
            >
              submit
            </button>
            {/* </div> */}
            <form>
              {/* {card2  && <form > */}
              <div className="space-y-4 p-5">
                <div className="mx-auto mb-5 max-w-lg space-y-4">
                  {/* <span>
                    <label className="text-sm" htmlFor="">
                      Upload card icon
                    </label>{" "}
                    <br />
                    <input
                      type="file"
                      className={inputStyle}
                      name="cardTwoIcon"
                    />
                  </span> */}
                  <span>
                    <label className="text-sm" htmlFor="">
                      Service Title
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      className={inputStyle}
                      name="cardTwoTitle"
                    />
                  </span>
                  <span>
                    <label className="text-sm" htmlFor="">
                      Service Tag
                    </label>{" "}
                    <br />
                    <textarea
                      rows={3}
                      className={inputStyle}
                      name="cardTwoTag"
                    ></textarea>
                  </span>
                </div>

                <span className=" mt-2 h-28 w-40">
                  <label className="text-md py-5">Service Description</label>

                  <JoditEditor
                    ref={editor}
                    value={content}
                    config={{
                      height: 600,
                    }}
                    onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                  />
                </span>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Confimattion toggle Pop-up */}
      {showConfirmation && (
        <div className="bg-gray-700 fixed left-0 top-0 flex h-full w-full items-center justify-center bg-opacity-75">
          <div className="rounded-md bg-white p-4">
            <p>Arue you sure to tooggle the checkbox?</p>
            <div className="mt-4 flex justify-end">
              <button
                className="mr-2 rounded-md bg-blue-500 px-4 py-2 text-white"
                onClick={() => handleConfirmation(true)}
              >
                Yes
              </button>
              <button
                className="mr-2 rounded-md bg-blue-500 px-4 py-2 text-white"
                onClick={() => handleConfirmation(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
      {/* confirmation Delete Record  pop up  */}
      {showDeleteConfirmation && (
        <div className="bg-gray-700 fixed left-0 top-0 flex h-full w-full items-center justify-center bg-opacity-75">
          <div className="rounded-md bg-white p-4">
            <p>Arue you sure Want to delete this record?</p>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-red-500 mr-2 rounded-md px-4 py-2 text-white"
                onClick={confirmDelete}
              >
                Yes
              </button>
              <button
                className="bg-gray-500 mr-2 rounded-md px-4 py-2 text-white"
                onClick={cancelDelete}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bannar  Confarmatin MOdal of delete uplod icon */}
      {confirmationPopUpIUplod && (
        <div className="bg-gray-700 fixed left-0 top-0 flex h-full w-full items-center justify-center bg-opacity-75">
          <div className="rounded-md bg-white p-4">
            <p>Arue you sure to Delte this Record?</p>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-red-500 mr-2 rounded-md px-4 py-2 text-white"
                onClick={handleDeleteUplod}
              >
                Confirm
              </button>
              <button
                className="bg-gray-400 mr-2 rounded-md px-4 py-2 text-white"
                onClick={handleUplodCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Bannar  Confarmatin MOdal */}
      {confirmationPopUpBaner && (
        <div className="bg-gray-700 fixed left-0 top-0 flex h-full w-full items-center justify-center bg-opacity-75">
          <div className="rounded-md bg-white p-4">
            <p>Arue you sure to Delte this Record?</p>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-red-500 mr-2 rounded-md px-4 py-2 text-white"
                onClick={handleDeleteFileBaner}
              >
                Confirm
              </button>
              <button
                className="bg-gray-400 mr-2 rounded-md px-4 py-2 text-white"
                onClick={handleCancelBaner}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {/*  LOgo Confarmatin MOdal */}
      {confirmationPopUp && (
        <div className="bg-gray-700 fixed left-0 top-0 flex h-full w-full items-center justify-center bg-opacity-75">
          <div className="rounded-md bg-white p-4">
            <p>Arue you sure to Delte this Record?</p>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-red-500 mr-2 rounded-md px-4 py-2 text-white"
                onClick={handleDeleteFile}
              >
                Confirm
              </button>
              <button
                className="bg-gray-400 mr-2 rounded-md px-4 py-2 text-white"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Data upload pop up */}

      {uploadSucces && (
        <div className="bg-gray-700 fixed left-0 top-0 flex h-full w-full items-center justify-center bg-opacity-75">
          <div className="rounded-md bg-gradient-to-tr from-yellow-200 to-pink-200   p-4">
            <p className="text-2xl font-bold text-green-500 ">
              {" "}
              Uploaded Successfully
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePaymentIcon;
