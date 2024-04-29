"use client";
import React, { useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { RiCheckFill } from "react-icons/ri";
const SubsribesManuItems: React.FC = () => {
  const [AllCheckBox, setAllCheckBox] = useState<boolean>(false);
  const [AllCheckBox2, setAllCheckBox2] = useState<boolean>(false);
  const [AllCheckBox3, setAllCheckBox3] = useState<boolean>(false);
  const [AllCheckBox4, setAllCheckBox4] = useState<boolean>(false);

  const [checkbox1, setCheckBox1] = useState<boolean>(false);
  const [checkbox2, setCheckBox2] = useState<boolean>(false);
  const [checkbox3, setCheckBox3] = useState<boolean>(false);
  const [checkbox4, setCheckBox4] = useState<boolean>(false);
  const handelCheckAll = (): void => {
    setCheckBox1(!AllCheckBox);
    setAllCheckBox(!AllCheckBox);
  };
  const handelCheckAll2 = (): void => {
    setCheckBox2(!AllCheckBox2);
    setAllCheckBox2(!AllCheckBox2);
  };
  const handelCheckAll3 = (): void => {
    setCheckBox3(!AllCheckBox3);
    setAllCheckBox3(!AllCheckBox3);
  };
  const handelCheckAll4 = (): void => {
    setCheckBox4(!AllCheckBox4);
    setAllCheckBox4(!AllCheckBox4);
  };
  interface InitialState {
    id: number;
    name: string;
  }

  const [data, setData] = useState<InitialState[]>([
    { id: 1, name: "abc@gmail.com" },
    { id: 2, name: "abc@gmail.com" },
    { id: 3, name: "abc@gmail.com" },
  ]);
  const handleDelete = (id: number) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <table className="border-gray-500 mx-auto my-8 mr-1   table w-full items-center  justify-center border border-none  ">
      <span className="border-gray-500 border ">
        <thead>
          <tr className="bg-blue-300 text-white  ">
            <th className="px-2 py-2 ">
              {/* <input
                type="checkbox"
                className="p-2"
                checked={AllCheckBox}
                onChange={handelCheckAll}
              />{" "} */}
            </th>
            <th className="px-1 py-2 ">
              <RiCheckFill />
            </th>
            <th className="w-36  py-2 text-start">Email</th>
            <th className="w-fit px-2 py-2  ">Action</th>
          </tr>
        </thead>
        <tbody>
          <TableRow />
        </tbody>
      </span>
      <span className="border-gray-500 border ">
        <thead>
          <tr className="bg-blue-300 text-white ">
            <th className="px-1 py-2 ">
              {/* <input
                type="checkbox"
                className="p-2"
                checked={AllCheckBox2}
                onChange={handelCheckAll2}
              />{" "} */}
            </th>
            <th className="px-2 py-2 ">
              <RiCheckFill />
            </th>
            <th className="w-36 px-2 py-2 text-start ">Email</th>
            <th className="w-fit px-2 py-2  ">Action</th>
          </tr>
        </thead>
        <tbody>
          <TableRow />
        </tbody>
      </span>
      <span className="border-gray-500 border ">
        <thead>
          <tr className="bg-blue-300 text-white ">
            <th className="px-2 py-2 ">
              {/* <input
                type="checkbox"
                className="p-2"
                checked={AllCheckBox3}
                onChange={handelCheckAll3}
              />{" "} */}
            </th>
            <th className="px-2 py-2 ">
              <RiCheckFill />
            </th>
            <th className="w-36 px-1 py-2 text-start ">Email</th>
            <th className="w-fit px-1 py-2  ">Action</th>
          </tr>
        </thead>
        <tbody>
          <TableRow />
        </tbody>
      </span>
      <span className="border-gray-500 border ">
        <thead>
          <tr className="bg-blue-300 text-white ">
            <th className="py-2  ">
              {/* <input
                type="checkbox"
                className="p-2"
                checked={AllCheckBox4}
                onChange={handelCheckAll4}
              />{" "} */}
            </th>
            <th className="px-2 py-2 ">
              <RiCheckFill />
            </th>
            <th className="w-36  py-2 text-start ">Email</th>
            <th className="w-fit px-1 py-2  ">Action</th>
          </tr>
        </thead>
        <tbody>
          <TableRow />
        </tbody>
      </span>
      <span className="border-gray-500 border ">
        <thead>
          <tr className="bg-blue-300 text-white ">
            <th className="py-2  ">
              {/* <input
                type="checkbox"
                className="p-2"
                checked={AllCheckBox4}
                onChange={handelCheckAll4}
              />{" "} */}
            </th>
            <th className="px-2 py-2 ">
              <RiCheckFill />
            </th>
            <th className="w-36  py-2 text-start ">Email</th>
            <th className="w-fit px-1 py-2  ">Action</th>
          </tr>
        </thead>
        <tbody>
          <TableRow />
        </tbody>
      </span>
    </table>
  );
};

export type Data = {
  id: number;
  name: string;
  isChecked: boolean;
};

const TableRow = () => {
  const [data, setData] = useState([
    { id: 1, name: "abc@gmail.com", isChecked: false },
    { id: 2, name: "abc@gmail.com", isChecked: false },
    { id: 3, name: "abc@gmail.com", isChecked: false },
  ]);
  const handleDelete = (id: number) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const handleCheckbox = (id: number, isChecked: boolean) => {
    const targetId = data.find((data) => data.id === id);
    const restData = data.filter((data) => data.id !== id);

    setData([
      ...restData,
      {
        ...(targetId as Data),
        isChecked: isChecked,
      },
    ]);
  };

  return (
    <>
      {data.map((item, i) => (
        <tr key={i} className="bg-slate-200">
          <td className="border-gray-200 px-1 pr-3">{item.id}</td>

          <td className="border-gray-100 px-1 py-3">
            <input
              type="checkbox"
              className="h-6 w-5 p-2 "
              checked={item.isChecked}
              onChange={(e) => handleCheckbox(item.id, e.target.checked)}
            />{" "}
          </td>

          <td className="border-gray-100 px-1 py-2">{item.name}</td>

          <td className="px-1flex border-gray-100 cursor-pointer items-center justify-center gap-2  py-2">
            <BiTrash
              size={35}
              className="text-red-700"
              onClick={() => handleDelete(item.id)}
            />
          </td>
        </tr>
      ))}
    </>
  );
};

export default SubsribesManuItems;
