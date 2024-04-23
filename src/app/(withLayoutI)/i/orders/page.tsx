"use client";

import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Table from "@/components/Tables";
import { OrderData } from "@/types/orderData";
import Link from "next/link";
import { OrdersData } from "@/constants/orderData";
import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";
import SelectGroupTwo from "@/components/SelectGroup/SelectGroupTwo";

const AllOrders: React.FC = () => {
  let columns = [
    { title: "No", dataIndex: "sl" },
    { title: "Order Id", dataIndex: "id" },
    { title: "Project Name", dataIndex: "projectName" },
    { title: "Total Project Amount", dataIndex: "projectTotalRs" },
    { title: "Total Online Deposit Rs", dataIndex: "totalOnlineDepositRs" },
    { title: "Total Offline Deposit", dataIndex: "totalOnlineDeposits" },
    { title: "Money Left", dataIndex: "moneyLeft" },
    {
      title: "Project Update",
      render: (data: OrderData) => {
        return (
          <span>
            <Link href={`/orders/update/${data?.id}`}>
              <button className="rounded-md bg-blue-500 px-3 py-1 text-[14px] text-white  transition-all hover:bg-white hover:text-blue-600 hover:shadow-md ">
                Update
              </button>
            </Link>
          </span>
        );
      },
    },
    { title: "Project Delivery Day", dataIndex: "projectDeliveryDay" },
    { title: "Profits", dataIndex: "profit" },
    { title: "Status", dataIndex: "status" },
    {
      title: "Action",
      render: (data: OrderData) => {
        return (
          <span>
            <Link href={`/orders/${data?.id}`}>
              <button className="rounded-md bg-blue-500 px-3 py-1 text-[14px] text-white  transition-all hover:bg-white hover:text-blue-600 hover:shadow-md ">
                View
              </button>
            </Link>
          </span>
        );
      },
    },
  ];

  return (
    <div>
      <Breadcrumb pageName="All Orders" />
      <div className="grid w-full grid-cols-3 items-center justify-between gap-3 py-4">
        <DatePickerOne />
        <div className="flex h-full flex-col justify-end">
          <input
            className="w-full  rounded-[8px] border-[1px] border-[#d9d9d9] px-12 py-3 font-normal outline-none  transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            placeholder="Search"
          />
        </div>

        <div className="relative">
          <SelectGroupTwo />
        </div>
      </div>

      <Table columns={columns} dataSource={OrdersData} />
    </div>
  );
};

export default AllOrders;
