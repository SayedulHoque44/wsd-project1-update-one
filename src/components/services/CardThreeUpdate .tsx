import React, { useRef, useState } from "react";
import PrimaryButton from "@/components/button/PrimaryButton";
import { FieldValues } from "react-hook-form";
import ServiceCard from "./ServiceCard";

//
const CardThreeUpdate = () => {
  interface ModalProps {
    isVisible: boolean;
    onClose: (this: Window, ev: Event) => any;
    children: React.ReactNode;
    hideCloseIcon?: boolean;
  }

  const [card, setCard] = useState<string>("card One");
  const [C1File, setC1File] = useState("");
  const [C2File, setC2File] = useState("");
  const [C3File, setC3File] = useState("");
  const C1Editor = useRef(null);
  const C2Editor = useRef(null);
  const C3Editor = useRef(null);
  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");
  const [content3, setContent3] = useState("");

  const C1Submit = (data: FieldValues) => {
    console.log(data);
  };
  const C2Submit = (data: FieldValues) => {
    console.log(data);
  };
  const C3Submit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <>
      <div className="border-slate-300 p-5 shadow-4 md:px-20 md:py-10">
        {/* button  and update button  */}
        <div className="mb-10 flex justify-around gap-4">
          <div className="mx-auto flex items-center justify-center gap-2">
            <span onClick={() => setCard("card one")}>
              <PrimaryButton text={"Card One"} />
            </span>
            <span onClick={() => setCard("card two")}>
              {" "}
              <PrimaryButton text={"Card Two"} />
            </span>
            <span onClick={() => setCard("card three")}>
              {" "}
              <PrimaryButton text={"Card Three"} />
            </span>
          </div>
        </div>
        <h2 className="m-4 mb-2 text-center text-2xl font-bold uppercase ">
          {card === "card two" || card === "card one" || card === "card three"
            ? card
            : "no card selected"}
        </h2>
        {card === "card one" && (
          <ServiceCard
            content={content1}
            setContent={setContent1}
            onSubmitForm={C1Submit}
            file={C1File}
            setFile={setC1File}
            editor={C1Editor}
          />
        )}
        {card === "card two" && (
          <ServiceCard
            content={content2}
            setContent={setContent2}
            onSubmitForm={C2Submit}
            file={C2File}
            setFile={setC2File}
            editor={C2Editor}
          />
        )}
        {card === "card three" && (
          <ServiceCard
            content={content3}
            setContent={setContent3}
            onSubmitForm={C3Submit}
            file={C3File}
            setFile={setC3File}
            editor={C3Editor}
          />
        )}
      </div>
    </>
  );
};

export default CardThreeUpdate;
