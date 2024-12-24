import { configureStore, combineReducers } from "@reduxjs/toolkit"
import cartReducer from "./port/cartSlice"
import userReducer from "./port/userSlice"
import orderReducer from "./port/orderSlice"
import pointReducer from "./port/pointSlice"
import productReducer from "./port/productSlice"
import addressReducer from "./port/addressSlice"
import stepperReducer from "./port/stepperSlice"
import setTransform from "./custom"

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
  storage,
  transforms: [setTransform]
}
const rootReducer = combineReducers({
  cart: cartReducer,
  promotions: promotionalBannerReducer,
  coupon: couponReducer,
  user: userReducer,
  order: orderReducer,
  point: pointReducer,
  product: productReducer,
  address: addressReducer,
  stepper: stepperReducer
})

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
