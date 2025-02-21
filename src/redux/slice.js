import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

import {
  logIn,
  register,
  logOut,
  addPhoneClient,
  deletePhoneClient,
  addComentClient,
  deleteComentClient,
} from "./operations";

export const open = createAction("objj/incrA");
export const close = createAction("obdjj/decrA");

const initialState = {
  objectAll: [],
  user: { subscription: null, name: null, id: null },
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
    // nameUser(state, action) {
    //   state.user.name = action.payload;
    // },
    // clireNameUser(state) {
    //   state.user.name = null;
    // },
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
          state.isLoading = false;
          return alert(action.payload);
        } else {
          state.token = action.payload.token;
          state.user = action.payload.user;
          state.isLoggedIn = true;
          state.isLoading = false;
          state.objectAll = action.payload.objec;
        }
      })
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.rejected, handleRejected)
      .addCase(logOut.fulfilled, () => {
        return initialState;
      })
      .addCase(addPhoneClient.pending, handlePending)
      .addCase(addPhoneClient.rejected, handleRejected)
      .addCase(addPhoneClient.fulfilled, (state, action) => {
        if (!action.payload) {
          console.log(action.error.message);
          state.isLoading = false;
          return alert(action.error.message);
        } else {
          state.objectAll = state.objectAll.map((obj) => {
            if (obj.name === action.payload.name) {
              return action.payload;
            }
            return obj;
          });
          state.isLoggedIn = true;
          state.isLoading = false;
        }
      })
      .addCase(deletePhoneClient.pending, handlePending)
      .addCase(deletePhoneClient.rejected, handleRejected)
      .addCase(deletePhoneClient.fulfilled, (state, action) => {
        if (!action.payload) {
          console.log(action.error.message);
          state.isLoading = false;
          return alert(action.error.message);
        } else {
          state.objectAll = state.objectAll.map((obj) => {
            if (obj.name === action.payload.name) {
              return action.payload;
            }
            return obj;
          });
          state.isLoggedIn = true;
          state.isLoading = false;
        }
      })
      .addCase(addComentClient.pending, handlePending)
      .addCase(addComentClient.rejected, handleRejected)
      .addCase(addComentClient.fulfilled, (state, action) => {
        if (!action.payload) {
          console.log(action.error.message);
          state.isLoading = false;
          return alert(action.error.message);
        } else {
          state.objectAll = state.objectAll.map((obj) => {
            if (obj.name === action.payload.name) {
              return action.payload;
            }
            return obj;
          });
          state.isLoggedIn = true;
          state.isLoading = false;
        }
      })
      .addCase(deleteComentClient.pending, handlePending)
      .addCase(deleteComentClient.rejected, handleRejected)
      .addCase(deleteComentClient.fulfilled, (state, action) => {
        if (!action.payload) {
          console.log(action.error.message);
          state.isLoading = false;
          return alert(action.error.message);
        } else {
          state.objectAll = state.objectAll.map((obj) => {
            if (obj.name === action.payload.name) {
              return action.payload;
            }
            return obj;
          });
          state.isLoggedIn = true;
          state.isLoading = false;
        }
      }),
});
// deleteComentClient
export const myObjj = createReducer(
  {
    modals: false,
    formContent: [],
  },
  (builder) => {
    builder
      .addCase(open, (state, action) => {
        state.modals = true;
      })
      .addCase(close, (state, _) => {
        state.modals = false;
      });
  }
);

export const { nameUser, clireNameUser } = contactsSlice.actions;
