import React,{useRef, useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import Image from "next/image";
import { FiSave } from "react-icons/fi";
import Header from "@/components/common/Header";
import Plan from "./Plan";
const OfficeAddress:React.FC = () => {
    const FileInputRef = useRef<HTMLInputElement>(null);
  const FileInputRef2 = useRef<HTMLInputElement>(null);
  const [selectInputFiles, setSlectInputFile] = useState<string[] | null>([]);
  const [selectInputFilesBaner, setSlectInputFileBaner] = useState<any>([]);
  const [confirmationPopUp, setConfirmationPopUp] = useState(false);
  const [confirmationPopUpBaner, setConfirmationPopUpBaner] = useState(false);
  const [uploadSucces, setUploadSuccess] = useState(false);
  const [uploadedFile, setUploadedFiles] = useState([]);
  const [uploadFilesLogo, setUploadFilesLogo] = useState<any>([]);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         const imageUrl = event.target.result;
//         // Use imageUrl as needed (e.g., display it in an <img> tag)
//       };
//       reader.readAsDataURL(file);
//     }
//   };

  const handleFileChangeBaner = (e:React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (file && file.length > 0) {
      setSlectInputFileBaner(Array.from(file));
    }
  };



  const handleConfirmationPopUp = () => {
    setConfirmationPopUp(true);
  };
  const handleConfirmationPopUpBaner = () => {
    setConfirmationPopUpBaner(true);
  };

  const handleConfirmationPopUpBanerIcon = () => {
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

  const handleDeleteFile = (e:React.MouseEvent<HTMLButtonElement>) => {
    setSlectInputFile(null); //this is for now temporary use when data store in db this ilne
    setConfirmationPopUp(false);
  };

  const [deleteIndex, setDeleteIndex] = useState<any>(null);
  const [deleteIndexIcon, setDeleteIndexIcon] = useState(null);
  const [confirmationPopUpIUplod, setConfirmationPopUpate] = useState(false);
  const [confirmationPopUpIcon, setConfirmationPopIcon] = useState(false);

  const handleDeleteFileClck = (index:number) => {
    setDeleteIndex(index); //this is for now temporary use when data store in db this ilne
    setConfirmationPopUpate(true);
  };

  const handleDeleteFileBaner = () => {
    setDeleteIndex(null);
  };
  const [updatedFileIcons, setUpdatedFileIcon] = useState<any>([]);
  const [ConfirmationPopIconPop, setConfirmationPopIconPop] = useState(false);
  const handleDeleteIcon = () => {
    const updatedFiles = [...updatedFileIcons];
    updatedFileIcons.splice(deleteIndexIcon, 1);
    setUpdatedFileIcon(updatedFiles);
    setConfirmationPopIcon(false);
    setDeleteIndexIcon(null);
  };
  const handleDeleteUplod = () => {
    const updatedFiles = [...uploadedFile];
    updatedFiles.splice(deleteIndex, 1);
    setUploadedFiles(updatedFiles);
    setConfirmationPopUpate(false);
    setDeleteIndex(null);
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
    // setUploadedFiles([...uploadedFile, ...selectInputFilesBaner]);
    setSlectInputFileBaner([]);
    setUploadSuccess(true);

    setTimeout(() => {
      setUploadSuccess(false);
    }, 2000);
  };
  const handleUploadClickIcon = () => {
    // setUploadFilesLogo([...uploadFilesLogo, ...selectInputFiles]);
    setSlectInputFileBaner([]);
    setUploadSuccess(true);

    setTimeout(() => {
      setUploadSuccess(false);
    }, 2000);
  };

  // for input taking file code
  const homeOptions = ["USA", "UK"];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState(homeOptions?.[0]);
  const [selectedIconUrl, setSlectedIconUrl] = useState(null);

  const openModal = () => {
    console.log("Open");
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleConfirm = () => {
    closeModal();
  };

//   const handleIconChange = (e:React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files[0];
//     if (file) {
//       const iconUrl = URL.createObjectURL(file);
//       setSlectedIconUrl(iconUrl); // Update the state with the icon URL
//     }
//   };
  const inputStyle = "p-2 border w-full rounded-md border-blue-400";
  const buttonStyle =
    "bg-indigo-600 p-2 w-40 text-lg font-semibold text-white mt-4  rounded-md border border-indigo-500 flex items-center justify-center gap-2 hover:bg-indigo-100";


    const buttonStyleOrange =
    "bg-yellow-400 p-2 w-40 text-lg font-semibold text-white mt-4  rounded-md border border-indigo-500 flex items-center justify-center gap-2 hover:bg-indigo-100";


  const handleAddIcon = () => {
    // Perform any additional actions when the "Add icon" button is clicked
    // For example, show a confirmation popup or save the icon URL.
  };

  //todo list code 
  const [items, setItems] = useState<any>([]);
  const [text, setText] = useState<string>("");

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const handleAdd = () => {
    if (text !== "") {
      const updatedItems = [...items, text];
      setItems(updatedItems);
      setText("");
    }
  }

  const handleDelete = (id:number) => {
    const updatedItems = items.filter((element:any, i:number) => i !== id);
    setItems(updatedItems);
  }
    return (
        <div className="space-y-4">
      <section>
        <div className="max-w-5xl mx-auto p-4 rounded-xl bg-white grid grid-cols-7 items-center gap-4">
          <div className="col-span-1">
            {homeOptions.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setSelected(item)}
                className="w-full text-start border-b-[1px] border-slate-300 hover:bg-neutral-200 p-3"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-4">
            <Header title={selected} />
            {/* office address  */}
            <form className="space-y-3">
              <div>
                <div className="flex items-center justify-between">
                  {/* <label htmlFor="">Enter kk Phone 2</label> */}
                  <div className="flex items-center gap-3">
                    {/* <FaEdit className="text-green-600" size={36} /> */}
                    <FiSave
                      type="submit"
                      className="text-blue-600 cursor-pointer"
                      size={36}
                    //   onClick={() => setIsMessageSaved(true)}
                    />
                  </div>
                </div>

                <form className="relative space-y-3 rounded-md bg-white p-6 shadow-xl lg:p-10 border border-gray-100 m-10"> 
      
                  <div>
                    <label className=""> Name </label>
                    <input type="text" placeholder="Username" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring" />
                  </div>
                  <div className="">
                    <label className=""> Email Address </label>
                    <input type="email" placeholder="Info@example.com" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring" />
                  </div>
                  <div>
                    <label className=""> Phone </label>
                    <input type="text" placeholder="23456" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring" />
                  </div>
                  <div>
                    <label className=""> Address </label>
                    <input type="text" placeholder="road 1 st" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring" />
                  </div>
                  
                
                  <div>
                    <button type="button" className="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white outline-none focus:ring">Submit</button>
                  </div>
                </form>
               
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* payment section  */}

      {/* Social Media Section  */}
      <section className="max-w-5xl mx-auto p-4 rounded-xl bg-white ">
        <div className="space-y-4 flex  flex-col ">
          <div className="px-10">
            <h2 className="text-center text-2xl font-bold">Payment icon </h2>
            <div className="py-10 mb-5 ">
              <div className="w-1/2">
                <input
                  type="file"
                  name="banner"
                  className="  hidden"
                  onChange={handleFileChangeBaner}
                  ref={FileInputRef2}
                />
                <div className="flex items-center space-x-4 gap-2">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => FileInputRef2.current?.click()}
                  >
                    Select icon File{" "}
                  </button>
                  {selectInputFilesBaner.length > 0 && (
                    <div className="flex items-center space-x-3 w-[250px] mt-4 m-2">
                      <div className="flex items-center space-x-2">
                        <div>
                          {selectInputFilesBaner.map((file:any, index:number) => (
                            <div key={index} className="flex space-x-1">
                              <Image
                                src={URL.createObjectURL(file)}
                                alt="Baner"
                                className="w-20 h-20 rounded mr-3"
                                width={20}
                                height={20}
                              />
                              <button
                                className="bg-green-500 h-fit text-white px-2 py-2 rounded"
                                onClick={handleEditClickBaner}
                              >
                                <BiEdit size={30} />
                              </button>
                              <button
                                className="bg-red-500 h-fit text-white px-2 py-2 rounded"
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

                <button className={buttonStyle} onClick={handleUploadClick}>
                Upload ICO
                </button>
              </div>
              <div className="w-full mx-auto flex items-center justify-center flex-col gap-2">
                <div className="text-blue-600 font-bold text-2xl text-center py-1 dark:text-white">
                  List of payment icons
                </div>


           
<div className="container-fluid w-full my-5 bg-gray-100 p-5">
        <div className="w-full bg-white shadow-lg p-5 rounded-lg">
          <div className="flex items-center mb-4">
            <div className="w-1/6">
              {/* <label htmlFor="imageUpload" className="btn btn-large">Select file</label> */}
              <input type="file"  />
            </div>
            <div className="w-4/6">
              <input type="text" className={inputStyle} placeholder="Write Plan Here" value={text} onChange={handleChange} />
            </div>
            <div className="w-1/6">
              <button className={buttonStyleOrange} onClick={handleAdd}>Add</button>
            </div>
          </div>
          <div className="container">
            <ul className="list-none m-5">
              {items.map((value:any, i:number) => (
                <Plan key={i} id={i} value={value} sendData={handleDelete} />
              ))}
            </ul>
          </div>
        </div>
      </div>

                {/* <div className="flex">
                    <input type="file" placeholder="Icons" className="" />
                    <input type="text" placeholder="links"/>
                    <button type="button" className="mt-4 w-50 rounded-md bg-blue-600 p-2 text-center font-semibold text-white outline-none focus:ring">Add</button>
                  </div> */}
                  
                
                  
                {uploadedFile.length > 0 && (
                  <div className="m-2 flex space-x-3 ">
                    {uploadedFile.map((file, index) => (
                      <div key={index} className="felx flex-col-reverse space-x-1 space-y-2">
                        <Image
                          src={URL.createObjectURL(file)}
                          alt="Baner"
                          className="w-24 h-24 rounded"
                          width={20}
                          height={20}
                        />
                        <button
                          className="bg-green-500 text-white px-2 py-2 rounded"
                          onClick={handleEditClickBaner}
                        >
                          <BiEdit />
                        </button>
                        <button
                          className="bg-red-500 mr-1 text-white px-2 py-2 rounded"
                          onClick={() => handleDeleteFileClck(index)}
                        >
                          <BiTrash />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* </div> */}
              </div>
            </div>
          </div>

          {/* <SocialMEdiaIcons /> */}
        </div>

        {/* Bannar  Confarmatin MOdal of delete uplod icon */}
        {confirmationPopUpIcon && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-75">
            <div className="bg-white p-4 rounded-md">
              <p>Arue you sure to Delte this Record?</p>
              <div className="mt-4 flex justify-end">
                <button
                  className="px-4 py-2 mr-2 bg-red-500 text-white rounded-md"
                  onClick={handleDeleteIcon}
                >
                  Confirm
                </button>
                <button
                  className="px-4 py-2 mr-2 bg-gray-400 text-white rounded-md"
                  onClick={handleUplodCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Bannar  Confarmatin MOdal of delete uplod icon */}
        {confirmationPopUpIUplod && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-75">
            <div className="bg-white p-4 rounded-md">
              <p>Arue you sure to Delte this Record?</p>
              <div className="mt-4 flex justify-end">
                <button
                  className="px-4 py-2 mr-2 bg-red-500 text-white rounded-md"
                  onClick={handleDeleteUplod}
                >
                  Confirm
                </button>
                <button
                  className="px-4 py-2 mr-2 bg-gray-400 text-white rounded-md"
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
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-75">
            <div className="bg-white p-4 rounded-md">
              <p>Arue you sure to Delte this Record?</p>
              <div className="mt-4 flex justify-end">
                <button
                  className="px-4 py-2 mr-2 bg-red-500 text-white rounded-md"
                  onClick={handleDeleteFileBaner}
                >
                  Confirm
                </button>
                <button
                  className="px-4 py-2 mr-2 bg-gray-400 text-white rounded-md"
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
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-75">
            <div className="bg-white p-4 rounded-md">
              <p>Arue you sure to Delte this Record?</p>
              <div className="mt-4 flex justify-end">
                <button
                  className="px-4 py-2 mr-2 bg-red-500 text-white rounded-md"
                  onClick={handleDeleteFile}
                >
                  Confirm
                </button>
                <button
                  className="px-4 py-2 mr-2 bg-gray-400 text-white rounded-md"
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
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-75">
            <div className="bg-white p-4 rounded-md">
              <p className="text-green-500">Uploaded Successfully</p>
            </div>
          </div>
        )}

        {/* Data upload pop up */}

        {uploadSucces && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-75">
            <div className="bg-white p-4 rounded-md">
              <p className="text-green-500">Uploaded Successfully</p>
            </div>
          </div>
        )}
      </section>
    </div>
    );
};

export default OfficeAddress;