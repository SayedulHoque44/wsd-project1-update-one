"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";
import SelectGroupTwo from "@/components/SelectGroup/SelectGroupTwo";
import Table from "@/components/Tables";
import BleuButton from "@/components/ui/button/BleuButton";
import { users } from "@/constants/userData";
import { IUser } from "@/types/user";

import Link from "next/link";
import React from "react";

const AllUsers = () => {
  let columns = [
    { title: "No", dataIndex: "no" },
    { title: "User Id", dataIndex: "userId" },
    { title: "userName", dataIndex: "userName" },
    { title: "Email", dataIndex: "email" },
    { title: "Total Order", dataIndex: "totalOrder" },
    { title: "Total Amount", dataIndex: "totalAmount" },
    { title: "Total Paid", dataIndex: "totalPaid" },
    { title: "money Left", dataIndex: "moneyLeft" },
    { title: "Refund Amount", dataIndex: "refundAmount" },
    { title: "profited", dataIndex: "profited" },
    {
      title: "Action",
      render: (data: IUser) => {
        return (
          <span>
            <Link href={`/allUser/${data?.userId}`}>
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
      <Breadcrumb pageName="All User" />
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

      <Table columns={columns} dataSource={users} />
    </div>
  );
};

export default AllUsers;
