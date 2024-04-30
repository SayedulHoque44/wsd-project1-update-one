import Progress from "@/components/transition/Progress";

const Transactions = () => {
  return (
    <div className="flex h-[calc(100vh-88px)] w-full  items-center justify-center text-[#1C2434] p-4 md:p-6 2xl:p-10">
      <div className="flex items-center justify-center gap-5">
        <div className="rounded-xl bg-slate-300 p-2">
          <h1 className="text-center">1.0000</h1>
          <p>Total Withdraw money</p>
        </div>
        <div>
          <Progress popularity={"85000.50"} />
          <h1 className="text-2xl font-bold">Withdraw</h1>
        </div>
        <div className="rounded-xl bg-slate-300 p-2">
          <h1 className="text-center">1.0000</h1>
          <p>Total Pending request money</p>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
