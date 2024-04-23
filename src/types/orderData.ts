export interface OrderData {
    sl: number;
    id: number;
    applicantsName: string;
    projectName: string;
    dateOfOrder: string; 
    projectTotalRs: number;
    totalOnlineDepositRs: number;
    totalOnlineDeposits:number;
    moneyLeft: number;
    projectDeliveryDay: string; 
    profit: number;
    status: "Pending" | "In Progress" | "Completed" | "Payment"; 
    view: string; 
  }