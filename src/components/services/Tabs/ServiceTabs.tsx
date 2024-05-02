"use client";

import { useState } from "react";

import CardThreeUpdate from "../CardThreeUpdate ";
import CardTwoUpdate from "../CardTwoUpdate";
import CardFourUpdate from "../CardFourUpdate";

import PhotoVideoUpdate from "../PhotoVideoUpdate";
import BannerLogoPage from "../BannerLogoPage ";
import Tab from "../Tab";
import PaymentIcon from "../PaymentIcon";

const Tabs = [
  {
    name: `Logo/Banner`,
    state: "logo",
  },
  {
    name: `3 Card`,
    state: "threeCard",
  },
  {
    name: `4 Card`,
    state: "fourCard",
  },
  {
    name: `2 Card`,
    state: "secondCard",
  },
  {
    name: `Banner/Company_logo`,
    state: "photoVideo",
  },
  {
    name: `Payment Icon`,
    state: "paymentIcon",
  },
];

const ServiceTab = () => {
  const [isVisible, setIsVisible] = useState<string | null>(null);
  return (
    <>
      {/* Tabs */}
      <div className="my-5 flex justify-center">
        {Tabs.map((tab, index) => (
          <Tab
            key={index}
            name={tab.name}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
          />
        ))}
      </div>

      {/* Tabs body */}
      <div>{isVisible === "Logo/Banner" && <BannerLogoPage />}</div>
      <div>{isVisible === "3 Card" && <CardThreeUpdate />}</div>
      <div>{isVisible === "4 Card" && <CardFourUpdate />}</div>
      <div>{isVisible === "2 Card" && <CardTwoUpdate />}</div>
      <div>{isVisible === "Banner/Company_logo" && <PhotoVideoUpdate />}</div>
      <div>{isVisible === "Payment Icon" && <PaymentIcon />}</div>
    </>
  );
};

//

export default ServiceTab;
