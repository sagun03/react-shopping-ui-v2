import { ContentPanel } from "./styles/UserProfile";
import ProfilePanel from "./ProfilePanel";
import PropTypes from "prop-types";
import AddressPanel from "./AddressPanel";

const ProfilePanelSwitcher = ({ data, state }) => {
  return (
    <ContentPanel>
      {state === "PROFILE" && <ProfilePanel userData={data.userData} />}
      {state === "ADDRESS" && <AddressPanel userAddress={data.userAddress} />}
    </ContentPanel>
  )
};

// prop validation
ProfilePanelSwitcher.propTypes = {
  data: PropTypes.object.isRequired,
  state: PropTypes.string.isRequired
};

export default ProfilePanelSwitcher;
