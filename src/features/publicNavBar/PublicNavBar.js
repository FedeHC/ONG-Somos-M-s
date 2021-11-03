import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo-ngo.png';
import {
  Box,
  Flex,
  Stack,
  Text,
  IconButton,
  Button,
  Collapse,
  Icon,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { PUBLIC_LINKS } from '../publicLinks/PublicLinks';
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../../app/auth/authReducer';

const PublicNavBar = () => {
  const dispatch = useDispatch();
  const { logged, user } = useSelector(state => state.auth);
  const handleLogout = () => {
    dispatch(setLogout());
  };
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        {/* ICON BUTTON */}
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'flex' }}>
          {/* LOGO */}
          <Image src={Logo} w="100px" alt="Logo Somos Más" />

          {/* DESKTOP NAV */}
          <Flex display={{ base: 'none', md: 'flex' }} ml={3} mt={3}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-start'}
          direction={'row'}
          spacing={3}
        >
          {!logged ? (
            <>
              {' '}
              <Link to="/login">
                <Button
                  display={{ base: 'none', md: 'inline-flex' }}
                  fontSize={'sm'}
                  fontWeight={300}
                  color={'black'}
                  bg={'#bae8e8'}
                  _hover={{
                    bg: 'cyan.100',
                  }}
                >
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  display={{ base: 'none', md: 'inline-flex' }}
                  fontSize={'sm'}
                  fontWeight={300}
                  color={'white'}
                  bg={'#00214d'}
                  _hover={{
                    bg: 'blue.800',
                  }}
                >
                  Registrarse
                </Button>
              </Link>{' '}
            </>
          ) : (
            <Menu>
              <MenuButton
                as={Button}
                _hover={{ bg: 'blue.800' }}
                color="white"
                bg={'#00214d'}
              >
                {user.name}
              </MenuButton>
              <MenuList>
                <MenuGroup title="Perfil">
                  <Link to="/backoffice">
                    <MenuItem color="blue.800">Backoffice</MenuItem>
                  </Link>
                  <MenuItem onClick={handleLogout} color="red.800">
                    Logout
                  </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          )}
        </Stack>
      </Flex>

      {/* MOBILE NAV */}
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {PUBLIC_LINKS.map(navItem => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link to={navItem.href ?? '#'}>
                {/* <LinkChakra p={2}
                            fontSize={'sm'}
                            fontWeight={500}
                            color={linkColor}
                            _hover={{
                              textDecoration: 'none',
                              color: linkHoverColor,
                            }}>{navItem.label}</LinkChakra> */}
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map(child => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

// DESKTOP
const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      to={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

// MOBILE
const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {PUBLIC_LINKS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ children, label, href }) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map(child => (
              <Link key={child.label} py={2} to={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default PublicNavBar;
