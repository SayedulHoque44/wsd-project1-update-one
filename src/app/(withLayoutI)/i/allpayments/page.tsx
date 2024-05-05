"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ICTable from "@/components/ui/ICTable";
import CustomSelect from "@/components/ui/CustomSelect";
import { PaymentsData } from "@/constants/paymentData";
import { IPayment } from "@/types/payment";
import { DatePicker } from "antd";
import Link from "next/link";
import React, { useState } from "react";

const ALLPayments = () => {
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  let columns = [
    { title: "No", dataIndex: "no" },
    { title: "Withdraw ID", dataIndex: "withdrawId" },
    { title: "Withdraw method", dataIndex: "withdrawMethod" },
    { title: "Account Name", dataIndex: "accountName" },
    { title: "Account Number", dataIndex: "accountNumber" },
    { title: "Withdraw Amount", dataIndex: "withdrawAmount" },
    { title: "Withdraw Day", dataIndex: "withdrawDay" },
    { title: "Status", dataIndex: "status" },
    {
      title: "Action",
      render: (data: IPayment) => {
        return (
          <span>
            <Link href={`/c/allpayments/view/${data?.withdrawId}`}>
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

  const paymentStatus = [
    {
      value: "All",
      label: "All",
    },
    {
      value: "Pending",
      label: "Pending",
    },
    {
      value: "Accepted",
      label: "Accepted",
    },
    {
      value: "Spam",
      label: "Spam",
    },
  ];

  const onStartDate = (value: string) => {
    console.log(value);
  };
  const onEndDate = (value: string) => {
    console.log(value);
  };

  return (
    <div className="w-full p-4 md:p-6 2xl:p-10">
      <Breadcrumb pageName="All Payments" />

      <div className="grid w-full  grid-cols-1 items-center justify-between gap-3 py-4 md:grid-cols-3">
        <div className="col-span-2 flex items-center gap-2">
          <DatePicker onChange={onStartDate} />
          <span>To</span>
          <DatePicker onChange={onStartDate} />
        </div>
        <CustomSelect options={paymentStatus} placeholder="Payment Status" />
      </div>

      <ICTable
        loading={false}
        columns={columns}
        dataSource={PaymentsData}
        pageSize={size}
        totalPages={PaymentsData?.length}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default ALLPayments;
