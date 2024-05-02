"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CustomForm from "@/components/Form/Form";
import CustomInput from "@/components/Form/Input";
import { Button, Input, Select } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { BsCheck } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";

export default function OrderDetailsPage({
  params,
}: {
  params: { orderId: string };
}) {
  const [status, setStatus] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  const onSubmitForm = (value: FieldValues) => {};

  const handleChange = (value: string) => {
    setStatus(value);
  };
  return (
    <div className="flex min-h-[80vh] w-full flex-col items-center justify-center p-4 md:min-h-[60vh] md:p-6  2xl:p-10 ">
      <div className="mb-4 flex w-full items-center justify-end">
        <button
          onClick={() => router.back()}
          className="rounded-md bg-blue-500 px-3 py-1 text-[14px] text-white transition-all hover:bg-white hover:text-blue-600 hover:shadow-md"
        >
          Back
        </button>
      </div>
      <div className="space-y-4">
        <h1 className="text-center text-2xl font-semibold underline">
          {status === "pending"
            ? "Pending Order Page View"
            : status === "payment"
              ? "Payment Order Page View"
              : status === "wating"
                ? " Wating Order Page View"
                : status === "working"
                  ? " Working Order Page View"
                  : status === "complete"
                    ? " Complete Order Page View"
                    : status === "delivery"
                      ? " Delivery Order Page View"
                      : status === "cancelled"
                        ? " Cancelled Order Page View"
                        : "Pending Order Page View"}
        </h1>
        <div className="mx-auto flex w-full max-w-4xl items-center gap-10">
          <div className="flex flex-col gap-2">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center"
            >
              <button className="bg-green-500 px-2 py-2 font-semibold text-slate-900">
                {status === "pending" ? "All sub admin" : "Only me"}
              </button>
              <div className="bg-rose-500 p-2 text-white">
                <BsCheck className="h-6 w-6" />
              </div>
            </div>
            <button
              className={`bg-cyan-500 font-semibold text-slate-900 ${isOpen ? "block" : "hidden"}`}
            >
              {status === "pending" ? "Only me" : "All sub admin"}
            </button>
          </div>
          <div className="flex gap-10">
            {status === "pending" ? (
              <>
                <button className="rounded-md bg-violet-500 px-5 py-1.5 text-white">
                  Set Project Amount
                </button>
                <button className="rounded-md bg-violet-500 px-5 py-1.5 text-white">
                  minimum pay
                </button>
              </>
            ) : status === "payment" ? (
              ""
            ) : status === "wating" ? (
              <button className="rounded-md bg-violet-500 px-5 py-1.5 text-white">
                profit set
              </button>
            ) : status === "working" ? (
              <div className="flex flex-col gap-2">
                <button className="p-2 rounded-lg bg-orange-500 text-white">Project documentation upload</button>
                <div className="flex items-center gap-2 bg-lime-100 p-2">
                  <h1 className="text-sm">Url</h1>
                  <Input type="text" placeholder="Enter documentaion url"/>
                  <button className="bg-green-500 text-white px-2 py-1">Save</button>
                </div>
              </div>
            ) : status === "complete" ? (
              ""
            ) : status === "delivery" ? (
              ""
            ) : status === "cancelled" ? (
              ""
            ) : (
              <>
                <button className="rounded-md bg-violet-500 px-5 py-1.5 text-white">
                  Set Project Amount
                </button>
                <button className="rounded-md bg-violet-500 px-5 py-1.5 text-white">
                  minimum pay
                </button>
              </>
            )}
            <Select
              className="py-2"
              style={{ width: 120 }}
              onChange={handleChange}
              placeholder={"Select Status"}
              options={[
                { value: "pending", label: "Pending" },
                { value: "payment", label: "Payment" },
                { value: "wating", label: "Wating" },
                { value: "working", label: "Working" },
                { value: "complete", label: "Complete" },
                { value: "delivery", label: "Delivery" },
                { value: "cancelled", label: "Cancelled" },
              ]}
            />
            <button className="w-24 h-10 rounded-md bg-slate-800 px-5 py-1.5 text-white">
              Save
            </button>
          </div>
        </div>
        <div className=" flex">
          <div className="flex flex-1 flex-col justify-center gap-5">
            <h1 className="text-center font-semibold uppercase">
              Visa Applicaition
            </h1>
            <div className="mt-5 grid grid-cols-5 gap-5">
              <span>Diplomatic</span>
              <span>Ordinary</span>
              <span>Short Term Visa</span>
              <span>Tourism</span>
              <span>Transit</span>
              <span>Work Visa</span>
              <span>Temporary Stay</span>
              <span>Establishing Residence </span>
              <span>Privileged</span>
            </div>
          </div>
          <div className="flex w-[20%] flex-col items-center justify-center gap-2">
            <FaEdit size={30} className="text-blue-400" />
            <div className="flex h-[250px] w-[300px] items-center justify-center border-2 bg-white p-5 font-bold uppercase dark:border-slate-500">
              <span className="space-y-3">
                Glue <br /> Photo <br /> Here
              </span>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="my-2 text-center font-semibold uppercase">
            All Fields must be completed in order to process the application
          </h1>

          <div>
            <CustomForm onSubmit={onSubmitForm}>
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2">
                  <CustomInput
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    label="Full Name"
                  />
                </div>
                <CustomInput
                  type="text"
                  name="dateOfBirth"
                  placeholder="Date Of Birth"
                  label="Date Of Birth"
                />
                <CustomInput
                  type="text"
                  name="placeOfBirth"
                  placeholder="Place Of Birth"
                  label="Place Of Birth"
                />
                <CustomInput
                  type="text"
                  name="currentNationality"
                  placeholder="Current Nationality"
                  label="Current Nationality"
                />
                <CustomInput
                  type="text"
                  name="maritalStatus"
                  placeholder="Marital Status"
                  label="Marital Status"
                />
                <CustomInput
                  type="text"
                  name="passportNo"
                  placeholder="Passport No"
                  label="Passport No"
                />
                <CustomInput
                  type="text"
                  name="issuedId"
                  placeholder="Issued In"
                  label="Issued In"
                />
                <CustomInput
                  type="text"
                  name="issuedOn"
                  placeholder="Issued On"
                  label="Issued On"
                />
                <CustomInput
                  type="text"
                  name="expiryOn"
                  placeholder="Expiry On"
                  label="Expiry On"
                />
                <CustomInput
                  type="text"
                  name="employerOrSchool"
                  placeholder="Employer Or School"
                  label="Employer Or School"
                />
                <CustomInput
                  type="text"
                  name="positionHeld"
                  placeholder="Position Held "
                  label="Position Held"
                />
                <div className="col-span-2">
                  <CustomInput
                    type="text"
                    name="placeOfWork"
                    placeholder="Place Of Work"
                    label="Place Of Work"
                    className="col-span-2"
                  />
                </div>
              </div>
            </CustomForm>
          </div>
        </div>
        <Image
          src={
            "https://s3-alpha-sig.figma.com/img/6508/0df1/d413f1e6fd2e59a435dd15d6499391fe?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nJxZMtw83DQ7ZN7jS79Dfop~xbWXN4OoMsi-x5VfmMzpx2ZwIPV2tKM-xfqetbcY93W-vWK27TQeZaTEyGYsfUX0O7vvL1aMsXdI91EsG9dqdOvgy6HFeIPnXtnanTIvKfRFEwrRWzIW6tqRFMXkuNZgsjJcS-WrQJ5TnZLOt3iXgFzJoUoWyqSr~6y2khzDR9L7t3fYNPvalCRHZnpxvIbrw9j433cJL7opXTM15wPr5YHwWVVEKfQU4MQ54uCPOiZHfUszxqVcjdir2EzXj4f8pGOyXjTFvGcjHnOZqFujzvHnUqDGdLmUA2ZWBEhqwaXC3~uia9lTHevH5rcRBw__"
          }
          height={80}
          width={80}
          alt="pdf"
          className="ml-auto"
        />
      </div>
    </div>
  );
}
