import React, { useState } from 'react';
import './Navbar.css';
import { RiMenuUnfoldLine, RiMenuFoldFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../../../app/auth/authReducer';
import Sidebar from '../Sidebar/Sidebar';
import { Button } from '@chakra-ui/react';
import { HiHome } from 'react-icons/hi';
import { FaUserAlt } from 'react-icons/fa';

import {
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
} from '@chakra-ui/react';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setLogout());
  };

  return (
    <React.Fragment>
      <div className="navbar">
        <Flex justify="space-between">
          <Flex>
            {menu === false ? (
              <RiMenuUnfoldLine
                className="icon"
                onClick={() => setMenu(!menu)}
              />
            ) : (
              <RiMenuFoldFill className="icon" onClick={() => setMenu(!menu)} />
            )}
            <Link to="/">
              <Button
                _hover={{
                  background: 'white',
                  color: '#00214D',
                }}
                rightIcon={<HiHome />}
                color="white"
                variant="outline"
              >
                Home
              </Button>
            </Link>
          </Flex>
          <Text fontWeight="600" pt="0.5rem" fontSize="lg" color="white">
            Somos Más
          </Text>
          <Menu>
            <MenuButton
              _hover={{
                background: 'white',
                color: '#00214D',
              }}
              _active={{ bg: '##171923' }}
              as={Button}
              color="white"
              variant="outline"
              rightIcon={<FaUserAlt />}
            >
              {user.name || 'usuario'}
            </MenuButton>
            <MenuList>
              <MenuGroup title="Perfil">
                <Link to="/">
                  <MenuItem color="blue.800">Home</MenuItem>
                </Link>
                <Link to="/">
                  <MenuItem onClick={handleLogout} color="red.800">
                    Logout
                  </MenuItem>
                </Link>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Flex>
      </div>

      {menu === true ? (
        <div className="flex">
          <Sidebar setMenu={setMenu} />
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default Navbar;
