import {
  Flex,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  Icon,
  useColorModeValue,
  createIcon,
  Avatar,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { UserContext } from '../../context/AuthContext';

export default function Home() {
  const { user, setUser } = useContext(UserContext);
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      py={12}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        boxShadow={'2xl'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        p={10}
        spacing={8}
        align={'center'}>
        <Avatar
                  size={'2xl'}
                  src={
                    'https://cdn-icons-png.flaticon.com/512/9756/9756309.png'
                  }
                />
        <Stack align={'center'} spacing={2}>
          <Heading
            textTransform={'uppercase'}
            fontSize={'3xl'}
            color={useColorModeValue('gray.800', 'gray.200')}>
            Hoş Geldin {user?.fullName}
          </Heading>
          <Text fontSize={'lg'} color={'gray.500'}>
            Çalışmaya Hazırsın
          </Text>
        </Stack>
        
      </Stack>
    </Flex>
  );
}
