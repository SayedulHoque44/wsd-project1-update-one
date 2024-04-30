"use client";
import CreateGlobalLocations from "@/components/ui/MergedComponents/CreateGlobalLocations";
import CreateTopic from "@/components/ui/MergedComponents/createTopic";
import OfficeAddress from "@/components/ui/MergedComponents/officeaddres/OfficeAddress";
import BusinessSolutionManu from "@/components/ui/temp/BusinessSolutionManu";
import ContactUsDropDownTable from "@/components/ui/temp/ContactUsDropDownTable";
import CustemsoftwareManu from "@/components/ui/temp/CustemsoftwareManu";
import SubsribesManuItems from "@/components/ui/temp/SubsribesManuItems";

import React, { useState } from "react";

const Footers = () => {
  const [currentTab, setCurrentTab] = useState("tab1");
  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };

  // Table open triger

  const [dropdown, setDropdown] = useState({
    officeDropDown: false,
    ContactUsTable: false,
    globalLocationDropDown: false,
    securityDropDown: false,
    subsribesManu: false,
    consultingDropDown: false,
    customSoftware: false,
    businessSolution: false,
  });

  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isMessageSaved, setIsMessageSaved] = useState(false);
  const [Consulting, setConsulting] = useState(false);
  const [ContactUsTable, setContactUsTable] = useState(false);
  // const []
  const sectionToStateMapping = {
    "Office address": "officeDropDown",
    "Contact Us": "ContactUsTable",
    Subsribes: "subsribesManu",
    "Global location": "globalLocationDropDown",
    "Security system": "securityDropDown",
    "Custom software development": "customSoftware",
    "Best it & Business solution": "businessSolution",
    Consulting: "consultingDropDown",
  };
  // function handleFacebookClick() {
  //   window.location.href = "https://www.facebook.com/";
  // }

  //   const handleButtonClick = (item:any) => {
  //     if (item.title === "Consulting") {
  //       setConsulting(!Consulting);
  //     }
  //     setDropdown((prevState:any) => ({
  //       ...Object.keys(prevState).reduce((acc, key) => {
  //         acc[key] =
  //           key === sectionToStateMapping[item.title] ? !prevState[key] : false;
  //         return acc;
  //       }, {}),
  //     }));
  //   };
  return (
    <section className="w-full p-4 md:p-6 2xl:p-10">
      <div className="flex items-center justify-center gap-2 py-4 ">
        <button
          className={`${"tab1"} ${
            currentTab === "tab1" ? "activeTab" : ""
          }  rounded border-2 bg-blue-400 px-2 py-2 text-white hover:bg-blue-400 active:border-white  active:bg-blue-400 `}
          onClick={() => handleTabChange("tab1")}
        >
          Office address
        </button>

        <button
          className={`${"tab2"} ${
            currentTab === "tab2" ? "activeTab" : ""
          }  rounded border-2 bg-blue-400 px-2 py-2 text-white hover:bg-blue-400 active:border-white  active:bg-blue-400 `}
          onClick={() => handleTabChange("tab2")}
        >
          Global location
        </button>
        <button
          className={`${"tab3"} ${
            currentTab === "tab3" ? "activeTab" : ""
          }  active:bg rounded border-2 bg-blue-400 px-2 py-2 text-white hover:bg-blue-400 active:border-white  active:bg-blue-400 `}
          onClick={() => handleTabChange("tab3")}
        >
          Contact Us
        </button>
        <button
          className={`${"tab4"} ${
            currentTab === "tab4" ? "activeTab" : ""
          }  rounded border-2 bg-blue-400 px-2 py-2 text-white hover:bg-blue-400 active:border-white  active:bg-blue-400 `}
          onClick={() => handleTabChange("tab4")}
        >
          Subsribes
        </button>

        <button
          className={`${"tab5"} ${
            currentTab === "tab5" ? "activeTab" : ""
          }  rounded border-2 bg-blue-400 px-2 py-2 text-white hover:bg-blue-400 active:border-white  active:bg-blue-400 `}
          onClick={() => handleTabChange("tab5")}
        >
          Consulting
        </button>
        <button
          className={`${"tab6"} ${
            currentTab === "tab6" ? "activeTab" : ""
          }  rounded border-2 bg-blue-400 px-2 py-2 text-white hover:bg-blue-400 active:border-white  active:bg-blue-400 `}
          onClick={() => handleTabChange("tab6")}
        >
          Custom software development
        </button>
        <button
          className={`${"tab7"} ${
            currentTab === "tab7" ? "activeTab" : ""
          }  rounded border-2 bg-blue-400 px-2 py-2 text-white hover:bg-blue-400 active:border-white  active:bg-blue-400 `}
          onClick={() => handleTabChange("tab7")}
        >
          Best it & Business solution
        </button>
      </div>
      <div className="min-h-screen">
        {/* Buttons Contant */}
        {currentTab === "tab1" && (
          <div>
            {" "}
            <OfficeAddress />{" "}
          </div>
        )}
        {currentTab === "tab2" && (
          <div>
            <CreateGlobalLocations />
          </div>
        )}
        {currentTab === "tab3" && (
          <div>
            <ContactUsDropDownTable />
          </div>
        )}
        {currentTab === "tab4" && (
          <div>
            <SubsribesManuItems />
          </div>
        )}
        {currentTab === "tab5" && (
          <div>
            <CreateTopic />
          </div>
        )}
        {currentTab === "tab6" && (
          <div>
            <CustemsoftwareManu />
          </div>
        )}
        {currentTab === "tab7" && (
          <div>
            <BusinessSolutionManu />
          </div>
        )}
      </div>
    </section>
  );
};

export default Footers;
