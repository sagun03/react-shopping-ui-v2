import { configureStore, combineReducers } from "@reduxjs/toolkit"
import cartReducer from "./cartRedux"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist"
import storage from "redux-persist/lib/storage"
import promotionalBannerReducer from "./bannerRedux";
import couponReducer from "./couponSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage
}
const rootReducer = combineReducers({ cart: cartReducer, promotions: promotionalBannerReducer, coupon: couponReducer })

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})
export default store

export const persistor = persistStore(store)
