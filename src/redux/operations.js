import { createAsyncThunk } from "@reduxjs/toolkit";

import { registerUser, loginUser, logout } from "api/api";
import {
  getAllObjects,
  getObjectsAdmin,
  getObjectsClient,
  addPhone,
  deletePhoneAdmin,
  addComentObject,
  deleteComentObject,
  deleteObject,
} from "api/client";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials) => {
    try {
      const res = await registerUser(credentials);
      // console.log(res);
      return res.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const logIn = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const res = await loginUser(credentials);
    if (res.message) {
      return res.message;
    }
    const params = {
      name: res.user.name,
      token: res.token,
    };
    const subscription = res.user.subscription;
    switch (subscription) {
      case "superadmin":
        const allObjects = await getAllObjects(params);
        if (!allObjects) {
          alert("sorry no information yetNONE");
          return;
        }
        const resAllObj = { ...res, objec: allObjects };
        // =========================================================
        const resss = resAllObj.objec.map((ob) => {
          delete ob.magazine;
          return ob;
        });
        resAllObj.objec = resss;
        // =========================================================
        return resAllObj;
      case "admin":
        const objectsAdmin = await getObjectsAdmin(params);
        if (!objectsAdmin) {
          alert("sorry no information yetNONE");
          return;
        }
        const resObj = { ...res, objec: objectsAdmin };
        return resObj;
      case "client":
        const objectsClient = await getObjectsClient(params);
        if (!objectsClient) {
          alert("sorry no information yetNONE");
          return;
        }
        const resClinetObj = { ...res, objec: objectsClient };
        return resClinetObj;
      default:
        alert("Объект не найден");
    }
  } catch (error) {
    console.log(error);
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
export const addPhoneClient = createAsyncThunk(
  "client/addPhone",
  async (credentials) => {
    try {
      const res = await addPhone(credentials);
      return res;
    } catch (error) {
      return error.message;
    }
  }
);
export const deletePhoneClient = createAsyncThunk(
  "client/deletePhone",
  async (credentials) => {
    try {
      const res = await deletePhoneAdmin(credentials);
      return res;
    } catch (error) {
      return error.message;
    }
  }
);
export const addComentClient = createAsyncThunk(
  "client/addComent",
  async (credentials) => {
    try {
      const res = await addComentObject(credentials);
      return res;
    } catch (error) {
      return error.message;
    }
  }
);
export const deleteComentClient = createAsyncThunk(
  "client/deleteComent",
  async (credentials) => {
    try {
      const res = await deleteComentObject(credentials);
      return res;
    } catch (error) {
      return error.message;
    }
  }
);
// ==========================================================
export const completeDeleteObject = createAsyncThunk(
  "client/deleteObject",
  async (credentials) => {
    try {
      const res = await deleteObject(credentials);
      return res;
    } catch (error) {
      return error.message;
    }
  }
);
