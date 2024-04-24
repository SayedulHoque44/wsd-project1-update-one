import React, { useState } from 'react';
import Modal from '../modal/Modal';
import CompanyProfile from '../temp/CompanyProfile';
export interface ProfilesData {
    sl?: number;
      id?: number;
      name: string;
      title: string;
      image:string;
      homeAddress: string;
      gmail: string;
      file?: any;
}
const CreateCompanyPolicy:React.FC = () => {
    interface ProfilesData {
        sl?: number;
          id?: number;
          name: string;
          title: string;
          image:string;
          homeAddress: string;
          gmail: string;
          file?: any;
    }
    const [companyProfiles, setcompanyProfiles] = useState<ProfilesData[]>([
        {
          sl: 1,
          id: 1,
          name: "Mike",
          title: "CEO",
          image:
            "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
          homeAddress: "Kolkata",
          gmail: "something2003@gmail.com",
        },
      ]);
      const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editIndex, setEditIndex] = useState<number|null>(null);
  interface ProfileData{
    file?: any;
    name: string;
    title: string
    gmail: string;
    homeAddress: string;
  }
  const [createCompanyProfileData, setCreateCompanyProfileData] = useState<ProfileData>({
    file: null,
    name: "",
    title: "",
    gmail: "",
    homeAddress: "",
  });
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCreateCompanyProfileData({
      ...createCompanyProfileData,
      [name]: value,
    });
    const HandleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {files} = e.target;
        const selectedFiles = files as FileList;
        setCreateCompanyProfileData({
          ...createCompanyProfileData,
          file: selectedFiles[0],
        });
      }
  };
  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      // Update existing data
      setcompanyProfiles((prevCompanyProfiles:any) =>
        prevCompanyProfiles.map((item:any, index:number) =>
          index === editIndex ? createCompanyProfileData : item
        )
      );
    } else {
      // new profile will be add
      const newSl = companyProfiles.length + 1;
      setcompanyProfiles((prevCompanyProfiles:any) => [
        ...prevCompanyProfiles,
        { ...createCompanyProfileData, sl: newSl },
      ]);
    }

    setIsVisible(false);
    setCreateCompanyProfileData({
      file: null,
      name: "",
      title: "",
      gmail: "",
      homeAddress: "",
    });
    setIsEditing(false);
    setEditIndex(null);
  };
  const handleEditClick = (index:number) => {
    setIsEditing(true);
    setEditIndex(index);
    setCreateCompanyProfileData(companyProfiles[index]);
    setIsVisible(true);
  };
    return (
        <div>
      <div className="flex items-end place-items-end justify-end m-10">
      
      </div>
      <div>
      <div>
          <CompanyProfile/>
        </div>
        {/* <div>
          <CompanyProfile Pdata={companyProfiles} setcompanyProfiles={setcompanyProfiles} onEditClick={handleEditClick} />
        </div> */}
      </div>
      <Modal isVisible={isVisible} onClose={setIsVisible}>
        <div className="w-[500px]  ">
          <h1 className="text-xl font-bold text-center text-white p-4">
            Create Company Profile
          </h1>
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-2">
          <div className="mb-2">
              <label
                className="block text-gray-800 text-sm font-bold mb-2"
                htmlFor="file"
              >
                Image
              </label>
              <input
                type="file"
                id="file"
                name="file"
                // onChange={HandleFileChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-gray-800 text-sm font-bold mb-2"
                htmlFor="file"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={createCompanyProfileData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-gray-800 text-sm font-bold mb-2"
                htmlFor="file"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={createCompanyProfileData.title}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-2">
              <label
                className="block text-gray-800 text-sm font-bold mb-2"
                htmlFor="file"
              >
                Gmail
              </label>
              <input
                type="text"
                id="gmail"
                name="gmail"
                value={createCompanyProfileData.gmail}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
    );
};

export default CreateCompanyPolicy;