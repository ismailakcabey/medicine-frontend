import React , {useContext, useState} from 'react'
import "./Model.css";
import { Descriptions, Badge } from 'antd';
import { useParams, Link } from 'react-router-dom'
import { FullscreenExitOutlined } from '@ant-design/icons'
import { useQuery } from 'react-query';
import { FormControl, FormLabel, Heading, Box, Flex, Input, Alert , Button, useDisclosure, CloseButton} from '@chakra-ui/react'
import validationSchema from './validate'
import { useFormik } from 'formik'
import { Space } from 'antd';

import {
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
import { fetchUserById, updateUserById } from '../../../services/user/user.service';
import { UserContext } from '../../../context/AuthContext';

const AlertComponent = ({ data }: any) => {
    if (data) {
      return (
        <Alert status="success">
          <AlertIcon />
          Veri başarıyla kaydedildi!
        </Alert>
      );
    } else {
      // eğer status false ise burada başka bir şey gösterebilirsiniz.
      return null;
    }
  };

export default function UserUpdateModel() {
  const { user, setUser } = useContext(UserContext);
   const [modal, setModal] = useState(false);
   const { user_id } = useParams();
   const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true })

   const { isLoading, error, data } = useQuery(["user", user_id], () => fetchUserById(user_id,user?.token))
  const toggleModal = () => {
    setModal(!modal);
  };
  let updateUserStatus = false
  const formik = useFormik({
    initialValues: {
        fullName:"",
        mail: "",
        phoneNumber: "",
        identityId: "",
        birthDayDate:"",
        adress:""
    },
    validationSchema,
    onSubmit: async (values, bag) => {
        try {
            if (!values.mail) {
                bag.setErrors({ mail: 'Please enter a valid phamarcy name' });
              } 
              if (!values.phoneNumber) {
                bag.setErrors({ phoneNumber: 'Please enter a valid phone number' });
              } 
              if (!values.fullName) {
                bag.setErrors({ fullName: 'Please enter a valid adress' });
              }
              if (!values.identityId) {
                bag.setErrors({ identityId: 'Please enter a valid adress' });
              }
            const data = updateUserById(user_id, values , user?.token)
            // @ts-ignore
              if(data?.status == true){
                updateUserStatus = true
              }
            console.log(data);
        } catch (error) {
            console.log("bilinmeyen bir hata oluştu")
        }
    }
})
  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <Button colorScheme='blue' onClick={toggleModal}  id="button" type='submit'>
                    Güncelle
                </Button>
                
       
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2><b>{data?.data?.fullName}</b> Kullanıcısını Güncelle</h2>
            <br />
            <p>
            <Box  my={5} textAlign="left">
            <Box my={5}>
            <AlertComponent data={updateUserStatus} />
                        {
                            formik.errors.fullName && (
                                <Alert status='error'>
                                    {formik.errors.fullName}
                                </Alert>
                            )
                        }
                        {
                            formik.errors.mail && (
                                <Alert status='error'>
                                    {formik.errors.mail}
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
                        {
                            formik.errors.identityId && (
                                <Alert status='error'>
                                    {formik.errors.identityId}
                                </Alert>
                            )
                        }
                    </Box>
                        <form onSubmit={formik.handleSubmit}>
                        <FormControl>
                                <FormLabel>
                                    Kullanıcı adı
                                </FormLabel>
                                <Input
                                onChange={formik.handleChange} value={formik.values.fullName}
                                    name="fullName"
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>
                                    mail
                                </FormLabel>
                                <Input
                                onChange={formik.handleChange} value={formik.values.mail}
                                    name="mail"
                                />
                            </FormControl>
                            <FormControl mt={5}>
                                <FormLabel>
                                    Telefon numarası
                                </FormLabel>
                                <Input
                                onChange={formik.handleChange} value={formik.values.phoneNumber}
                                    name="phoneNumber"
                                />
                            </FormControl>
                            <FormControl mt={5}>
                                <FormLabel>
                                    kimlik kartı
                                </FormLabel>
                                <Input
                                onChange={formik.handleChange} value={formik.values.identityId}
                                    name="identityId"
                                />
                            </FormControl>
                            <FormControl mt={5}>
                                <FormLabel>
                                    Adres
                                </FormLabel>
                                <Input
                                onChange={formik.handleChange} value={formik.values.adress}
                                    name="adress"
                                />
                            </FormControl>
                            <FormControl mt={5}>
                                <FormLabel>
                                    Doğum Tarihi
                                </FormLabel>
                                <Input
                                onChange={formik.handleChange} value={formik.values.birthDayDate} type="date"
                                    name="birthDayDate"
                                />
                            </FormControl>
                            <Button mt={5} colorScheme="blue"  id="button" type='submit'>
                    Güncelle
                </Button>
                        </form>
                    </Box>
                <br />
                <br />

              
            </p>
            <button className="close-modal" onClick={toggleModal}>
            <FullscreenExitOutlined onClick={toggleModal} sizes="larger"/>
            </button>
            
          </div>
        </div>
      )}
    </>
  );
}
