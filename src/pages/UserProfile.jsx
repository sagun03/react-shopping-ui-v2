import { useState } from "react";
import Navbar from "../components/NavBar";
import Announcement from "../components/Announcement";
import { UserProfileContainer, TopContainer } from "../components/styles/UserProfile";
import ProfilePanelSwitcher from "../components/ProfilePanelSwitcher";
import ProfileSideBar from "../components/ProfileSideBar";
import { useUserContext } from "../context/UserContext";
import BottomNav from "../components/BottomNav";
import Footer from "../components/Footer";

const UserProfile = () => {
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
