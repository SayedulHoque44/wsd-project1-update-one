export type IPayment = {
  no: number;
  withdrawId: string;
  withdrawMethod: string;
  accountName: string;
  accountNumber: number;
  withdrawAmount: number;
  withdrawDay: string;
  status: string;
};

export type IOnlinePayment = {
  no: number;
  paymentId: string;
  projectName: string;
  paymentType: string;
  accountName: string;
  accountNumber: string;
  transactionId: string;
  payMoney: number;
  paymentDay: string;
  status: string;
};

export type IOfflinePayment = {
  no: number;
  paymentId: string;
  projectName: string;
  countryName: string;
  receiptPersonId: string;
  checkNumber: string;
  checkSecurityCode: string;
  checkAmount: number;
  checkHolderName: string;
  paymentDay: string;
  status: string;
};

export type IRefundPayment = {
  no: number;
  refundId: string;
  projectName: string;
  refundMethod: string;
  accountName: string;
  accountNumber: string;
  refundAmount: number;
  refundDay: string;
  status: string;
};
