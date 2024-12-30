import { ContentPanel } from "@/components/profile/styles";
import ProfilePanel from "@/components/profile/info/Index";
import PropTypes from "prop-types";
import AddressPanel from "@/components/profile/address/AddressPanel";
import Transaction from "@/components/profile/transaction/Index";

const ProfilePanelSwitcher = ({ state }) => {
  return (
    <ContentPanel>
      {state === "PROFILE" && <ProfilePanel />}
      {state === "ADDRESS" && <AddressPanel />}
      {state === "TRANSACTIONS" && <Transaction />}
    </ContentPanel>
  )
};

// prop validation
ProfilePanelSwitcher.propTypes = {
  data: PropTypes.object.isRequired,
  state: PropTypes.string.isRequired
};

export default ProfilePanelSwitcher;
