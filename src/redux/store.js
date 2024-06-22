import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReduser } from "./contacts/slice";
import { filtersReducer } from "./filters/slice";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/slice";

const persistConfig = {
  key: "contact",
  storage,
};

const rootReducer = combineReducers({
  contacts: persistReducer(persistConfig, contactsReduser),
  filters: filtersReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
