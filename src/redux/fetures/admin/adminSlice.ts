import { createSlice } from "@reduxjs/toolkit";
import { IAdmin } from "@/types/admin";

const initialState: IAdmin[] = [
  {
    id: "admin123",
    name: "John Doe",
    userName: "johndoe",
    email: "johndoe@example.com",
    accessList: ["user_management", "content_editing"],
    active: true,
  },
  {
    id: "admin456",
    name: "Jane Smith",
    userName: "janesmith",
    email: "janesmith@example.com",
    accessList: ["user_management", "reporting", "dashboard_access"],
    active: true,
  },
  {
    id: "admin789",
    name: "Michael Johnson",
    userName: "michaelj",
    email: "michaelj@example.com",
    accessList: ["content_editing", "billing_management"],
    active: true,
  },
  {
    id: "admin101",
    name: "Emily Davis",
    userName: "emilyd",
    email: "emilyd@example.com",
    accessList: ["user_management", "reporting"],
    active: false,
  },
  {
    id: "admin202",
    name: "Christopher Lee",
    userName: "chrisl",
    email: "chrisl@example.com",
    accessList: ["dashboard_access", "billing_management"],
    active: true,
  },
];

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    addAdmin: (state, action) => {
      state.push(action.payload);
    },
    statusChange: (state, action) => {
      const { id, active } = action.payload;
      const adminIndex = state.findIndex((admin) => admin.id === id);
      if (adminIndex !== -1) {
        state[adminIndex].active = active;
      }
    },
    updateAdmin: (state, action) => {
      const updatedAdmin = action.payload;
      const adminIndex = state.findIndex(
        (admin) => admin.id === updatedAdmin.id,
      );
      if (adminIndex !== -1) {
        state[adminIndex] = updatedAdmin;
      }
    },
    removeAdmin: (state, action) => {
      const { id } = action.payload;
      return state.filter((admin) => admin.id !== id);
    },
  },
});

export const { addAdmin, updateAdmin, removeAdmin, statusChange } =
  adminSlice.actions;
export default adminSlice.reducer;
