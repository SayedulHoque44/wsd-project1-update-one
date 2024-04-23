import Image from "next/image";
import Link from "next/link";
import React from "react";

type IPaymentReceipt = {
  back_url: string;
};

const PaymentReceipt = ({ back_url }: IPaymentReceipt) => {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center md:h-[60vh]">
      <div>
        <div className="mb-4 flex items-center justify-end">
          <Link href={back_url}>
            <button className="rounded-md bg-blue-500 px-3 py-1 text-[14px] text-white  transition-all hover:bg-white hover:text-blue-600 hover:shadow-md ">
              Back
            </button>
          </Link>
        </div>
        <div className="rounded border-2 border-blue-400 bg-white px-5 pb-7 pt-5">
          <div>
            <Image
              src={
                "https://s3-alpha-sig.figma.com/img/178d/fab8/d19cb0b1c6d7bb36499bbcf82a25571b?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R3U39FSt72TI1WUqBXowWEZaKU4hWCQugWrrJzgTGH06ddjIr01V1yq6w5VVxVwKdSwqAjG1dkQxMAZyG7ft9Gw8d~Fr2dwHRePx8RgsdTXhAH-9ZsMYGTuW9UQb6twCsbTyA9WsUhuI5CSaG0O~FLsHk3SpMMSw7rG8tPbiFAglvIfGnA345Itk9uWWFzqsCn~XlZKk9wb77yhfU2qZo3lF3BQzoPbdAmZEM1ZQ79rpPQGyroQMTHSIacm7Bw~ZQT01~qHMFw0rhHfp6P-8eR6blprpD-56xOZaUEP7k7tliGod5ySwBy7qRfCoWeGnrc0blRiC~U42OlgDg~C2iQ__"
              }
              height={100}
              width={100}
              alt="bank-img"
            />
          </div>
          <div>
            <p className="mb-4 font-semibold">Dear YOUR BUSINESS,</p>
            <p className="font-bold text-[#e7a139]">
              You received a payment of $51.00 AUD from XYX (xyz@gmail.com)
            </p>
            <p className="mb-4 font-semibold">
              Thanks for using PayPal. You can now send any items. To view the
              transaction details, log in to your PayPal account.
            </p>
            <p className="mb-4 font-semibold">
              It may take a few moments for this transaction to appear in the
              Recent Activity in your Account Overview
            </p>

            <table className="w-4/6 border-2" border={1}>
              <thead>
                <tr>
                  <th className="border-2">no</th>
                  <th className="border-2">ABC</th>
                  <th className="border-2">ABC</th>
                  <th className="border-2">ABC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-2 text-center">01</td>
                  <td className="border-2 text-center">Data</td>
                  <td className="border-2 text-center">Data</td>
                  <td className="border-2 text-center">Data</td>
                </tr>
                <tr>
                  <td className="border-2 text-center">01</td>
                  <td className="border-2 text-center">Data</td>
                  <td className="border-2 text-center">Data</td>
                  <td className="border-2 text-center">Data</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentReceipt;
