import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SelectGroupTwo from "@/components/SelectGroup/SelectGroupTwo";
import UserTable from "@/components/Tables/UserTable";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "USUKC | ALL PAYMENTS",
  description: "This is Payment panel",
};

const ALLPayments = () => {
  return (
    <div>
      <Breadcrumb pageName="All Payments" />

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

      <UserTable />
    </div>
  );
};

export default ALLPayments;
