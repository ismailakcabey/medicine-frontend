import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import {
    Alert,
    AlertIcon,
    AlertTitle,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { fetchUserList, deleteUser } from '../../services/user/user.service'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'
import {  Button } from 'antd';
import { UserContext } from '../../context/AuthContext'

export default function User() {
    const { user } = useContext(UserContext);
    const { isLoading, error, data } = useQuery('user',() => fetchUserList(user?.token))
    if (isLoading) {
        return (
            <Alert status='warning'>
                <AlertIcon />
                Yükleniyor
            </Alert>
        )
    }
    if(!user?.token){
        return(
            <Alert status='warning'>
                <AlertIcon />
                Önce Giriş Yapın
            </Alert>
        )
    }
    if (error) {
        return (
            <Alert status='error'>
                <AlertIcon />
                <AlertTitle>Beklenmedik bir hata oluştu</AlertTitle>
            </Alert>
        )
    }
    return (
        <div>
            <TableContainer>
                <Table variant='striped' colorScheme="blue" size='sm'>
                    <Thead>
                        <Tr>
                            <Th>Kullanıcı Adı</Th>
                            <Th>Telefon Numarası</Th>
                            <Th>Mail adresi</Th>
                            <Th>Rolü</Th>
                            <Th>Detay</Th>
                            <Th>Sil</Th>
                        </Tr>
                    </Thead>
                    <Tbody>

                        {data?.data?.map((item: any, key: any) => {
                            return (
                                <Tr>
                                    <Td>{item.fullName}</Td>
                                    <Td>{item.phoneNumber}</Td>
                                    <Td>{item.mail}</Td>
                                    <Td>{item.role}</Td>
                                    <Td>
                                        <Link to={`/users/${item._id}`}>
                                        <Button type="primary" size="large">
                                            Detay
                                        </Button>
                                        </Link>
                                    </Td>
                                    <Td><Button onClick={() => deleteUser(item?._id , user?.token)} type="primary" danger size="large">
                                        Sil
                                    </Button></Td>
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
}
