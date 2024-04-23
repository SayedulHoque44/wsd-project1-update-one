"use client";

import React, { useState } from "react";
import Link from "next/link";

import { Button, Tag } from "antd";

import ICTable from "@/components/ciApp/ui/ICTable";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { IApi } from "@/types/api";
import { ApiData } from "@/constants/apiData";

const ApiListPage = () => {
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  let columns = [
    { title: "SL", dataIndex: "id" },
    { title: "Company Name", dataIndex: "companyName" },
    { title: "API Name", dataIndex: "apiName" },
    { title: "Publishable Key", dataIndex: "publishableKey" },
    { title: "Secret Key", dataIndex: "secretKey" },

    {
      title: "Status",
      dataIndex: "status",
      render: (data: boolean) => {
        return (
          <div>
            {data ? (
              <Tag color="success">Connected</Tag>
            ) : (
              <Tag color="error">Disconnected</Tag>
            )}
          </div>
        );
      },
    },
    {
      title: "Action",
      render: (data: IApi) => {
        return (
          <div>
            <button className="rounded-md bg-blue-500 px-3 py-1 text-[14px]  text-white transition-all hover:bg-white hover:text-blue-600 hover:shadow-md">
              Run
            </button>
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
      <Breadcrumb pageName="API List" />

      <div className="-mt-2 mb-4 flex items-center justify-end gap-3">
        <Link href={"/c/createAdmin"}>
          <Button
            style={{ background: "#1677ff" }}
            type="primary"
            size={"middle"}
          >
            Sub admin
          </Button>
        </Link>
      </div>

      <ICTable
        loading={false}
        columns={columns}
        dataSource={ApiData}
        pageSize={size}
        totalPages={ApiData?.length}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default ApiListPage;
