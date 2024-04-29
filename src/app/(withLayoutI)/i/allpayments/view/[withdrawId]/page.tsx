import PaymentReceipt from "@/components/ciApp/common/PaymentReceipt";

export default function Page({ params }: { params: { withdrawId: string } }) {
  return (
    <div>
      <PaymentReceipt back_url="/c/allpayments/" />
    </div>
  );
}
