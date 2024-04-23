import { Dispatch, SetStateAction } from "react";

const Tab = ({
  isVisible,
  setIsVisible,
  name,
}: {
  isVisible: string | null;
  setIsVisible: Dispatch<SetStateAction<string | null>>;
  name: string;
}) => {
  return (
    <span
      onClick={() => setIsVisible(name)}
      className={`inline-flex cursor-pointer items-center justify-center gap-2.5 ${isVisible === name ? "bg-primary" : "bg-slate-400"} p-2 text-center text-sm font-medium
      text-white hover:bg-opacity-90 md:text-lg lg:px-8 xl:px-10 xl:py-4 xl:text-xl `}
    >
      {name}
    </span>
  );
};

export default Tab;
