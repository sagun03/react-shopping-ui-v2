import { useState } from "react";
import Navbar from "../components/nav/NavBar";
import Announcement from "../components/Announcement";
import { UserProfileContainer, TopContainer } from "../components/styles/UserProfile";
import ProfilePanelSwitcher from "../components/ProfilePanelSwitcher";
import ProfileSideBar from "../components/ProfileSideBar";
import BottomNav from "../components/BottomNav";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [activePanel, setActivePanel] = useState("PROFILE");

  return (
    <>
      <Navbar />
      <Announcement />
      <TopContainer>
        {
          user ? (
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
