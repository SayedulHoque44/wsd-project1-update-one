import { Progress } from "antd";
import Link from "next/link";

const Transactions = () => {
  return (
    <div className="h-[calc(100vh-88px)] w-full md:p-6 2xl:p-10">
      <div className="flex justify-end">
        <Link href={"transactions/history"}>
          <button className="rounded-full bg-cyan-300 px-5 py-1  text-white ">
            Withdraw history
          </button>
        </Link>
      </div>
      <div className="flex h-full items-center justify-center text-[#1C2434]">
        <div className="flex items-center justify-center gap-5">
          <div className="rounded-xl bg-white  p-2">
            <h1 className="text-center">1.0000</h1>
            <p>Total Withdraw money</p>
          </div>
          <div>
            <Progress
              strokeWidth={10}
              strokeColor={"#1C2434"}
              type="circle"
              percent={20}
            />
            <h1 className="mt-3 text-2xl font-bold dark:text-white">
              Withdraw
            </h1>
          </div>
          <div className="rounded-xl bg-white p-2">
            <h1 className="text-center">1.0000</h1>
            <p>Total Pending request money</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
