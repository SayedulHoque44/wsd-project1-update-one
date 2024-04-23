"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";
import SelectGroupTwo from "@/components/SelectGroup/SelectGroupTwo";
import ICTable from "@/components/ciApp/ui/ICTable";
import BleuButton from "@/components/ciApp/ui/button/BleuButton";
import CustomSearch from "@/components/ui/CustomSearch";
import CustomSelect from "@/components/ui/CustomSelect";
import { users } from "@/constants/userData";
import { IUser } from "@/types/user";
import { DatePicker } from "antd";

import Link from "next/link";
import React, { useState } from "react";

const country = [
  {
    value: "All",
    label: "All",
  },
  {
    value: "japan",
    label: "japan",
  },
  {
    value: "london",
    label: "london",
  },
];

const AllUsers = () => {
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

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
            <Link href={`/c/allUsers/view/${data?.userId}`}>
              <button className="rounded-md bg-blue-500 px-3 py-1 text-[14px] text-white  transition-all hover:bg-white hover:text-blue-600 hover:shadow-md ">
                View
              </button>
            </Link>
          </span>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    // console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const onSearch = (value: string) => {
    console.log(value);
  };
  const onStartDate = (value: string) => {
    console.log(value);
  };

  return (
    <div>
      <Breadcrumb pageName="All User" />
      <div className="grid w-full  grid-cols-1 items-center justify-between gap-3 py-4 md:grid-cols-3">
        <CustomSelect options={country} placeholder="Status" />
        <CustomSearch onSearch={onSearch} />
        <DatePicker onChange={onStartDate} />
      </div>

      <ICTable
        loading={false}
        columns={columns}
        dataSource={users}
        pageSize={size}
        totalPages={users?.length}
        // showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
        // rowKey="id"
        // expandable={{
        //   expandedRowRender: (record: any) => (
        //     <p style={{margin: 0}}>{record.truckDescription}</p>
        //   ),
        //   rowExpandable: (record: any) =>
        //     record.truckDescription !== "Not Expandable",
        // }}
      />
    </div>
  );
};

export default AllUsers;
