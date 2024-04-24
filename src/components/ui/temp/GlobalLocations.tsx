import React, { useState, useRef } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line, RiDragDropFill } from "react-icons/ri";
import { MdCloudUpload } from "react-icons/md";
import { GlobState } from "../MergedComponents/CreateGlobalLocations";
interface GlobProps{
  data:GlobState[]
  setGlobalLocations:React.Dispatch<React.SetStateAction<GlobState[]>>;
  onEditClick:(index:number)=>void
}
const GlobalLocations:React.FC<GlobProps> = ({ data, setGlobalLocations, onEditClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const [isDeleteItem, setIsDeleteItems] = useState(false);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const [isChecked, setIsChecked] = useState(false);
  const [isMessageSaved, setIsMessageSaved] = useState(false);
  const [showConfirmation, setShowConfirmatin] = useState(false);
  const [showRemoveConfirmation, setShowRemoveConfirmation] = useState(false);
  const [draggedRow, setDraggedRow] = useState<number| null>(null);
// update hooks
const [showUpdateConfirmation, setShowUpdateConfirmation]=useState(false)
const [isUpdateMode, setIsupdateMode]= useState(false)
const [updateIndex, setUpdateIndex]= useState<any>(null);
// delete recor hooks
const [showDeleteConfirmation, setShowDeleteConfirmation]= useState(false);
const [deleteIndex, setDeleteIndex]= useState<any>()

  const handleDrageStart = (e: React.DragEvent<HTMLTableRowElement>, index:any) => {
    setDraggedRow(index);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", index);
  };

  const handleDragOver = (e: React.DragEvent<HTMLTableRowElement>, index: number) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLTableRowElement>, index: number) => {
    e.preventDefault();
    const draggedRowIndex = Number(e.dataTransfer.getData("text/html"));
    const newTableData = [...tableData];
    const draggedRowData = newTableData[draggedRowIndex];

    newTableData.splice(draggedRowIndex, 1);
    newTableData.splice(index, 0, draggedRowData);
    setTableData(newTableData);
    setDraggedRow(null);
  };

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState({
    feild: "",
    feild2: "",
    feild3: "",
    image:"",
  });
  const [tableData, setTableData] = useState<any>([]);

  const handleConfirmation = (confirmed:Boolean) => {
    if (confirmed) {
      setIsChecked(!isChecked);
    }
    setShowConfirmatin(false);
  };

  const handleCheckboxChange = ():void => {
    if (isChecked) {
      setIsChecked(!isChecked);
    } else {
      setShowConfirmatin(true);
    }
  };

  const paginate = (pageNumber:number) => {
    setCurrentPage(pageNumber);
  };

  const handleDeleteClick = (itemId:number) => {
    setIsDeleteItems(true);
    setDeleteIndex(itemId);
  };

  const handleDeleteConfirm = () => {
    setGlobalLocations((prevGlobalLocations:any) =>
      prevGlobalLocations.filter((item:any) => item.id !== deleteIndex)
    );
    setIsDeleteItems(false);
  };

  const handleImageChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const selectedFiles = files as FileList;
    const imageFile = selectedFiles?.[0];
    if (imageFile) {
      setInputValue((prevValues) => ({
        ...prevValues,
        image: URL.createObjectURL(imageFile),
      }));
    }
  };

  const handleInputChange = (feildName:string, value:string) => {
    // const mexLength = feildName ==='feild1' ? 12 : 14;

    // const truncatedValue = value.slice(0, mexLength);

    setInputValue((prevValues) => ({
      ...prevValues,
      [feildName]: value,
    }));
  };

  const handleButtonClickInput = () => {
    if(isUpdateMode){
      handleUpdateSubmit();
    } else{
      setTableData((prevData:any) => [...prevData, { ...inputValue }]);
    // for Clear input values
    setInputValue({
      feild: "",
      feild2: "",
      feild3: "",
      image: '',
    });
    }
    
  
  };

  const handleButtonImge = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveImage = () => {
    setInputValue((prevValues:any) => ({
      ...prevValues,
      image: null,
    }));
    setShowRemoveConfirmation(false);
  };

  const handleRemoveConfirmation = () => {
    setShowRemoveConfirmation(true);
  };


// updateData
const handleUpdate=(index:number)=>{


setInputValue(tableData[index]);
setIsupdateMode(true);
setUpdateIndex(index);
}

const handleUpdateSubmit = ()=>{
  setShowUpdateConfirmation(true)
}
const confirmUpdate = ()=>{
  setTableData((prevData:any)=>{
    const newData= [...prevData];
    newData[updateIndex]={...inputValue}
    return newData;
  });
setInputValue({
   feild: "",
  feild2: "",
  feild3: "",
  image: '',
});
setIsupdateMode(false);
setUpdateIndex(null);
setShowUpdateConfirmation(false)

}

const cancelUpdate = ()=>{
  setShowUpdateConfirmation(false)
}

// updateData

// Delete Data handle code

const handleRemoveRowFromTable = (index:number)=>{
  setShowDeleteConfirmation(true);
  setDeleteIndex(index)
}
const confirmDelete = ()=>{
  setTableData((prevData:any)=>{
    const newData= [...prevData];
    newData.splice(deleteIndex,1)
    return newData
  });
  setShowDeleteConfirmation(false)
}

const cancelDelete = ()=>{
  setShowDeleteConfirmation(false)
}
// Delete Data handle code

  return (
    <div className="my-4">
      <table className="w-full border-collapse border border-gray-300 rounded-md">
        <caption className="text-xl font-bold text-center m-8">
          Global Locations 
        </caption>
        <thead className=" font-bold">
          <tr className="bg-gray-200 text-black w-14">
            <th className="border border-gray-300 p-2 text-sm">SL</th>
            <th className="border border-gray-300 p-2 text-sm">Flag</th>
            <th className="border border-gray-300 p-2 text-sm">Country Name</th>
            <th className="border border-gray-300 p-2 text-sm">
              Office Address
            </th>
            <th className="border border-gray-300 p-2 text-sm">
              Contact Details
            </th>
            <th className="border border-gray-300 p-2 text-sm">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr draggable className={`text-center font-medium `}>
            <td className="border border-gray-300 text-sm"></td>
            <label htmlFor="">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
                style={{ display: "none" }}
              />
            </label>
            {inputValue.image && (
              <div className="relative inline-block">
                <img
                  src={inputValue.image}
                  alt="selected"
                  style={{ maxWidth: "100px" }}
                />
                <span
                  onClick={handleRemoveConfirmation}
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    cursor: "pointer",
                  }}
                >
                  x
                </span>
              </div>
            )}

            {/* confirmation pop up  */}
            {showRemoveConfirmation && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-75">
                <div className="bg-white p-4 rounded-md">
                  <p>Arue you sure Want to remove the image?</p>
                  <div className="mt-4 flex justify-end">
                    <button
                      className="px-4 py-2 mr-2 bg-blue-500 text-white rounded-md"
                      onClick={handleRemoveImage}
                    >
                      Yes
                    </button>
                    <button
                      className="px-4 py-2 mr-2 bg-blue-500 text-white rounded-md"
                      onClick={() => setShowRemoveConfirmation(false)}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            )}
            {/* confirmation pop up  */}

            <td
              className="border mt-2 border-gray-300 p-2 text-sm flex justify-center items-center gap-1 bg-yellow-500 hover:bg-yellow-400 cursor-default rounded-full font-bold w-[170px] mx-1"
              onClick={handleButtonImge}
            >
              <MdCloudUpload />
              <span>File Upload</span>
            </td>
            <td className="border border-gray-300 p-2 text-sm ">
              <input
                type="text"
                value={inputValue.feild}
                onChange={(e) => handleInputChange("feild", e.target.value)}
                className="border-none h-8   "
                placeholder="Enter Contry Name...."
              />
            </td>
            <td className="border border-gray-300 p-2 text-sm">
              <input
                type="text"
                value={inputValue.feild2}
                onChange={(e) => handleInputChange("feild2", e.target.value)}
                className="border-none h-8 "
                placeholder="Enter Office Address...."
              />
            </td>
            <td className="border border-gray-300 p-2 text-sm">
              <input
                type="text"
                value={inputValue.feild3}
                onChange={(e) => handleInputChange("feild3", e.target.value)}
                className="border-none h-8 hover:border-none focus:border-none "
                placeholder="Enter Contact Detalis..."
              />
            </td>
            <td className=" border border-gray-300  p-2 text-sm ">
              <button
                className="border pt-2 border-gray-300 p-2 text-lg  flex justify-center items-center gap-1 bg-orange-500 px-8 py-2 hover:bg-orange-600 cursor-default rounded-full font-bold w-40  "
                onClick={handleButtonClickInput}
              >
                {isUpdateMode ? <div > Update </div> : <div > Add</div>}
              </button>
            </td>
          </tr>
          {tableData.map((item:any, index:number) => (
            <tr
              draggable
              key={index}
              // className={`text-center font-medium ${
              //   (index % 2 === 0 ? "bg-gray-50" : "bg-white",
              //   index === draggedRow ? "bg-gray-100" : "")
              // }`}
              onDragStart={(e) => handleDrageStart(e, index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDrop={(e) => handleDrop(e, index)}
            >
              <td className="border border-gray-300 text-sm  ">
                {index + 1 + indexOfFirstItem}
              </td>

              <td className="border border-gray-300 p-2 text-sm  w-5 ">
                <div className="flex items-center justify-center gap-2">
                  <img src={item.image} alt="" className="w-10 h-10" />
                </div>
              </td>
              <td className="border border-gray-300 p-2 text-sm  text-black w-[10px]  ">
                {item.feild}
              </td>
              <td className="border border-gray-300 p-2 text-sm  text-black w-[10px]  ">
                <div className="flex flex-wrap w-20 overflow-ellipsis ">
                  {item.feild2}
                </div>
              </td>
              <td className="border border-gray-300 p-2 text-sm  text-black  w-10  overflow-ellipsis ">
                {item.feild3}
              </td>
              <td className=" border border-gray-300  p-2 text-sm  overflow-ellipsis">
                <div className="flex items-center justify-center gap-4">
                  {/* Togale tbn */}
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
                  {/* Confimattion Pop-up */}
                  {showConfirmation && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-75">
                      <div className="bg-white p-4 rounded-md">
                        <p>Arue you sure to tooggle the checkbox?</p>
                        <div className="mt-4 flex justify-end">
                          <button
                            className="px-4 py-2 mr-2 bg-blue-500 text-white rounded-md"
                            onClick={() => handleConfirmation(true)}
                          >
                            Yes
                          </button>
                          <button
                            className="px-4 py-2 mr-2 bg-blue-500 text-white rounded-md"
                            onClick={() => handleConfirmation(false)}
                          >
                            No
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Confimattion Pop-up */}

                  <RiDragDropFill
                    className="text-blue-500"
                    size={30}
                    // onClick={() => handleMoveup(index)}
                  />

                  <AiOutlineEdit
                    className="w-5 h-5 text-green-500 cursor-pointer"
                    onClick={() => handleUpdate(index)}
                  />
                  <RiDeleteBin6Line
                    onClick={() => handleRemoveRowFromTable(index)}
                    className="w-5 h-5 text-red-500 cursor-pointer"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <ul className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index}>
              <button
                className={`${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-700"
                } px-3 py-1 rounded-full`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>

        {/* confirmation update pop up  */}
        {showUpdateConfirmation && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-75">
                <div className="bg-white p-4 rounded-md">
                  <p>Arue you sure Want to  update the data</p>
                  <div className="mt-4 flex justify-end">
                    <button
                      className="px-4 py-2 mr-2 bg-green-500 text-white rounded-md"
                      onClick={confirmUpdate}
                    >
                      Yes
                    </button>
                    <button
                      className="px-4 py-2 mr-2 bg-gray-500 text-white rounded-md"
                      onClick={cancelUpdate}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            )}
            {/* confirmation update pop up  */}
        {/* confirmation Delete Record  pop up  */}
        {showDeleteConfirmation && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-75">
                <div className="bg-white p-4 rounded-md">
                  <p>Arue you sure Want to  delete this record?</p>
                  <div className="mt-4 flex justify-end">
                    <button
                      className="px-4 py-2 mr-2 bg-red-500 text-white rounded-md"
                      onClick={confirmDelete}
                    >
                      Yes
                    </button>
                    <button
                      className="px-4 py-2 mr-2 bg-gray-500 text-white rounded-md"
                      onClick={cancelDelete}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            )}
            {/* confirmation  Delete Record pop up  */}
    </div>
  );
};

export default GlobalLocations;