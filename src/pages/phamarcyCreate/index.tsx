import React, { useContext, useState } from 'react'
import { useQuery } from 'react-query'
import { useParams, Link } from 'react-router-dom'
import { fetchPhamarcyById , fetchPhamarcyByIdDelete, fetchPhamarcyCreate} from '../../services/phamarcy/phamarcy.service';
import { Descriptions, Badge,  } from 'antd';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    FormControl,
    FormLabel,
    Input,
    Button,
    Box
} from '@chakra-ui/react'
import styles from './styles.module.css'
import moment from 'moment';
import { useFormik } from 'formik';
import validationSchema from './validate'
import { UserContext } from '../../context/AuthContext';
import ReactDOM from 'react-dom';
export default function PhamarcyCreate() {
    const { user, setUser } = useContext(UserContext);
    const [isCreated, setIsCreated] = useState(false);
    const [isStatus, setIsStatus] = useState(false);
    const [isMessage, setIsMessage] = useState("");
    const MyComponent = () => {
        return <div>Hello from MyComponent!</div>;
      };
    const formik = useFormik({
        initialValues: {
            phamarcyName:"",
            adress: "",
            phoneNumber: ""
        },
        validationSchema,
        onSubmit: async (values, bag) => {
            try {
                if (!values.phamarcyName) {
                    bag.setErrors({ phamarcyName: 'Please enter a valid phamarcy name' });
                  } 
                  if (!values.phoneNumber) {
                    bag.setErrors({ adress: 'Please enter a valid phone number' });
                  } 
                  if (!values.adress) {
                    bag.setErrors({ phoneNumber: 'Please enter a valid adress' });
                  }
                const data = await fetchPhamarcyCreate(values,user?.token)
                if(data){
                    setIsCreated(true);
                    console.log(data)
                    setIsStatus(data.status)
                    setIsMessage(data.message)
                    console.log(isMessage)
                }
            } catch (error) {
                console.log(error)
            }
        }
    })
    return (
        <>
        {isStatus ? (
            <>
            <Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    Eczane Oluşturuldu
  </AlertTitle>
</Alert>
            </>
        ) : (
            <>
            {(isMessage=="") ? (
                 <>
             </>
            ) : (
                <>
                <>
                    <Alert
  status='error'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    Hata
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
                Eczane Oluşmadı sebebi : {isMessage}
  </AlertDescription>
</Alert>
                </>
                </>
            )}
            </>
        )}
            <form onSubmit={formik.handleSubmit}>
        <FormControl>
        <Box my={5}>
                        {
                            formik.errors.phamarcyName && (
                                <Alert status='error'>
                                    {formik.errors.phamarcyName}
                                </Alert>
                            )
                        }
                        {
                            formik.errors.adress && (
                                <Alert status='error'>
                                    {formik.errors.adress}
                                </Alert>
                            )
                        }
                        {
                            formik.errors.phoneNumber && (
                                <Alert status='error'>
                                    {formik.errors.phoneNumber}
                                </Alert>
                            )
                        }
                    </Box>
        <Descriptions title="Eczane Bilgileri" bordered>
                <Descriptions.Item label="Eczane Adı">
                <FormLabel>
                                    Eczane Adı
                                </FormLabel>
                                <Input
                                onChange={formik.handleChange} value={formik.values.phamarcyName}
                                    name="phamarcyName"
                                />
                </Descriptions.Item>
                <Descriptions.Item label="Eczane Numarası">
                <FormLabel>
                                    Telefon Numarası
                                </FormLabel>
                                <Input
                                onChange={formik.handleChange} value={formik.values.phoneNumber}
                                    name="phoneNumber"
                                />
                </Descriptions.Item>
                <Descriptions.Item label="Eczane Adresi">
                <FormLabel>
                                    Eczane Adres
                                </FormLabel>
                                <Input
                                onChange={formik.handleChange} value={formik.values.adress}
                                    name="adress"
                                />
                </Descriptions.Item>
            </Descriptions>
        </FormControl>
        <Button  mt={5} colorScheme="blue"  id="button" type='submit'>
                    Oluştur
                </Button>
        </form>
               
            </>
    )
}
