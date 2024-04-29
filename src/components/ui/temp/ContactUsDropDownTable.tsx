import React from "react";
import CustomSearch from "../CustomSearch";

const ContactUsDropDownTable: React.FC = () => {
  const onSearch = () => {};
  return (
    <section className="mt-3 space-y-5">
      <div className=" mt-6 flex  gap-8 p-1">
        <div className="ml-3  flex items-center justify-center rounded-md">
          <CustomSearch onSearch={onSearch} />
        </div>
        <h1 className="text-gray-700 ml-4  text-center text-3xl font-extrabold ">
          Contact US
        </h1>
      </div>
      <table className="border-gray-500 my-8 mr-1 table   w-full border ">
        <thead>
          <tr className="bg-blue-400 text-white ">
            <th className="border-2 px-4  py-2">No</th>
            <th className="w-fit border-2 px-1  py-2">User ID</th>
            <th className="w-fit border-2 px-1  py-2">User Name</th>
            <th className="border-2 px-1   py-2">Contact Details</th>
            <th className="w-fit border-2 px-20  py-2">Subject Name</th>
            <th className="border-2   px-44 py-2">Message</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-slate-200">
            <td className="border-gray-100 border-2 px-4 py-3">45</td>
            <td className="border-gray-100 border-2 px-4 py-2">54Lpl </td>
            <td className="border-gray-100 border-2 px-4 py-2">Mr Dani</td>
            <td className="border-gray-100 border-2 px-4 py-2">
              abc@gmail.com
            </td>
            <td className="border-gray-100 border-2 px-4 py-2">
              Payment Issue
            </td>
            <td className="border-gray-100 border-2 px-4 py-2">
              Can you help me
            </td>
            {/* <td class="px-6 py-4 text-center border-2 border-gray-100">
         
        </td> */}
          </tr>

          {/* Just for Demo  Displaying  Remove Follwing Code  */}
          <tr className="bg-slate-200">
            <td className="border-gray-100 border-2 px-4 py-3">45</td>
            <td className="border-gray-100 border-2 px-4 py-2">54Lpl </td>
            <td className="border-gray-100 border-2 px-4 py-2">Mr Jon</td>
            <td className="border-gray-100 border-2 px-4 py-2">
              abc@gmail.com
            </td>
            <td className="border-gray-100 border-2 px-4 py-2">Payment Loss</td>
            <td className="border-gray-100 border-2 px-4 py-2">
              Can you help me....
            </td>
            {/* <td className="py-2 px-4 border-2 border-gray-100">Can you help me....</td> */}
          </tr>
          {/* Just for Demo  Displaying  Remove Upper Code  */}
        </tbody>
      </table>
    </section>
  );
};

export default ContactUsDropDownTable;
