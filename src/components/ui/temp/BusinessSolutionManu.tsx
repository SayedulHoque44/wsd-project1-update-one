import React, { useRef, useState } from "react";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
import { FiDelete, FiSave } from "react-icons/fi";
import { BiTrash } from "react-icons/bi";
import dynamic from "next/dynamic";
// import "jodit/build/jodit.min.css";
const BusinessSolutionManu: React.FC = () => {
  const [content, setContent] = useState<string>("");
  const editor = useRef(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [dataList, setDataList] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [showConfirmation, setShowConfirmatin] = useState<boolean>(false);
  const [deleteIndex, setDeleteIndex] = useState<null | number>(null);
  const [uploadSucces, setUploadSuccess] = useState<boolean>(false);
  const handleSuccesPopup = () => {
    setUploadSuccess(true);

    setTimeout(() => {
      setUploadSuccess(false);
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddData = () => {
    if (inputValue.trim() !== "") {
      setDataList([...dataList, inputValue]);
      setInputValue("");
    }
  };

  const handleConfirmation = (confirmed: boolean) => {
    if (confirmed) {
      setIsChecked(!isChecked);
    }
    setShowConfirmatin(false);
  };

  const handleCheckboxChange = () => {
    if (isChecked) {
      setIsChecked(!isChecked);
    } else {
      setShowConfirmatin(true);
    }
  };

  const handleDelete = (index: number) => {
    setDeleteIndex(index);
  };
  const confirmationDelete = () => {
    if (deleteIndex !== null) {
      setDataList((prevDataList) =>
        prevDataList.filter((_, index) => index !== deleteIndex),
      );
      setDeleteIndex(null);
    }
  };

  const cancelDelete = () => {
    setDeleteIndex(null);
  };
  return (
    <div className="flex  items-start gap-2 ">
      <div className=" mt-5 ">
        <div className="mt-6 flex">
          <input
            name=""
            id=""
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Topic Name"
            className="px -4 border-2 py-1 "
          />{" "}
          <button className="bg-gray-300 px-4 py-1" onClick={handleAddData}>
            Add
          </button>
        </div>

        <div className="mt-6">
          {dataList.map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 mb-2 flex justify-between rounded p-2"
            >
              {item}
              <span className="flex gap-1">
                <button
                  className="bg-red-500 rounded p-1"
                  onClick={() => handleDelete(index)}
                >
                  <BiTrash size={25} />
                </button>
                <label className="flex cursor-pointer select-none items-center">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      className="sr-only"
                    />
                    <div
                      className={`box block h-8 w-14 rounded-full ${
                        isChecked ? "bg-green-500" : "bg-gray-300"
                      }`}
                    ></div>
                    <div
                      className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center  rounded-full bg-white  transition ${
                        isChecked ? "translate-x-full" : ""
                      }`}
                    ></div>
                  </div>
                </label>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className=" w-[900px] ">
        <div className="py-8">
          <h2 className="my-4 text-center text-2xl font-bold">
            Best it & Business solution
          </h2>
          <form action="" className="relative">
            <div className="absolute -top-10 right-5 flex items-center gap-3">
              {/* <FaEdit className="text-green-600" size={36} /> */}
              <FiSave
                type="submit"
                className="cursor-pointer text-blue-600"
                size={36}
                onClick={handleSuccesPopup}
              />
            </div>
            <span>
              <label className="text-md py-5 ">Description</label>
              <JoditEditor
                ref={editor}
                value={content}
                config={{
                  height: 600,
                }}
                onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              />
            </span>
          </form>
        </div>
      </div>
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

      {deleteIndex !== null && (
        <div className="bg-gray-700 fixed left-0 top-0 flex h-full w-full items-center justify-center bg-opacity-75">
          <div className="rounded-md bg-white p-4">
            <p>Arue you sure to delete this item?</p>
            <div className="mt-4 flex justify-end">
              <button
                className="mr-2 rounded-md bg-blue-500 px-4 py-2 text-white"
                onClick={confirmationDelete}
              >
                Yes
              </button>
              <button
                className="mr-2 rounded-md bg-blue-500 px-4 py-2 text-white"
                onClick={cancelDelete}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* succes pop */}
      {uploadSucces && (
        <div className="bg-gray-700 fixed left-0 top-0 flex h-full w-full items-center justify-center bg-opacity-75">
          <div className="rounded-md bg-white p-4">
            <p className="px-20 py-20 text-green-500">Successfully Save</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessSolutionManu;
