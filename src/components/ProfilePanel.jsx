import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { ProfilePanelContainer, InputField, InnerHeading, ButtonGroup } from "./styles/ProfilePanel";
import { SaveButton, CancelButton, EditButton } from "./EditButtons";
import { Button } from "style-components";

const ProfilePanel = ({ userData }) => {
  const [user, setUser] = useState({
    Username: userData.Username,
    Email: userData.Email,
    Role: userData.Role
  })

  const [disabled, setDisabled] = useState(true);

  const handleSave = (e) => {
    e.preventDefault();
    console.log("User data saved", user);
    setDisabled(true);
  };

  return (
    <div>
      <ProfilePanelContainer>
        <InnerHeading>Profile</InnerHeading>
        <Box
          component={"form"}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
          onSubmit={handleSave}
        >
          <InputField
            disabled={disabled}
            label="Username"
            variant="outlined"
            value={user.Username}
            onChange={(e) => setUser({ ...user, Username: e.target.value })}
          />
          <InputField
            disabled={disabled}
            label="Email"
            variant="outlined"
            value={user.Email}
            onChange={(e) => setUser({ ...user, Email: e.target.value })}
          />
          <InputField
            disabled
            label="Role"
            variant="outlined"
            value={user.Role}
            onChange={(e) => setUser({ ...user, Role: e.target.value })}
          />
          <ButtonGroup>
            {
              disabled ? <EditButton onClick={() => setDisabled(false)} name="Edit" /> : (
                <>
                  <SaveButton type="submit" name="Save"/>
                  <CancelButton onClick={() => setDisabled(true)} name="Cancel"/>
                </>
              )
            }
          </ButtonGroup>
        </Box>
      </ProfilePanelContainer>
    </div>
  )
};

ProfilePanel.propTypes = {
  userData: PropTypes.shape({
    Username: PropTypes.string,
    Email: PropTypes.string,
    Role: PropTypes.string
  })
};
export default ProfilePanel;
