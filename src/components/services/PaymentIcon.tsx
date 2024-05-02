import Image from "next/image";
import { useRef, useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import PrimaryButton from "@/components/button/PrimaryButton";
import SelectSingleOrMultiImgOrVideo from "../Upload/SelectSIngleOrMultiImgAll";
import SelectSingleOrMultiImg from "../Upload/SelectSingleOrMultiImg";
import { Row } from "antd";
import CustomForm from "../Form/Form";
import CustomInput from "../Form/Input";
import { MdDelete } from "react-icons/md";
// import SelectSingleOrMultiImg from "../Upload/SelectSingleOrMultiImg";

const PaymentIcon = () => {
  const [file, setFile] = useState("");
  const [logoFile, setLogoFile] = useState("");

  return (
    <div className="container mx-auto space-y-4 border-slate-300 py-10 shadow-4">
      <MapPhotoVideoUplod file={file} setFile={setFile} />
      <CompanySupportLogo file={logoFile} setFile={setLogoFile} />
    </div>
  );
};

const MapPhotoVideoUplod = ({ file, setFile }: { file: any; setFile: any }) => {
  return (
    <>
      <h2 className="text-center text-2xl font-bold">Payment Icon</h2>
      <div className="mb-3 flex flex-col items-center gap-3">
        {/* ------Select Logo -------- */}
        <SelectSingleOrMultiImg
          file={file}
          setFile={setFile}
          title="Select File"
          multiple={true}
        />
        <PrimaryButton type="submit" text={"Uplode"} />
      </div>
    </>
  );
};

const CompanySupportLogo = ({ file, setFile }: { file: any; setFile: any }) => {
  const [url, setUrl] = useState(
    "https://cdn-icons-png.flaticon.com/512/1160/1160358.png",
  );
  const urlInputRef = useRef(null);
  return (
    <>
      <h2 className="text-center text-2xl font-bold">Social Media Link</h2>
      <div className="mb-3 flex flex-col items-center gap-3">
        {/* ------Select Logo -------- */}

        <SelectSingleOrMultiImg
          file={file}
          setFile={setFile}
          title="Select Logos"
        />
        <div className="flex items-center justify-center gap-5">
          <input
            ref={urlInputRef}
            type="text"
            name="socialLink"
            id="SL"
            className="w-[300px] rounded-full bg-slate-300 px-5 py-2 outline-none"
          />
          <span onClick={() => setUrl((urlInputRef as any)?.current?.value)}>
            <PrimaryButton text="Uplode" />
          </span>
        </div>
        {url && (
          <div className="flex items-center justify-center gap-10">
            <Image src={url} height={50} width={50} alt="icon" />
            <span>{url}</span>

            <MdDelete
              onClick={() => setUrl("")}
              size={30}
              className="cursor-pointer text-meta-1"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default PaymentIcon;
