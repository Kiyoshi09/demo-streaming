import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Menu, MenuItem, MenuButton, MenuDivider } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
// import { QueryProfileByEmailApi } from '../apis/QueryProfileByEmailApi';
import { Image } from '@aws-amplify/ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { setEmail, setProfileId, setProfileName, setIsKids } from '../redux/userprofileSlice';

export const AccountMenuComponent = ({ onSignout, children }) => {
  const [profiles, setProfiles] = useState([]);
  const userprofile = useSelector((state) => {
    return state.userprofile;
  });
  const dispatch = useDispatch();

  const profileData = useCallback(async () => {
    //** GraphQL の処理に変更 **/
    // let a = await QueryProfileByEmailApi(userprofile.email);
    // あとで有効化
    // setProfiles(a);
  }, [userprofile.email]);

  useEffect(() => {
    profileData();
  }, [profileData]);

  const handleChangeProfile = (event, profile) => {
    dispatch(setProfileId(profile.id));
    dispatch(setEmail(profile.email));
    dispatch(setProfileName(profile.name));
    dispatch(setIsKids(profile.isKids));
  };

  return (
    <Menu menuButton={<StyledMenuButton>{children}</StyledMenuButton>} key="bottom" direction="bottom" align="end" position="anchor" viewScroll="auto" arrow={true} offsetX={0} offsetY={12}>
      {profiles.map((profile) => (
        <MenuItem key={profile.id} disabled={userprofile.profileName === profile.name ? true : false} onClick={(event) => handleChangeProfile(event, profile)}>
          {profile.isKids === true ? <Image alt="profile" src="https://www.kiyotaro.cloud/images/tealium_beast.png" width="40px" /> : <Image alt="profile" src="https://www.kiyotaro.cloud/images/tealium-logo-small.jpeg" width="40px" />}
          {profile.name}
        </MenuItem>
      ))}
      <MenuDivider />
      <MenuItem onClick={onSignout}>Sign Out</MenuItem>
    </Menu>
  );
};

const StyledMenuButton = styled(MenuButton)`
  width: 50px;
  padding: 0 0 0 0;
`;
