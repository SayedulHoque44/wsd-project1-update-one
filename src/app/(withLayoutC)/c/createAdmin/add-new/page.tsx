"use client";

import React from "react";
import Link from "next/link";
import { Button, Col, Row, message } from "antd";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CustomForm from "@/components/Form/Form";
import CustomInput from "@/components/Form/Input";
import CustomTreeSelect from "@/components/Form/TreeSelect";

const AddNewAdminPage = () => {
  const onSubmit = async (values: any) => {
    // message.loading("Creating...");
    message.success("User created successfully!");
    console.log(values);
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

  return (
    <div className="w-full p-4 md:p-6 2xl:p-10">
      <Breadcrumb pageName="Create Sub-Admin" />

      <div className="-mt-2 mb-4 flex items-center justify-end gap-3">
        <Link href={"/c/createAdmin"}>
          <Button
            style={{ background: "#1677ff" }}
            type="primary"
            size={"middle"}
          >
            Back
          </Button>
        </Link>
      </div>
      <div>
        <CustomForm className="w-full" onSubmit={onSubmit}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              User Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <CustomInput type="text" name="name" label="Name" />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <CustomInput type="text" name="userName" label="User Name" />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <CustomInput type="text" name="email" label="Email" />
              </Col>

              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <CustomInput type="password" name="password" label="Password" />
              </Col>
              <Col
                className="gutter-row"
                span={8}
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
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <CustomTreeSelect
                  name="access"
                  label="Access"
                  treeData={treeData}
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <CustomInput type="text" name="loginUrl" label="Login Url" />
              </Col>
            </Row>
          </div>

          <Button htmlType="submit" type="primary">
            Create
          </Button>
        </CustomForm>
      </div>
    </div>
  );
};

export default AddNewAdminPage;
