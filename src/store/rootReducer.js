import { combineReducers } from "redux"
// slices
import cartReducer from "./slices/cartSlice"
import userReducer from "./slices/userSlice"
import orderReducer from "./slices/orderSlice"
import pointReducer from "./slices/pointSlice"
import productReducer from "./slices/productSlice"
import addressReducer from "./slices/addressSlice"
import stepperReducer from "./slices/stepperSlice"
import promotionReducer from "./slices/promotionBannerSlice"
import couponReducer from "./slices/couponSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  promotions: promotionReducer,
  coupon: couponReducer,
  user: userReducer,
  order: orderReducer,
  point: pointReducer,
  product: productReducer,
  address: addressReducer,
  stepper: stepperReducer
})

export default rootReducer;
