import React from 'react';

const ContactUsDropDownTable:React.FC = () => {
    return (
        <section className="space-y-5 mt-3">
      <div className=" p-1 mt-6  flex gap-8">
        <div className="flex  rounded-md items-center ml-3 justify-center">
          <input
            type="text"
            placeholder="Write to search.."
            className="border border-blue-500 h-8 rounded-l-md  pl-2 "
          />
          <button className="bg-blue-500 hover:bg-blue-400 px-6 py-1  rounded-r-lg text-white border -ml-1">
            Serch
          </button>
        </div>
        <h1 className="text-3xl text-gray-700  ml-4 font-extrabold text-center ">
          Contact US
        </h1>
      </div>
      <table className="table my-8 mr-1 border   border-gray-500  ">
        <thead>
          <tr className="bg-blue-400 text-white ">
            <th className="py-2 px-4  border-2">No</th>
            <th className="py-2 px-1 w-fit  border-2">User ID</th>
            <th className="py-2 px-1 w-fit  border-2">User Name</th>
            <th className="py-2 px-1   border-2">Contact Details</th>
            <th className="py-2 px-20 w-fit  border-2">Subject Name</th>
            <th className="py-2   border-2 px-44">Message</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-200">
            <td className="py-3 px-4 border-2 border-gray-100">45</td>
            <td className="py-2 px-4 border-2 border-gray-100">54Lpl </td>
            <td className="py-2 px-4 border-2 border-gray-100">Mr Dani</td>
            <td className="py-2 px-4 border-2 border-gray-100">
              abc@gmail.com
            </td>
            <td className="py-2 px-4 border-2 border-gray-100">
              Payment Issue
            </td>
            <td className="py-2 px-4 border-2 border-gray-100">
              Can you help me
            </td>
            {/* <td class="px-6 py-4 text-center border-2 border-gray-100">
         
        </td> */}
          </tr>

          {/* Just for Demo  Displaying  Remove Follwing Code  */}
          <tr className="bg-gray-200">
            <td className="py-3 px-4 border-2 border-gray-100">45</td>
            <td className="py-2 px-4 border-2 border-gray-100">54Lpl </td>
            <td className="py-2 px-4 border-2 border-gray-100">Mr Jon</td>
            <td className="py-2 px-4 border-2 border-gray-100">
              abc@gmail.com
            </td>
            <td className="py-2 px-4 border-2 border-gray-100">Payment Loss</td>
            <td className="py-2 px-4 border-2 border-gray-100">
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