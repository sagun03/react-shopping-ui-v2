import moment from "moment";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const fetchPromotionalBanner = async () => {
  try {
    const bannersRef = collection(db, "banners");
    const snapshot = await getDocs(bannersRef);
    if (snapshot.empty) {
      console.log("No banners found.");
      return null;
    }
    const banner = snapshot.docs[0].data();
    if (banner?.startDate) {
      banner.startDate = banner.startDate.toDate().toISOString();
    }
    if (banner?.endDate) {
      banner.endDate = banner.endDate.toDate().toISOString();
    }
    return banner;
  } catch (error) {
    console.error("Error fetching banner:", error);
    return null;
  }
};

export const validateCouponCode = (couponCode, banner) => {
  const currentDate = moment();
  const startDate = moment(banner.startDate);
  const endDate = moment(banner.endDate);

  if (couponCode === banner.couponCode && currentDate.isBetween(startDate, endDate)) {
    return banner.discount;
  }
  return null;
};
