import { ContentPanel } from "./styles/UserProfile";
import ProfilePanel from "./ProfilePanel";
import PropTypes from "prop-types";
import AddressPanel from "./AddressPanel";

const ProfilePanelSwitcher = ({ state }) => {
  return (
    <ContentPanel>
      {state === "PROFILE" && <ProfilePanel />}
      {state === "ADDRESS" && <AddressPanel />}
    </ContentPanel>
  )
};

// prop validation
ProfilePanelSwitcher.propTypes = {
  data: PropTypes.object.isRequired,
  state: PropTypes.string.isRequired
};

export default ProfilePanelSwitcher;
