import { GrAttachment } from "react-icons/gr";
import { IoSendSharp } from "react-icons/io5";

const SendMessage = () => {
  return (
    <div className="w-full bg-[#9AC4CD]  p-2 dark:bg-slate-500">
      <form className="flex w-full items-center justify-between gap-2">
        <GrAttachment className="h-6 w-6 text-slate-800" />
        <input
          className="w-full rounded-full px-3 py-2 outline-none"
          type="text"
          name="search"
          placeholder="Enter your message..."
          id="search"
        />
        <IoSendSharp className="h-6 w-6 text-slate-800" />
      </form>
    </div>
  );
};

export default SendMessage;
