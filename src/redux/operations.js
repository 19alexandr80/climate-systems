import { createAsyncThunk } from "@reduxjs/toolkit";

// import { PhoneBook } from "api/api";
// const api = new PhoneBook();

import { registerUser, loginUser, logout } from "api/api";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials) => {
    try {
      const res = await registerUser(credentials);
      console.log(res);
      return res.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const logIn = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const res = await loginUser(credentials);
    return res;
  } catch (error) {
    return error.message;
  }
});
export const logOut = createAsyncThunk("auth/logout", async (credentials) => {
  try {
    await logout(credentials);
  } catch (error) {
    return error.message;
  }
});
