import { useState, useReducer } from "react";
import Navbar from "../components/NavBar";
import Announcement from "../components/Announcement";
import { UserProfileContainer, Header, TopContainer } from "../components/styles/UserProfile";
import ProfilePanelSwitcher from "../components/ProfilePanelSwitcher";
import ProfileSideBar from "../components/ProfileSideBar";
import { useUserContext } from "../context/UserContext";
import BottomNav from "../components/BottomNav";
import Footer from "../components/Footer";

const UserProfile = () => {
  const userData = {
    Username: "John Doe",
    Email: "",
    Role: "User"
  }
  const userAddress = {
    Address: "1234 Main St",
    City: "Anytown",
    State: "CA",
    Zip: "12345"
  }
  const userPoints = {
    Balance: 500
  }
  const userTransactions = [
    { Date: "2021-10-01", Type: "Purchase", Points: 100, Description: "Referral" },
    { Date: "2021-10-02", Type: "Purchase", Points: 200, Description: "Bonus" },
    { Date: "2021-10-03", Type: "Purchase", Points: 300, Description: "Referral" }
  ];
  const userReferrals = {
    ReferralCodex: "ABC123",
    ReferredUsers: 5
  }

  const data = {
    userData,
    userAddress,
    userPoints,
    userTransactions,
    userReferrals
  }

  const user = useUserContext();
  const [activePanel, setActivePanel] = useState("PROFILE");

  return (
    <>
      <Navbar />
      <Announcement />
      <TopContainer>
        {
          user.user ? (
            <UserProfileContainer>
              <ProfileSideBar setPanel={setActivePanel}/>
              <ProfilePanelSwitcher state={activePanel}/>
            </UserProfileContainer>
          ) : (
            <h1>Please sign in to view your profile</h1>
          )
        }
      </TopContainer>
      <Footer />
      <BottomNav />
    </>
  );
}
export default UserProfile;
