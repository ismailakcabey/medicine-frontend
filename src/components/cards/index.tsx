import React , { useState } from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import Item from 'antd/es/list/Item';
import { Card, CardHeader, CardBody, CardFooter , Image , Stack , Heading , Text , Divider , ButtonGroup , Button} from '@chakra-ui/react'




export default function Cards({item}:any) {
  return (
    <>
    <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://cdn-icons-png.flaticon.com/512/1404/1404513.png'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{item.phamarcyName}</Heading>
      <Text>
        {item.adress}
      </Text>
      <Text color='blue.600' >
        Yöneticisi : {item.createdById}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
    <Link to={`/phamarcy/${item._id}`}>
    <Button variant='solid' colorScheme='blue'>
        Detaya Git
      </Button>
    </Link>
    </ButtonGroup>
  </CardFooter>
</Card>
    </>
  )
}


{/**
<Card maxW='sm'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
*/}





{/**

export default function Cards({item}:any) {
  const { Meta } = Card;
  return (
    <>
    <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://cdn-icons-png.flaticon.com/512/1404/1404476.png"
      />
    }
    actions={[
      <Link to={`/phamarcy/${item._id}`}><EllipsisOutlined key="ellipsis" /><EllipsisOutlined key="ellipsis" /></Link>
    ]}
  >
    <Meta
      title={"Eczane Adı: "+item.phamarcyName}
      description={"Eczane Adresi: "+item.adress}
    />
  </Card>
    </>
  )
}
*/}