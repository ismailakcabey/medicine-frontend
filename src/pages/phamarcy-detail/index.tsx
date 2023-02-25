import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { useParams, Link } from 'react-router-dom'
import { fetchPhamarcyById , fetchPhamarcyByIdDelete} from '../../services/phamarcy/phamarcy.service';
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

export default function PharmacyDetail() {
    const { user, setUser } = useContext(UserContext);
    const { phamarcy_id } = useParams();
    const { isLoading, error, data } = useQuery(["phamarcy", phamarcy_id], () => fetchPhamarcyById(phamarcy_id,user?.token))
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
                
            
                <Button onClick={()=>fetchPhamarcyByIdDelete(phamarcy_id,user?.token)} id={styles.button} type="primary" danger size="large">
                    Sil
                </Button>
            <Descriptions title="Eczane Bilgileri" bordered>
            <Descriptions.Item label="Güncelle">
            <PhamarcyCreateModel/>
            </Descriptions.Item>
                <Descriptions.Item label="Eczane Adı">{data.phamarcyName}</Descriptions.Item>
                <Descriptions.Item label="Oluşturulma Tarihi">{moment(data.createdDate).format("DD/MM/YYYY")}</Descriptions.Item>
                <Descriptions.Item label="Güncelleme Tarihi">{moment(data.updatedDate).format("DD/MM/YYYY")}</Descriptions.Item>
                <Descriptions.Item label="Güncelleyen kişi">{data.updatedById}</Descriptions.Item>
                <Descriptions.Item label="Oluşturan kişi">{data.createdById}</Descriptions.Item>
                <Descriptions.Item label="Aktif mi" span={3}>
                    <Badge status="processing" text="Aktif" />
                </Descriptions.Item>
                <Descriptions.Item label="İlaç Sayısı">{data.medicineCount}</Descriptions.Item>
                <Descriptions.Item label="Eczane Numarası">{data.phoneNumber}</Descriptions.Item>
                <Descriptions.Item label="Eczane Adresi">
                    {data.adress}
                </Descriptions.Item>
            </Descriptions>
        </>
    )
}
