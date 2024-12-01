import { Text, Header, SideBarContainer, ImageContainer, Image, SideBarButtonGroup, SideBarButton, PointsContainer } from "./styles/UserProfile";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import BadgeIcon from "@mui/icons-material/Badge";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PeopleIcon from "@mui/icons-material/People";
import PropTypes from "prop-types";
import { useUserContext } from "../context/UserContext";
import { usePointsContext } from "../context/PointsContext";

const ProfileSideBar = ({ setPanel }) => {
  const { user } = useUserContext();
  const { points } = usePointsContext();
  return (
    <SideBarContainer>
      <Header>{ (user?.displayName || user?.email || user?.phoneNumber) + " " }</Header>
      <ImageContainer>
        <Image src="profile-placeholder.png" />
        <PointsContainer>
          <MonetizationOnIcon />
          <Text>{ points }</Text>
        </PointsContainer>
      </ImageContainer>
      <SideBarButtonGroup>
        <SideBarButton
          variant="outlined"
          startIcon={<BadgeIcon />}
          onClick={() => setPanel("PROFILE")}
        >
          Profile
        </SideBarButton>
        <SideBarButton
            variant="outlined"
            startIcon={<AlternateEmailIcon />}
            onClick={() => setPanel("ADDRESS")}
        >
          Address
        </SideBarButton>
        <SideBarButton
          variant="outlined"
          startIcon={<ReceiptIcon />}
          onClick={() => setPanel("TRANSACTIONS")}
        >
          Transactions
        </SideBarButton>
        <SideBarButton
          variant="outlined"
          startIcon={<PeopleIcon />}
          onClick={() => setPanel("REFERRALS")}
        >
          Referrals
        </SideBarButton>
      </SideBarButtonGroup>
    </SideBarContainer>
  )
};

ProfileSideBar.propTypes = {
  user: PropTypes.object.isRequired,
  setPanel: PropTypes.func.isRequired
};
export default ProfileSideBar;
