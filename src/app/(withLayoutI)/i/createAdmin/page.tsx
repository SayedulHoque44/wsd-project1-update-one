"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button, Col, Modal, Row, Switch, message } from "antd";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa";
import ICTable from "@/components/ui/ICTable";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { IAdmin } from "@/types/admin";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import {
  addAdmin,
  removeAdmin,
  statusChange,
  updateAdmin,
} from "@/redux/fetures/admin/adminSlice";
import CustomForm from "@/components/Form/Form";
import CustomInput from "@/components/Form/Input";
import CustomTreeSelect from "@/components/Form/TreeSelect";

const AdminListPage = () => {
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const dispatch = useAppDispatch();
  const adminDatas = useAppSelector((state) => state.admin);
  const handleStatusChange = (id: string, active: boolean) => {
    dispatch(statusChange({ id, active }));
  };

  const handleDeleteAdmin = (id: string) => {
    dispatch(removeAdmin({ id }));
    message.open({
      type: "success",
      content: "Admin deleted successfully",
    });
  };
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
              checked={data.active}
              onChange={(checked) => handleStatusChange(data.id, checked)}
            />
            <UpdateAdminModal updateData={data} />
            <RiDeleteBin5Line
              size={24}
              color="red"
              onClick={() => handleDeleteAdmin(data.id)}
            />
          </div>
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

  return (
    <div className="w-full p-4 md:p-6 2xl:p-10">
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
        <AddSubAdminModal />
      </div>

      <ICTable
        loading={false}
        columns={columns}
        dataSource={adminDatas}
        pageSize={size}
        totalPages={adminDatas?.length}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default AdminListPage;
const AddSubAdminModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const adminDatas = useAppSelector((state) => state.admin);
  const onSubmit = async (data: any) => {
    const { password, rePassword, ...remainingData } = data;
    const lastAdminData = adminDatas.at(-1);
    const lastAdminId: string = lastAdminData?.id as string;
    const string = parseInt(lastAdminId.replace(/\D/g, ""));
    const addAdminData = {
      id: `admin${Number(string) + 1}`,
      ...remainingData,
      active: false,
    };
    dispatch(addAdmin(addAdminData));
    closeModal();
  };

  const treeData = [
    {
      title: "Order Access",
      value: "orders",
      key: "orders",
      children: [
        {
          title: "Pending",
          value: "orders-pending",
          key: "orders-pending",
        },
        {
          title: "Payment",
          value: "orders-payment",
          key: "orders-payment",
        },
        {
          title: "Waiting",
          value: "orders-waiting",
          key: "orders-waiting",
        },
        {
          title: "Working",
          value: "orders-working",
          key: "orders-working",
        },
        {
          title: "Complete",
          value: "orders-complete",
          key: "orders-complete",
        },
        {
          title: "Canceled",
          value: "orders-canceled",
          key: "orders-canceled",
        },
      ],
    },
    {
      title: "Contact Us",
      value: "contactUs",
      key: "0-1",
      children: [
        {
          title: "All",
          value: "all",
          key: "all",
        },
      ],
    },
    {
      title: "Live Chat",
      value: "liveChat",
      key: "liveChat",
      children: [
        {
          title: "Offline Payment Issue",
          value: "liveChat-oflinePaymentIssue",
          key: "liveChat-oflinePaymentIssue",
        },
        {
          title: "Online Payment Issue",
          value: "liveChat-onlinePaymentIssue",
          key: "liveChat-onlinePaymentIssue",
        },
        {
          title: "Order Problems",
          value: "liveChat-orderProblems",
          key: "liveChat-orderProblems",
        },
        {
          title: "Account Problems",
          value: "liveChat-accountProblems",
          key: "liveChat-accountProblems",
        },
        {
          title: "Work Problem",
          value: "liveChat-workProblems",
          key: "liveChat-workProblems",
        },
        {
          title: "Others",
          value: "liveChat-others",
          key: "liveChat-others",
        },
      ],
    },
  ];
  const showModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Button
        onClick={showModal}
        style={{ background: "#1677ff" }}
        type="primary"
        icon={<FaUserPlus className="-mb-[2px]" />}
        size={"middle"}
      >
        Create Sub-Admin
      </Button>
      <Modal
        open={isModalOpen}
        onCancel={closeModal}
        footer={null}
        width={600}
        centered
      >
        <CustomForm className="w-full" onSubmit={onSubmit}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p className="mb-5 text-center text-xl font-semibold">Add Sub Admin</p>
            <Row gutter={{ xl: 24 }}>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <CustomInput type="text" name="name" label="Name" />
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <CustomInput type="text" name="userName" label="User Name" />
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <CustomInput type="text" name="email" label="Email" />
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <CustomInput type="password" name="password" label="Password" />
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <CustomInput
                  type="password"
                  name="rePassword"
                  label="Re Password"
                />
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <CustomTreeSelect
                  name="accessList"
                  label="Access"
                  treeData={treeData}
                />
              </Col>
              <Col className="gutter-row justify-end " span={24}>
                <Button htmlType="submit" type="primary">
                  Create
                </Button>
              </Col>
            </Row>
          </div>
        </CustomForm>
      </Modal>
    </div>
  );
};
const UpdateAdminModal = ({ updateData }: { updateData: any }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const onSubmit = async (data: any) => {
    const { password, rePassword, ...remainingData } = data;
    const { id, active } = updateData;
    const updateAdminData = {
      id,
      ...remainingData,
      active,
    };
    dispatch(updateAdmin(updateAdminData));
    closeModal();
  };

  const treeData = [
    {
      title: "Order Access",
      value: "orders",
      key: "orders",
      children: [
        {
          title: "Pending",
          value: "orders-pending",
          key: "orders-pending",
        },
        {
          title: "Payment",
          value: "orders-payment",
          key: "orders-payment",
        },
        {
          title: "Waiting",
          value: "orders-waiting",
          key: "orders-waiting",
        },
        {
          title: "Working",
          value: "orders-working",
          key: "orders-working",
        },
        {
          title: "Complete",
          value: "orders-complete",
          key: "orders-complete",
        },
        {
          title: "Canceled",
          value: "orders-canceled",
          key: "orders-canceled",
        },
      ],
    },
    {
      title: "Contact Us",
      value: "contactUs",
      key: "0-1",
      children: [
        {
          title: "All",
          value: "all",
          key: "all",
        },
      ],
    },
    {
      title: "Live Chat",
      value: "liveChat",
      key: "liveChat",
      children: [
        {
          title: "Offline Payment Issue",
          value: "liveChat-oflinePaymentIssue",
          key: "liveChat-oflinePaymentIssue",
        },
        {
          title: "Online Payment Issue",
          value: "liveChat-onlinePaymentIssue",
          key: "liveChat-onlinePaymentIssue",
        },
        {
          title: "Order Problems",
          value: "liveChat-orderProblems",
          key: "liveChat-orderProblems",
        },
        {
          title: "Account Problems",
          value: "liveChat-accountProblems",
          key: "liveChat-accountProblems",
        },
        {
          title: "Work Problem",
          value: "liveChat-workProblems",
          key: "liveChat-workProblems",
        },
        {
          title: "Others",
          value: "liveChat-others",
          key: "liveChat-others",
        },
      ],
    },
  ];
  const showModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <CiEdit className="cursor-pointer" onClick={showModal} size={24} />
      <Modal
        open={isModalOpen}
        onCancel={closeModal}
        footer={null}
        width={600}
        centered
      >
        <CustomForm className="w-full" onSubmit={onSubmit}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p className="mb-5 text-center text-xl font-semibold">Update Sub Admin</p>
            <Row gutter={{ xl: 24 }}>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <CustomInput
                  type="text"
                  name="name"
                  label="Name"
                  defaultValue={updateData.name}
                />
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <CustomInput
                  type="text"
                  name="userName"
                  label="User Name"
                  defaultValue={updateData.userName}
                />
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <CustomInput
                  type="text"
                  name="email"
                  label="Email"
                  defaultValue={updateData.email}
                />
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <CustomInput type="password" name="password" label="Password" />
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <CustomInput
                  type="password"
                  name="rePassword"
                  label="Re Password"
                />
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <CustomTreeSelect
                  name="accessList"
                  label="Access"
                  treeData={treeData}
                />
              </Col>
              <Col className="gutter-row justify-end " span={24}>
                <Button htmlType="submit" type="primary">
                  Create
                </Button>
              </Col>
            </Row>
          </div>
        </CustomForm>
      </Modal>
    </div>
  );
};
