import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { myObjj, contactsSlice } from "./slice";

const persistConfig = {
  key: "contacts",
  storage,
};
const persistedReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    objj: myObjj,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
