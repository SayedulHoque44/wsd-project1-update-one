export type IUser = {
  no: number;
  userId: string;
  userName: string;
  gender: string;
  email?: string;
  country: string;
  totalOrder: number;
  totalAmount?: number;
  totalPaid: number;
  moneyLeft: number;
  refundAmount: string;
  profited?: string;
};
