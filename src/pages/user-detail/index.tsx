import React, { useContext } from 'react'
import { Descriptions, Badge, Button } from 'antd';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'
import moment from 'moment';
import { useQuery } from 'react-query'
import { useParams, Link } from 'react-router-dom'
import { deleteUser, fetchUserById } from '../../services/user/user.service';
import UserUpdateModel from '../../components/models/userUpdate';
import styles from './styles.module.css'
import { UserContext } from '../../context/AuthContext';
export default function UserDetail() {
    const { user, setUser } = useContext(UserContext);
    const { user_id } = useParams();
    const { isLoading, error, data } = useQuery(["user", user_id], () => fetchUserById(user_id,user?.token))
    if (isLoading) {
        return (
            <Alert status='warning'>
                <AlertIcon />
                Yükleniyor
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
    <>

    

    <Button onClick={()=>deleteUser(data.data._id , user?.token)} id={styles.button} type="primary" danger size="large">
        Sil
    </Button>
<Descriptions title="Kullanıcı Bilgileri" bordered>
<Descriptions.Item label="Güncelle"><UserUpdateModel/></Descriptions.Item>
    <Descriptions.Item label="Kullanıcı Adı">{data.data.fullName}</Descriptions.Item>
    <Descriptions.Item label="Oluşturulma Tarihi">{moment(data.data.createdDate).format("DD/MM/YYYY")}</Descriptions.Item>
    <Descriptions.Item label="Güncelleme Tarihi">{moment(data.data.updatedDate).format("DD/MM/YYYY")}</Descriptions.Item>
    <Descriptions.Item label="Güncelleyen kişi">{data.data.updatedById}</Descriptions.Item>
    <Descriptions.Item label="Oluşturan kişi">{data.data.createdById}</Descriptions.Item>
    <Descriptions.Item label="Aktif mi" span={3}>
        <Badge status="processing" text="Aktif" />
    </Descriptions.Item>
    <Descriptions.Item label="Doğum Tarihi">{moment(data.data.birthDayDate).format("DD/MM/YYYY")}</Descriptions.Item>
    <Descriptions.Item label="Telefon Numarası">{data.data.phoneNumber}</Descriptions.Item>
    <Descriptions.Item label="Kullanıcı Adresi">
        {data.data.adress}
    </Descriptions.Item>
    <Descriptions.Item label="mail Adresi">
        {data.data.mail}
    </Descriptions.Item>
    <Descriptions.Item label="Eczane aitliği">
        {data.data.pharmcyId}
    </Descriptions.Item>
    <Descriptions.Item label="Kimlik bilgisi">
        {data.data.identityId}
    </Descriptions.Item>
</Descriptions>
</>
  )
}
