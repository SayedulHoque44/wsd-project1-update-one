'use client'
import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import { BiPlusCircle } from 'react-icons/bi';
import IconUpload from './iconUpload';
const TecnologeyIcons:React.FC = () => {
    // Drop down manu
const [isOpen, setIsOpen] = useState<boolean>(false);
// payment btn optoin of dropdown manu
const CategoryOptions:string[] = ["Techonology", ];

type TechArray = string[]
const [technologies, setTechnologies] = useState<TechArray>([
  
  'React',
  'Next.js  technology',
  'Ruby technology',
  'full-stack',
  'Python'
]);
const [selectedOption, setSelectedOption] = useState<string>('Design Technology');
const [isEditing, setIsEditing] = useState<boolean>(false);
const [editedTechnology, setEditedTechnology] = useState<string>(selectedOption);
const [showDropDown, setDropDown] = useState<boolean>(false)
const [showTechonologyDropDown, setTechonologyGropDown]= useState<boolean>(false)



 const [inputValue, setInputValue] = useState<string>("");
const handdleAddData = () => {
  if (inputValue.trim() !== "") {
    setTechnologies((preveOptions) => [...preveOptions, inputValue]);
    setInputValue("");
  }
};

const handleOptionClick = (option:string) => {
  setSelectedOption(option);
  setEditedTechnology(option);
  setIsOpen(false);
};

const handleEdit = () => {
  setIsEditing(true);
};

const handleEditSubmit = () => {
  setTechnologies(
    technologies.map((tech) => (tech === selectedOption ? editedTechnology : tech))
  );
  setSelectedOption(editedTechnology);
  setIsEditing(false);
};

const handleDelete = () => {
  setTechnologies(technologies.filter((tech) => tech !== selectedOption));
  setSelectedOption(technologies[0]); // Select the first remaining technology
};

    return (
        <div className="flex flex-col sm:flex-row sm:space-x-5  mb-5 ">
      <div className="  sm:w-1/2">
        <label className="block font-medium bg-gray-700 rounded"></label>
      {/* DropDoown Manu */}
      <div className="relative inline-block text-left ">
            <div>
              <span className="rounded-md shadow-sm">
                <button
                  type="button"
                  className="inline-flex w-[250px] justify-between  z-50 px-4 py-2 text-sm font-medium outline-none  hover:text-gray-700 hover:bg-white border border-gray-300 rounded-md bg-blue-600 text-white focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-blue-600"
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded="true"
                  onClick={()=> setDropDown(!showDropDown)}
                >
                  {selectedOption || "Select Technology Category"}
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-.707.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </span>
            </div>

            {/* {isOpen && (
              <div className="origin-top-right absolute  mt-2 w-[250px] rounded-md shadow-lg  z-10 ring-1 ring-black ring-opacity-5 ">
                <div className="py-1">
                  {CategoryOptions.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionClick(option)}
                      className=" px-4 py-2 text-sm text-gray-700 bg-white hover:bg-blue-200 hover:text-blue-800 flex justify-between w-[100%] "
                    >
                      {option}
                     
                    </button>
                  ))}
                </div>
              </div>
            )} */}
          </div>
      {/* DropDoown Manu */}
        {/* createa and delete items  */}

        {showDropDown && (
     <div className="md:w-full  py-3 w-[360px] relative">
     {technologies.map((option) => (
       <div
         key={option}
         onClick={() => handleOptionClick(option)}
        //  class={`option ${selectedOption === option ? 'selected' : ''}`}
         className="flex flex-row w-[250px] items-center border text-sm font-bold mb-2  border-gray-400 p-1"
       >
         <>
         {isEditing && option === selectedOption ? (
           <input
             type="text"
             className='h-7 w-[250px] rounded-md border-gray-900 border '
             value={editedTechnology}
             onChange={(e) => setEditedTechnology(e.target.value)}
           />
         ) : (
           option
         )}
</>
         {isEditing && option === selectedOption ? (
           <button className=" w-[250px] rounded-full flex items-center justify-center bg-orange-400 py-1 my-1 px-1" onClick={handleEditSubmit}>
             Save
           </button>
       
       ) : (
           <div className="ml-2 flex gap-1 absolute w-[230px] -right-3">

            <div className='bg-blue-300 h-7 w-7 rounded-full  flex items-center justify-center'><MdEdit onClick={handleEdit} className='text-white' size={24}/></div>
            <div className='bg-red-600 h-7 w-7 rounded  flex items-center justify-center'><MdDelete onClick={handleDelete} className='text-white' size={24}/></div>
             
          
           </div>
         )}
       </div>
     ))}
    
   </div>
        )}
        
      </div>

      <div> <div><div className="w-full  flex">
          <h2 className="font-mdium h-[42px] text-center flex items-center justify-center  whitespace-normal w-[350px]  bg-blue-900 text-white rounded-l-lg">
            Techenology icon name   
          </h2>
          <form>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full rounded-l-none py-2 px-3 border border-gray-900  rounded-lg"
            />
          </form>
         
        </div>
          <IconUpload />
          <button
            className="bg-orange-700 h-fit hover:bg-orange-500 hover:text-black px-6 py-2 text-white text-lg font-bold rounded flex items-center"
            onClick={handdleAddData}
          >
            ADD <BiPlusCircle size={28} className="pl-1" />
          </button>
        </div>
        </div>
    </div>
    );
};

export default TecnologeyIcons;