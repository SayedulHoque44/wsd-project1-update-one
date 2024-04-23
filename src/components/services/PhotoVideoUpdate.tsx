import Image from "next/image";
import { useRef, useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import PrimaryButton from "@/components/button/PrimaryButton";
import SelectSingleOrMultiImgOrVideo from "../Upload/SelectSIngleOrMultiImgOrVideo";
import SelectSingleOrMultiImg from "../Upload/SelectSingleOrMultiImg";
// import SelectSingleOrMultiImg from "../Upload/SelectSingleOrMultiImg";

const PhotoVideoUpdate = () => {
  const [file, setFile] = useState("");
  const [logoFile, setLogoFile] = useState("");

  return (
    <div className="container mx-auto border-slate-300 shadow-4 ">
      <MapPhotoVideoUplod file={file} setFile={setFile} />
      <CompanySupportLogo file={logoFile} setFile={setLogoFile} />
    </div>
  );
};

const MapPhotoVideoUplod = ({ file, setFile }: { file: any; setFile: any }) => {
  return (
    <>
      <h2 className="text-center text-2xl font-bold">Map Photo/Video Upload</h2>
      <div className="mb-3 flex flex-col items-center gap-3">
        {/* ------Select Logo -------- */}
        <SelectSingleOrMultiImgOrVideo
          file={file}
          setFile={setFile}
          title="Select Photo/Video"
        />
      </div>
    </>
  );
};

const CompanySupportLogo = ({ file, setFile }: { file: any; setFile: any }) => {
  return (
    <>
      <h2 className="text-center text-2xl font-bold">Support Company Logo</h2>
      <div className="mb-3 flex flex-col items-center gap-3">
        {/* ------Select Logo -------- */}
        <SelectSingleOrMultiImg
          file={file}
          setFile={setFile}
          title="Select Logos"
          multiple={true}
        />
      </div>
    </>
  );
};

export default PhotoVideoUpdate;
