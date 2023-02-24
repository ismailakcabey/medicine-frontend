import { ReactNode, useContext } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { UserContext } from '../../context/AuthContext';

const Links = ['Eczaneler', 'Kullanıcılar', ];


export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, setUser } = useContext(UserContext);
const handleLogout= ()=>{
    setUser(null);
}
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Link to="/">
            <Avatar
                  size={'sm'}
                  src={
                    'https://cdn-icons-png.flaticon.com/512/898/898681.png'
                  }
                />
            </Link>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>

<Link to="/phamarcy">Eczaneler</Link>
              <Link to="/user">Kullanıcılar</Link>
              <Link to="/dealer">Bayiler</Link>
              <Link to="/orders">Siparişler</Link>
              </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://cdn-icons-png.flaticon.com/512/2102/2102647.png'
                  }
                />
              </MenuButton>
              <MenuList>
                { user ? (
                    <>
                    <MenuItem>
                    <Link to="/profile">
                    <Button colorScheme='blue'>Profilim</Button>
                    </Link>
                    <MenuDivider />
                    <MenuItem>
                <Button colorScheme='blue' onClick={handleLogout}>Çıkış Yap</Button>
                </MenuItem>
                    </MenuItem>
                    </>
                ) : (
                    <>
                <MenuItem>
                <Link to="/login">
                <Button colorScheme='blue'>Giriş Yap</Button>
                </Link>
                </MenuItem>
                <MenuItem>
                <Link to="/register">
                <Button colorScheme='blue'>Kayıt Ol</Button>
                </Link>
                </MenuItem>
                    </>
                ) }
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <Link to="/phamarcy">Eczaneler</Link>
              <Link to="/user">Kullanıcılar</Link>
              <Link to="/dealer">Bayiler</Link>
              <Link to="/orders">Siparişler</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}