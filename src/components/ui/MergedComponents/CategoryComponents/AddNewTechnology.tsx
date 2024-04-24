"use client";
import React from 'react';
import CustomDropdown from "../DropDownManues/TecnologyCategory";
import { useRef, useState } from "react";

const AddNewTechnology:React.FC = () => {
    const [files,setFiles]=useState([]);
const fileInputRef = useRef<HTMLInputElement>(null) ; 
// const handFileButtonClick =() =>{
//     fileInputRef.current.click();
// }

// const handleFlieChange =(e:HTMLInputElement)=>{
//   const file = e.target.files[0]
//   if (file) {
//     setFiles([...files, {id: Data.now(), name:file.name}])
//   }
// }

  const inputStyle = "p-2 border w-full rounded-md border-blue-400";
    return (
        <div>
      <div className="px-10 py-5">
        <h1 className="text-2xl text-center font-bold">
          Create Technology Name
        </h1>
        {/* <div>
                    <h3 className="text-xl p-2 text-center border border-blue">
                        Technolgy Category add
                    </h3>

                    <div>

                       
                    </div>

                </div> */}
        <div className="flex flex-col sm:flex-row sm:space-x-5 h-64 mt-10 mb-5">
          <div className=" ">
            <CustomDropdown />
          </div>
        </div>
       
      </div>
    </div>
    );
};

export default AddNewTechnology;