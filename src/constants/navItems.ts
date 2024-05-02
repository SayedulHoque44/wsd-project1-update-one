import type { navItem } from "@/types/navItem";

import { GiReceiveMoney } from "react-icons/gi";
import { GoSignOut } from "react-icons/go";
import { GrTechnology } from "react-icons/gr";
import { MdOutlinePayment } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { AiTwotoneSetting } from "react-icons/ai";
import {
  BiCategoryAlt,
  BiNotepad,
  BiSolidDashboard,
  BiSolidBookContent,
} from "react-icons/bi";
import { BsBorderStyle, BsFillChatLeftTextFill } from "react-icons/bs";

export const CNavItem: navItem[] = [
  { id: 1, title: "Dashboard", url: "/c/dashboard", icon: BiSolidDashboard },
  { id: 2, title: "All users", url: "/c/allUsers", icon: GiReceiveMoney },
  { id: 3, title: "All Orders", url: "/c/orders", icon: BsBorderStyle },
  {
    id: 4,
    title: " Transactions List",
    url: "/c/transactions",
    icon: BsBorderStyle,
  },
  { id: 5, title: "All Payments", url: "/c/allpayments", icon: BsBorderStyle },
  {
    id: 6,
    title: " Online Payment C",
    url: "/c/onlinepayment-checking",
    icon: MdOutlinePayment,
  },
  {
    id: 7,
    title: " Offline Payment C",
    url: "/c/offlinepayment-checking",
    icon: MdOutlinePayment,
  },
  {
    id: 8,
    title: "Online Refund P",
    url: "/c/refund-payment-checking",
    icon: MdOutlinePayment,
  },

  // { id: 9, title: "Offline Refund P", url: "/pages/notice", icon: BiNotepad },
  {
    id: 9,
    title: "LB342BLI",
    url: "/c/services",
    icon: GrTechnology,
  },
  {
    id: 10,
    title: "TSTBSNOC",
    url: "/c/category",
    icon: BiCategoryAlt,
  },
  {
    id: 11,
    title: "APSLCCB",
    url: "/c/company",
    icon: BiSolidBookContent,
  },
  {
    id: 12,
    title: "Live Chat",
    url: "/c/liveChat",
    icon: BsFillChatLeftTextFill,
  },
  {
    id: 13,
    title: "Create Admin",
    url: "/c/createAdmin",
    icon: RiAdminFill,
  },
  { id: 14, title: "Setting", url: "/c/setting", icon: AiTwotoneSetting },
  // { id: 10, title: "Logout", url: "/c/logout", icon: GoSignOut },
];
export const INavItem: navItem[] = [
  { id: 1, title: "Dashboard", url: "/i/dashboard", icon: BiSolidDashboard },
  { id: 3, title: "All users", url: "/i/allUsers", icon: GiReceiveMoney },
  { id: 2, title: "All Orders", url: "/i/orders", icon: BsBorderStyle },
  { id: 15, title: "All Payments", url: "/i/allpayments", icon: BsBorderStyle },

  {
    id: 14,
    title: " Online Payment C",
    url: "/i/onlinepayment-checking",
    icon: MdOutlinePayment,
  },
  {
    id: 13,
    title: " Offline Payment C",
    url: "/i/offlinepayment-checking",
    icon: MdOutlinePayment,
  },
  {
    id: 12,
    title: "Online Refund P",
    url: "/i/payment-checking2",
    icon: MdOutlinePayment,
  },

  // { id: 9, title: "Offline Refund P", url: "/pages/notice", icon: BiNotepad },
  {
    id: 4,
    title: "LB342BLI",
    url: "/i/services",
    icon: GrTechnology,
  },
  {
    id: 5,
    title: "TSTBSNOC",
    url: "/i/category",
    icon: BiCategoryAlt,
  },
  {
    id: 6,
    title: "APSLCCB",
    url: "/i/company",
    icon: BiSolidBookContent,
  },
  {
    id: 7,
    title: "Live Chat",
    url: "/i/liveChat",
    icon: BsFillChatLeftTextFill,
  },
  {
    id: 8,
    title: "Create Admin",
    url: "/i/createAdmin",
    icon: RiAdminFill,
  },
  { id: 9, title: "Setting", url: "/i/setting", icon: AiTwotoneSetting },
];
