import React from 'react';

const buttonStylered =
"bg-red-700 text-white p-2 rounded-md m-1";

const buttonStyleGreen =
"bg-green-700 text-white p-2 rounded-md m-1";
// id={i} value={value} sendData={handleDelete}
interface planProps {
    id:number;
    value:any;
    sendData:(id:number)=>void;
}
const Plan:React.FC<planProps> = ({id, value, sendData}) => {
    return (
        <>
      <div className="flex items-center border-b border-gray-200 py-3">
        <div className="flex-none">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" width="30px" className="mt-3" alt="Facebook Logo" />
        </div>

        <div className="flex-grow">
          <li className="shadow p-2 my-2 text-dark">{value}</li>
        </div>

        <div className="flex-none">
          <button className={buttonStyleGreen} onClick={() => {sendData(id) }}>Delete</button>
          <button className={buttonStylered} onClick={() => {sendData(id) }}>Edit</button>
        </div>
      </div>
    </>
    );
};

export default Plan;