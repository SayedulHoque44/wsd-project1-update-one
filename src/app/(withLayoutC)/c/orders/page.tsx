"use client";

import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { OrderData } from "@/types/orderData";
import Link from "next/link";
import { OrdersData } from "@/constants/orderData";
import ICTable from "@/components/ciApp/ui/ICTable";
import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";
import SelectGroupTwo from "@/components/SelectGroup/SelectGroupTwo";
import CustomSelect from "@/components/ui/CustomSelect";
import { DatePicker, Input } from "antd";

const { Search } = Input;

const AllOrders: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

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
            <Link href={`/c/orders/update/${data?.id}`}>
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
            <Link href={`/c/orders/view/${data?.id}`}>
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

  const projectStatusOption = [
    {
      value: "All",
      label: "All",
    },
    {
      value: "pending",
      label: "pending",
    },
    {
      value: "payment",
      label: "payment",
    },
  ];
  const status = [
    {
      value: "All",
      label: "All",
    },
    {
      value: "normal",
      label: "normal",
    },
    {
      value: "medium",
      label: "medium",
    },
    {
      value: "emergency",
      label: "emergency",
    },
  ];
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
  const projectName = [
    {
      value: "All",
      label: "All",
    },
    {
      value: "web dev",
      label: "web dev",
    },
    {
      value: "app dev",
      label: "app dev",
    },
  ];

  const onSearch = (value: any) => {
    console.log(value);
  };
  const onStartDate = (value: any) => {
    console.log(value);
  };
  const onEndDate = (value: any) => {
    console.log(value);
  };
  const props = {
    className: "bg-blue-500 w-full",
    placeholder: "Search Blogs",
    loading: false,
    onSearch: onSearch,
    enterButton: true,
  };
  return (
    <div>
      <Breadcrumb pageName="All Orders" />
      <div className="grid w-full grid-cols-1  items-center  justify-between  gap-3 py-4 md:grid-cols-3 xl:grid-cols-6">
        <CustomSelect options={status} placeholder="Status" />
        <Search {...props} />
        <div className="flex items-center gap-1">
          <DatePicker onChange={onStartDate} />
          <span>To</span>
          <DatePicker onChange={onEndDate} />
        </div>
        <CustomSelect options={country} placeholder="Country" />
        <CustomSelect options={projectName} placeholder="Poject Name" />
        <CustomSelect
          options={projectStatusOption}
          placeholder="Poject Status"
        />
      </div>

      <div className="w-full overflow-x-scroll">
        <ICTable
          loading={false}
          columns={columns}
          dataSource={OrdersData}
          pageSize={size}
          totalPages={OrdersData?.length}
          onPaginationChange={onPaginationChange}
          onTableChange={onTableChange}
          showPagination={true}
        />
      </div>
    </div>
  );
};

export default AllOrders;
