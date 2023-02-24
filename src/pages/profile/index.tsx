import React, { useContext } from 'react'
import { Descriptions, Badge, Button } from 'antd';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'
import styles from './styles.module.css'
import moment from 'moment';
import PhamarcyCreateModel from '../../components/models/phamarcyCreate';
import { UserContext } from '../../context/AuthContext';
export default function Profile() {
    const { user, setUser } = useContext(UserContext);
  return (
    <>
    <Descriptions title="Profil Bilgileri" bordered>
                <Descriptions.Item label="Kullanıcı Id Bilgisi">{user?._id}</Descriptions.Item>
                <Descriptions.Item label="Kullanıcının Adı">{user?.fullName}</Descriptions.Item>
                <Descriptions.Item label="Güncelleme Tarihi">{moment(user?.updatedDate).format("DD/MM/YYYY")}</Descriptions.Item>
                <Descriptions.Item label="Güncelleyen kişi">{user?.updatedById}</Descriptions.Item>
                <Descriptions.Item label="Oluşturan kişi">{user?.createdById}</Descriptions.Item>
                <Descriptions.Item label="Kullanıcı Maili">{user?.mail}</Descriptions.Item>
                <Descriptions.Item label="Eczane id bilgisi">{user?.phamarcyId}</Descriptions.Item>
                <Descriptions.Item label="Kullanıcı adresi">
                {user?.adress}
                </Descriptions.Item>
                <Descriptions.Item label="Kullanıcı Kimlik numarası">
                {user?.identityId}
                </Descriptions.Item>
                <Descriptions.Item label="Kullanıcı rolü">
                {user?.role}
                </Descriptions.Item>
                <Descriptions.Item label="Kullanıcı telefon numarası">
                {user?.phoneNumber}
                </Descriptions.Item>
                <Descriptions.Item label="Kullanıcı tokenı">
                {user?.token}
                </Descriptions.Item>
            </Descriptions>
    </>
  )
}
