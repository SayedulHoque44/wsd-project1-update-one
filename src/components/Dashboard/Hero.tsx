"use client";
import React, { useState } from "react";

import CardDataStats from "../CardDataStats";
import { DashboardData } from "@/constants/dashboardData";

import LineChart from "../ui/CustomLineChart";

import dynamic from "next/dynamic";
import RenewChart from "../ui/RenewChart";

const ReBar = dynamic(
  () => import("recharts").then((module) => module.BarChart),
  { ssr: false },
);

const ECommerce: React.FC = () => {
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {DashboardData.map((data, index) => (
          <CardDataStats key={index} name={data.name} number="$3.456K">
            <data.icon />
          </CardDataStats>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-8">
          <LineChart />
        </div>

        {/*  */}
        <div className="col-span-12">
          <RenewChart />
        </div>
        {/* <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard /> */}
      </div>
    </>
  );
};

export default ECommerce;
