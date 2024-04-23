import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "USUKC | Online Payment Checking",
  description: "Online Payment Checking",
};

const OnlinePaymentChecking = () => {
  return (
    <div>
      <Breadcrumb pageName="Online Checking Payment" />
    </div>
  );
};

export default OnlinePaymentChecking;
