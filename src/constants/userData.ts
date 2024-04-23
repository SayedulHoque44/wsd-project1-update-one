import { IUser } from "@/types/user";

export const chatData: any = [
  {
    img: "https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/1-elvis-presley-on-milton-berle-michael-ochs-archives.jpg",
    name: "john",
    day: "Tue",
    lastMesg: "Emma send 6 Photos",
    messages: [
      { sender: "John Doe", text: "Hi, how are you?" },
      // { sender: "John Doe", text: "Hi, how are you? this is log text to check width of text"  },
      {
        sender: "You",
        text: "I'm good, thanks! this is also demo ext to chceck",
      },
      {
        sender: "John Doe",
        text: "Hi, how are you?  this is log text to check width of text",
      },
    ],
  },
  {
    img: "https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/1-elvis-presley-on-milton-berle-michael-ochs-archives.jpg",
    name: "jane",
    day: "Tue",
    lastMesg: "Emma send 6 Photos",
  },
  {
    img: "https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/1-elvis-presley-on-milton-berle-michael-ochs-archives.jpg",
    name: "john",
    day: "Tue",
    lastMesg: "Emma send 6 Photos",
  },
  {
    img: "https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/1-elvis-presley-on-milton-berle-michael-ochs-archives.jpg",
    name: "john",
    day: "Tue",
    lastMesg: "Emma send 6 Photos",
  },
  {
    img: "https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/1-elvis-presley-on-milton-berle-michael-ochs-archives.jpg",
    name: "john",
    day: "Tue",
    lastMesg: "Emma send 6 Photos",
  },
  {
    img: "https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/1-elvis-presley-on-milton-berle-michael-ochs-archives.jpg",
    name: "john",
    day: "Tue",
    lastMesg: "Emma send 6 Photos",
  },
  {
    img: "https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/1-elvis-presley-on-milton-berle-michael-ochs-archives.jpg",
    name: "john",
    day: "Tue",
    lastMesg: "Emma send 6 Photos",
  },
];

export const users: IUser[] = [
  {
    no: 200,
    userId: "4664G",
    userName: "Mr jesk",
    gender: "M",
    country: "India",
    totalOrder: 10,
    totalPaid: 456,
    moneyLeft: 45,
    refundAmount: "000",
  },
  {
    no: 199,
    userId: "4664G",
    userName: "Mr mst",
    gender: "M",
    country: "India",
    totalOrder: 10,
    totalPaid: 456,
    moneyLeft: 45,
    refundAmount: "000",
  },
  {
    no: 139,
    userId: "4664G",
    userName: "Mr dfsad",
    gender: "M",
    country: "India",
    totalOrder: 10,
    totalPaid: 456,
    moneyLeft: 45,
    refundAmount: "000",
  },
  {
    no: 139,
    userId: "4664G",
    userName: "Mr dfsad",
    gender: "M",
    country: "India",
    totalOrder: 10,
    totalPaid: 456,
    moneyLeft: 45,
    refundAmount: "000",
  },
  {
    no: 139,
    userId: "4664G",
    userName: "Mr dfsad",
    gender: "M",
    country: "India",
    totalOrder: 10,
    totalPaid: 456,
    moneyLeft: 45,
    refundAmount: "000",
  },
  {
    no: 139,
    userId: "4664G",
    userName: "Mr dfsad",
    gender: "M",
    country: "India",
    totalOrder: 10,
    totalPaid: 456,
    moneyLeft: 45,
    refundAmount: "000",
  },
  {
    no: 139,
    userId: "4664G",
    userName: "Mr dfsad",
    gender: "M",
    country: "India",
    totalOrder: 10,
    totalPaid: 456,
    moneyLeft: 45,
    refundAmount: "000",
  },
];

export const TextEditorFormats: string[] = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "color",
];

export const TextEditorModules: unknown = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      {
        color: [
          "red",
          "blue",
          "yellow",
          "black",
          "green",
          "orange",
          "white",
          "purple",
          "grey",
          "silver",
        ],
      },
    ],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

export const services: object[] = [
  {
    id: 1,
    image:
      "https://cns-me.com/wp-content/uploads/2022/08/4.-BFSI-Services-1270x755.jpg",
    title: "Service-1",
    description: "Its new service created by service aciton",
  },
  {
    id: 2,
    image:
      "https://media.licdn.com/dms/image/D5612AQFrxg3uCB3UWg/article-cover_image-shrink_720_1280/0/1675053681748?e=2147483647&v=beta&t=AWxaXttFIpHduCdEM9JU6GLx5zfTd42vxZm5d6nOqWM",
    title: "Service-2",
    description: "Its new service created by service aciton",
  },
];

export const adminFooterItems: object[] = [
  {
    id: 1,
    title: "Office address",
    content: [
      { id: 1, title: "USA" },
      { id: 2, title: "UK" },
    ],
  },
  {
    id: 2,
    title: "Global location",
    content: [
      { id: 1, title: "Cookies" },
      { id: 2, title: "Contact" },
      { id: 3, title: "US help & support about US terms & policy return" },
      { id: 4, title: "Policy Global" },
      { id: 5, title: "Business" },
    ],
  },
  {
    id: 3,
    title: "Contact Us",
    content: [
      { id: 1, title: "Cloud Backup & Disaster" },
      { id: 2, title: "CyberSecurity" },
      { id: 3, title: "Emergency" },
      { id: 4, title: "Resources" },
      { id: 5, title: "Enterprise cloud" },
      { id: 6, title: "Service and Storge" },
      { id: 7, title: "Firewall" },
      { id: 8, title: "Solution" },
      { id: 9, title: "Ransomeware" },
      { id: 10, title: "Remediation & projection" },
      { id: 11, title: "Virtualization" },
      { id: 12, title: "Integrated " },
      { id: 13, title: "Securiy system" },
    ],
  },
  {
    id: 7,
    title: "Subsribes",
    content: [{}],
  },
  {
    id: 4,
    title: "Consulting",
    content: [
      { id: 1, title: "Acquisition" },
      { id: 2, title: "Support " },
      { id: 3, title: "Devops" },
      { id: 4, title: "Consulting" },
      { id: 5, title: "Services & solution" },
      { id: 6, title: "IT audit" },
      { id: 7, title: "Support" },
      { id: 8, title: "IT Budget" },
      { id: 9, title: "Management" },
      { id: 10, title: "IT Contract" },
      { id: 11, title: "Consulting" },
      { id: 12, title: "Managed " },
      { id: 13, title: "Services" },
      { id: 14, title: "Network Management" },
    ],
  },
  {
    id: 5,
    title: "Custom software development",
    content: [{}],
  },
  {
    id: 6,
    title: "Best it & Business solution",
    content: [{}],
  },
];
export default adminFooterItems;
