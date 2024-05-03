import { createSlice } from "@reduxjs/toolkit";

export type TMessage = {
  id: string;
  sender: string;
  text: string;
};
export type TUser = {
  id: string;
  img: string;
  name: string;
  day: string;
  status: string;
  lastMesg: string;
  messages: TMessage[];
};
const initialState: TUser[] = [
  {
    id: "1",
    img: "https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/1-elvis-presley-on-milton-berle-michael-ochs-archives.jpg",
    name: "John Smith",
    day: "Tue",
    lastMesg: "hello",
    status: "request",
    messages: [
      { id: "msg1", sender: "John Doe", text: "Hey, how's it going?" },
      {
        id: "msg2",
        sender: "You",
        text: "Hi! I'm doing well, thanks. How about you?",
      },
      {
        id: "msg3",
        sender: "John Doe",
        text: "I'm good too. What have you been up to lately?",
      },
      {
        id: "msg4",
        sender: "You",
        text: "Just been busy with work and some personal projects.",
      },
      {
        id: "msg5",
        sender: "John Doe",
        text: "I might go see a movie with friends. Do you have any movie recommendations?",
      },
    ],
  },
  {
    id: "2",
    img: "https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/1-elvis-presley-on-milton-berle-michael-ochs-archives.jpg",
    name: "Emma",
    day: "Tue",
    status: "request",
    lastMesg: "How are you",
    messages: [
      { id: "msg6", sender: "John Doe", text: "Hey, how's it going?" },
      {
        id: "msg7",
        sender: "You",
        text: "Hi! I'm doing well, thanks. How about you?",
      },
      {
        id: "msg8",
        sender: "John Doe",
        text: "I'm good too. What have you been up to lately?",
      },
      {
        id: "msg9",
        sender: "You",
        text: "Just been busy with work and some personal projects.",
      },
      {
        id: "msg10",
        sender: "John Doe",
        text: "Sounds productive! Any exciting plans for the weekend?",
      },
      {
        id: "msg11",
        sender: "You",
        text: "Not really, just planning to relax at home. How about you?",
      },
      {
        id: "msg12",
        sender: "John Doe",
        text: "I might go see a movie with friends. Do you have any movie recommendations?",
      },
    ],
  },
  {
    id: "3",
    img: "https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/1-elvis-presley-on-milton-berle-michael-ochs-archives.jpg",
    name: "john",
    day: "Tue",
    status: "block",
    lastMesg: "Emma send 6 Photos",
    messages: [
      { id: "msg13", sender: "John Doe", text: "Hey, how's it going?" },
      {
        id: "msg14",
        sender: "You",
        text: "Hi! I'm doing well, thanks. How about you?",
      },
      {
        id: "msg15",
        sender: "John Doe",
        text: "I'm good too. What have you been up to lately?",
      },
      {
        id: "msg16",
        sender: "You",
        text: "Just been busy with work and some personal projects.",
      },
      {
        id: "msg17",
        sender: "John Doe",
        text: "Sounds productive! Any exciting plans for the weekend?",
      },
    ],
  },
  {
    id: "4",
    img: "https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/1-elvis-presley-on-milton-berle-michael-ochs-archives.jpg",
    name: "john",
    day: "Tue",
    status: "cancel",
    lastMesg: "Emma send 6 Photos",
    messages: [
      { id: "msg18", sender: "John Doe", text: "Hey, how's it going?" },
      {
        id: "msg19",
        sender: "You",
        text: "Hi! I'm doing well, thanks. How about you?",
      },
      {
        id: "msg20",
        sender: "John Doe",
        text: "I'm good too. What have you been up to lately?",
      },
      {
        id: "msg21",
        sender: "You",
        text: "Just been busy with work and some personal projects.",
      },
    ],
  },
  {
    id: "5",
    img: "https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/1-elvis-presley-on-milton-berle-michael-ochs-archives.jpg",
    name: "john",
    day: "Tue",
    status: "forward-request",
    lastMesg: "Emma send 6 Photos",
    messages: [
      { id: "msg22", sender: "John Doe", text: "Hey, how's it going?" },
      {
        id: "msg23",
        sender: "You",
        text: "Hi! I'm doing well, thanks. How about you?",
      },
      {
        id: "msg24",
        sender: "John Doe",
        text: "I'm good too. What have you been up to lately?",
      },
      {
        id: "msg25",
        sender: "You",
        text: "Just been busy with work and some personal projects.",
      },
      {
        id: "msg26",
        sender: "John Doe",
        text: "Sounds productive! Any exciting plans for the weekend?",
      },
      {
        id: "msg27",
        sender: "You",
        text: "Not really, just planning to relax at home. How about you?",
      },
      {
        id: "msg28",
        sender: "John Doe",
        text: "I might go see a movie with friends. Do you have any movie recommendations?",
      },
    ],
  },
  {
    id: "6",
    img: "https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/1-elvis-presley-on-milton-berle-michael-ochs-archives.jpg",
    name: "john",
    day: "Tue",
    status: "cancel",
    lastMesg: "Emma send 6 Photos",
    messages: [
      { id: "msg29", sender: "John Doe", text: "Hey, how's it going?" },
      {
        id: "msg30",
        sender: "You",
        text: "Hi! I'm doing well, thanks. How about you?",
      },
      {
        id: "msg31",
        sender: "John Doe",
        text: "I'm good too. What have you been up to lately?",
      },
      {
        id: "msg32",
        sender: "You",
        text: "Just been busy with work and some personal projects.",
      },
    ],
  },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
