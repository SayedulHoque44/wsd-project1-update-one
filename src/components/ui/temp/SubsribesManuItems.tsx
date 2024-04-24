"use client";
import React, { useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { RiCheckFill } from "react-icons/ri";
const SubsribesManuItems:React.FC = () => {
    const [AllCheckBox, setAllCheckBox] = useState<boolean>(false);
    const [AllCheckBox2, setAllCheckBox2] = useState<boolean>(false);
  const [AllCheckBox3, setAllCheckBox3] = useState<boolean>(false);
  const [AllCheckBox4, setAllCheckBox4] = useState<boolean>(false);

    const [checkbox1, setCheckBox1] = useState<boolean>(false);
    const [checkbox2, setCheckBox2] = useState<boolean>(false);
  const [checkbox3, setCheckBox3] = useState<boolean>(false);
  const [checkbox4, setCheckBox4] = useState<boolean>(false);
    const handelCheckAll = ():void => {
        setCheckBox1(!AllCheckBox);
        setAllCheckBox(!AllCheckBox);
      };
      const handelCheckAll2 = ():void => {
        setCheckBox2(!AllCheckBox2);
        setAllCheckBox2(!AllCheckBox2);
      };
      const handelCheckAll3 = ():void => {
        setCheckBox3(!AllCheckBox3);
        setAllCheckBox3(!AllCheckBox3);
      };
      const handelCheckAll4 = ():void => {
        setCheckBox4(!AllCheckBox4);
        setAllCheckBox4(!AllCheckBox4);
      };
      interface InitialState{
            id: number;
            name: string;
      }
      const [data, setData] = useState<InitialState[]>([
        { id: 1, name: "abc@gmail.com" },
        { id: 2, name: "abc@gmail.com" },
        { id: 3, name: "abc@gmail.com" },
      ]);
      const handleDelete = (id:number) => {
        setData((prevData) => prevData.filter((item) => item.id !== id));
      };
    return (
        <table className="table my-8 mr-1 border   border-none w-full items-center  justify-center mx-auto border-gray-500  ">
      <span className="border border-gray-500 ">
        <thead>
          <tr className="bg-blue-300 text-white  ">
            <th className="py-2 px-2 ">
              <input
                type="checkbox"
                className="p-2"
                checked={AllCheckBox}
                onChange={handelCheckAll}
              />{" "}
            </th>
            <th className="py-2 px-1 ">
              <RiCheckFill />
            </th>
            <th className="py-2  text-start w-36">Email</th>
            <th className="py-2 px-2 w-fit  ">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i} className="bg-gray-200">
              <td className="pr-3 px-1 border-gray-200">{item.id}</td>

              <td className="py-3 px-1 border-gray-100">
                <input
                  type="checkbox"
                  className="p-2 w-5 h-6 "
                  checked={checkbox1}
                  onChange={() => setCheckBox1(!checkbox1)}
                />{" "}
              </td>

              <td className="py-2 px-1 border-gray-100">{item.name}</td>

              <td className="py-2 px-1flex gap-2 items-center cursor-pointer justify-center  border-gray-100">
                <BiTrash
                  size={35}
                  className="text-red-700"
                  onClick={() => handleDelete(item.id)}
                />
              </td>
            </tr>
          ))}

        </tbody>
      </span>
      <span className="border border-gray-500 ">
        <thead>
          <tr className="bg-blue-300 text-white ">
            <th className="py-2 px-1 ">
              <input
                type="checkbox"
                className="p-2"
                checked={AllCheckBox2}
                onChange={handelCheckAll2}
              />{" "}
            </th>
            <th className="py-2 px-2 ">
              <RiCheckFill />
            </th>
            <th className="py-2 px-2 w-36 text-start ">Email</th>
            <th className="py-2 px-2 w-fit  ">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-200">
            <td className="pr-3 px-2 border-gray-200 ">1</td>
            {/* { */}
            {/* // Object.entries(checkBoxes).map(([checkBoxName, checkBoxes])=>( */}
            {/* // <label key={checkBoxName} className='flex flex-col'> */}
            {/* // <span> */}
            <td className="py-3 px-2 border-gray-100">
              <input
                type="checkbox"
                className="p-2 w-5 h-6 "
                checked={checkbox2}
                onChange={() => setCheckBox2(!checkbox2)}
              />{" "}
            </td>

            <td className="py-2 px-1 border-gray-100">abc@gmail.com</td>

            <td className="py-2 px-1 flex gap-2 items-center justify-center  border-gray-100">
              <BiTrash size={35} className="text-red-700" />
            </td>
            {/* // </span>
            // </label> */}
            {/* / ))
        } */}
          </tr>

          {/* Just for Demo  Displaying  Remove Upper Code  */}
        </tbody>
      </span>

      <span className="border border-gray-500 ">
        <thead>
          <tr className="bg-blue-300 text-white ">
            <th className="py-2 px-2 ">
              <input
                type="checkbox"
                className="p-2"
                checked={AllCheckBox3}
                onChange={handelCheckAll3}
              />{" "}
            </th>
            <th className="py-2 px-2 ">
              <RiCheckFill />
            </th>
            <th className="py-2 px-1 w-36 text-start ">Email</th>
            <th className="py-2 px-1 w-fit  ">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-200">
            <td className="pr-3 px-1 border-gray-200 ">1</td>
            {/* { */}
            {/* // Object.entries(checkBoxes).map(([checkBoxName, checkBoxes])=>( */}
            {/* // <label key={checkBoxName} className='flex flex-col'> */}
            {/* // <span> */}
            <td className="py-3 px-2 border-gray-100">
              <input
                type="checkbox"
                className="p-2 w-4 h-6 "
                checked={checkbox3}
                onChange={() => setCheckBox3(!checkbox3)}
              />{" "}
            </td>

            <td className="py-2 px-2 border-gray-100">abc@gml.com</td>

            <td className="py-2 px-1flex gap-2 items-center justify-center  border-gray-100">
              <BiTrash size={35} className="text-red-700" />
            </td>
            {/* // </span>
            // </label> */}
            {/* / ))
        } */}
          </tr>

          {/* Just for Demo  Displaying  Remove Upper Code  */}
        </tbody>
      </span>
      <span className="border border-gray-500 ">
        <thead>
          <tr className="bg-blue-300 text-white ">
            <th className="py-2  ">
              <input
                type="checkbox"
                className="p-2"
                checked={AllCheckBox4}
                onChange={handelCheckAll4}
              />{" "}
            </th>
            <th className="py-2 px-2 ">
              <RiCheckFill />
            </th>
            <th className="py-2  w-36 text-start ">Email</th>
            <th className="py-2 px-1 w-fit  ">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-200">
            <td className="pr-3 px-2 border-gray-200 ">1</td>
            {/* { */}
            {/* // Object.entries(checkBoxes).map(([checkBoxName, checkBoxes])=>( */}
            {/* // <label key={checkBoxName} className='flex flex-col'> */}
            {/* // <span> */}
            <td className="py-3 px-2 border-gray-100">
              <input
                type="checkbox"
                className="p-2 w-5 h-6 "
                checked={checkbox4}
                onChange={() => setCheckBox4(!checkbox4)}
              />{" "}
            </td>

            <td className="py-2 px-2 border-gray-100">abc@gmail.com</td>

            <td className="py-2 px-1flex gap-2 items-center justify-center  border-gray-100">
              <BiTrash size={35} className="text-red-700" />
            </td>
            {/* // </span>
            // </label> */}
            {/* / ))
        } */}
          </tr>

          {/* Just for Demo  Displaying  Remove Upper Code  */}
        </tbody>
      </span>
    </table>
    );
};

export default SubsribesManuItems;