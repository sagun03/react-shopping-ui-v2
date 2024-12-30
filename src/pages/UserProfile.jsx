import { useState } from "react";
import Navbar from "@/components/common/navigation/Top/Index";
import Announcement from "@/components/common/annoucements/Index";
import { UserProfileContainer, TopContainer } from "@/components/profile/styles";
import ProfilePanelSwitcher from "@/components/profile/switcher/Index";
import ProfileSideBar from "@/components/profile/bar/Index";
import BottomNav from "@/components/common/navigation/Bottom";
import Footer from "@/components/common/layouts/Footer";
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
