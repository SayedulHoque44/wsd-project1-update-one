import PaymentReceipt from "@/components/ciApp/common/PaymentReceipt";

export default function Page({ params }: { params: { paymentId: string } }) {
  return (
    <div className="w-full p-4 md:p-6 2xl:p-10">
      <PaymentReceipt back_url="/c/onlinepayment-checking" />
    </div>
  );
}
