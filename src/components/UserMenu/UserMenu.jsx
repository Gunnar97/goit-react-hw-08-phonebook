import {
  StyledHeadUser,
  StyledUserInfo,
  StyledUserName,
} from './UserMenuStyled';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { selectUser } from 'redux/auth/selectors';
import logOut from '../../images/logout-multimedia-ui-svgrepo-com.svg';

import userIcon from '../../images/user-circle-svgrepo-com.svg';
import { logoutThunk } from '../../redux/auth/operations';

const UserMenu = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutThunk());
  };
  return (
    <StyledHeadUser>
      <StyledUserInfo>
        <ReactSVG src={userIcon} width="32px" height="32px" />
        <StyledUserName>{name}</StyledUserName>
      </StyledUserInfo>

      <Link onClick={handleLogout}>
        <ReactSVG src={logOut} width="32px" height="32px" />
      </Link>
    </StyledHeadUser>
  );
};

export default UserMenu;
