import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  partner: {
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
};
const chatPartnerSlice = createSlice({
  name: "chatPartner",
  initialState,
  reducers: {
    startChat: (state, action) => {
      state.partner = action.payload;
    },
    removeMessage: (state, action) => {
      const { messageId } = action.payload;
      state.partner.messages = state.partner.messages.filter(
        (msg) => msg.id !== messageId,
      );
    },
  },
});
export const { startChat, removeMessage } = chatPartnerSlice.actions;
export default chatPartnerSlice.reducer;
