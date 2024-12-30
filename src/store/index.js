import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";
import setTransform from "./transforms";
import {
  persistStore,
  persistReducer
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER
} from "redux-persist"

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  transforms: [setTransform]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false // Disable the serializable check
    })
})

export default store

export const persistor = persistStore(store)
