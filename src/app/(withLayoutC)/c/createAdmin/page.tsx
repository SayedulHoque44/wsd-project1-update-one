"use client";

import React, { useState } from "react";
import Link from "next/link";

import { Button, Switch } from "antd";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa";

import ICTable from "@/components/ciApp/ui/ICTable";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { AdminData } from "@/constants/adminData";
import { IAdmin } from "@/types/admin";

const AdminListPage = () => {
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  let columns = [
    { title: "SL", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "User Name", dataIndex: "userName" },
    { title: "G-mail", dataIndex: "email" },
    {
      title: "Access List",
      dataIndex: "accessList",
      render: (data: string[]) =>
        data.map((item) => (
          <span className="mx-1" key={item}>
            {item}
          </span>
        )),
    },

    {
      title: "Action",
      render: (data: IAdmin) => {
        return (
          <div className="flex w-[120px] items-center justify-between">
            <Switch
              style={{ background: data?.active ? "#1677ff" : "gray" }}
              size="small"
              value={data.active}
              onClick={() => onActiveChange(data.id)}
            />
            <CiEdit size={24} />

            <RiDeleteBin5Line size={24} color="red" />
          </div>
        );
      },
    },
  ];

  const onActiveChange = (id: string) => {
    console.log(`switch to ${id}`);
  };

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

  return (
    <div>
      <Breadcrumb pageName="All Sub Admins" />

      <div className="-mt-2 mb-4 flex items-center justify-end gap-3">
        <Link href={"/c/api"}>
          <Button
            style={{ background: "#1677ff" }}
            type="primary"
            size={"middle"}
          >
            API
          </Button>
        </Link>
        <Link href={"/c/createAdmin/add-new"}>
          {" "}
          <Button
            style={{ background: "#1677ff" }}
            type="primary"
            icon={<FaUserPlus className="-mb-[2px]" />}
            size={"middle"}
          >
            Create Sub-Admin
          </Button>
        </Link>
      </div>

      <ICTable
        loading={false}
        columns={columns}
        dataSource={AdminData}
        pageSize={size}
        totalPages={AdminData?.length}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default AdminListPage;
