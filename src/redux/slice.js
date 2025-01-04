import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

import { logIn, register, logOut } from "./operations";

export const incrA = createAction("objj/incrA");
export const decrA = createAction("obdjj/decrA");

const initialState = {
  value: [],
  user: { subscription: null, email: null, id: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};
const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    nameUser(state, action) {
      state.user.name = action.payload;
    },
    clireNameUser(state) {
      state.user.name = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.rejected, handleRejected)
      .addCase(register.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.rejected, handleRejected)
      .addCase(logIn.fulfilled, (state, action) => {
        if (!action.payload.token) {
          console.log(action.payload.message);
          return alert(action.payload.message);
        } else {
          state.token = action.payload.token;
          state.user = action.payload.user;
          state.isLoggedIn = true;
        }
      })
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.rejected, handleRejected)
      .addCase(logOut.fulfilled, (state) => {
        // state.token = null;
        // state.user.email = null;
        // state.user.name = null;
        // state.isLoggedIn = false;
        // state.value = [];
        return initialState;
      }),
});

export const myObjj = createReducer(
  {
    a: 0,
  },
  (builder) => {
    builder
      .addCase(incrA, (state, action) => {
        state.a = state.a + action.payload;
      })
      .addCase(decrA, (state, _) => {
        state.a -= 1;
      });
  }
);

export const { nameUser, clireNameUser } = contactsSlice.actions;
