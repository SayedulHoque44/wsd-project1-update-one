"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";
import SelectGroupTwo from "@/components/SelectGroup/SelectGroupTwo";
import ICTable from "@/components/ui/ICTable";
import CustomSearch from "@/components/ui/CustomSearch";
import CustomSelect from "@/components/ui/CustomSelect";
import { OnlinePaymentData } from "@/constants/paymentData";
import { IOnlinePayment } from "@/types/payment";
import { DatePicker } from "antd";
import Link from "next/link";
import { useState } from "react";

const OnlinePaymentChecking = () => {
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  let columns = [
    { title: "No", dataIndex: "no" },
    { title: "Payment ID", dataIndex: "paymentId" },
    { title: "Project Name", dataIndex: "projectName" },
    { title: "Payment Type", dataIndex: "paymentType" },
    { title: "Account Name", dataIndex: "accountName" },
    { title: "Account Number", dataIndex: "accountNumber" },
    { title: "Transaction id", dataIndex: "transactionId" },
    { title: "Pay Money", dataIndex: "payMoney" },
    { title: "Day of payment", dataIndex: "paymentDay" },
    { title: "Status", dataIndex: "status" },
    {
      title: "See",
      render: (data: IOnlinePayment) => {
        return (
          <span>
            <Link href={`/c/onlinepayment-checking/view/${data?.paymentId}`}>
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
  const onSearch = (value: string) => {
    console.log(value);
  };
  const onStartDate = (value: string) => {
    console.log(value);
  };
  const onEndDate = (value: string) => {
    console.log(value);
  };

  return (
    <div>
      <Breadcrumb pageName="Online Checking Payment" />

      <div className="grid w-full  grid-cols-1 items-center justify-between gap-3 py-4 md:grid-cols-3 xl:grid-cols-4">
        <CustomSearch onSearch={onSearch} />
        <div className="col-span-2 flex items-center justify-center gap-2">
          <DatePicker onChange={onStartDate} />
          <span>To</span>
          <DatePicker onChange={onStartDate} />
        </div>
        <CustomSelect options={paymentStatus} placeholder="Payment Status" />
      </div>

      <ICTable
        loading={false}
        columns={columns}
        dataSource={OnlinePaymentData}
        pageSize={size}
        totalPages={OnlinePaymentData?.length}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default OnlinePaymentChecking;
