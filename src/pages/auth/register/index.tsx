import React, { Component } from 'react'
import { FormControl, FormLabel, Heading, Box, Flex, Input, Button, Alert } from '@chakra-ui/react'
import { useFormik } from 'formik'
import { postUser } from '../../../services/user/user.service'
import validationSchema from './validate'
import { useAuth ,AuthProvider} from '../../../context/AuthContext'
export default function Register() {
    const formik = useFormik({
        initialValues: {
            mail: "",
            password: "",
            fullName: "",
            birthDayDate: "",
            identityId: "",
            adress: "",
            phoneNumber: ""
        },
        validationSchema,
        onSubmit: async (values, bag) => {
            try {
                if (!values.mail) {
                    bag.setErrors({ mail: 'Please enter a valid email address' });
                  } 
                  if (!values.phoneNumber) {
                    bag.setErrors({ mail: 'Please enter a valid phone number' });
                  } 
                  if (!values.password) {
                    bag.setErrors({ mail: 'Please enter a valid password' });
                  } 
                  if (!values.password) {
                    bag.setErrors({ mail: 'Please enter a identityid' });
                  } 
                const data = await postUser(values)
            } catch (error) {
                console.log("bilinmeyen bir hata oluştu")
            }
        }
    })
    
    return (
        <div>
            <Flex align="center" width="full" justifyContent="center">
                <Box pt={10}>
                    <Box textAlign="center">
                        Kayıt Ol
                    </Box>
                    <Box my={5}>
                        {
                            formik.errors.mail && (
                                <Alert status='error'>
                                    {formik.errors.mail}
                                </Alert>
                            )
                        }
                        {
                            formik.errors.password && (
                                <Alert status='error'>
                                    {formik.errors.password}
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
                            formik.errors.fullName && (
                                <Alert status='error'>
                                    {formik.errors.fullName}
                                </Alert>
                            )
                        }
                    </Box>
                    <Box my={5} textAlign="left">
                        <form onSubmit={formik.handleSubmit}>
                            <FormControl>
                                <FormLabel>
                                    Mail Adresi
                                </FormLabel>
                                <Input
                                onChange={formik.handleChange} value={formik.values.mail}
                                    name="mail"
                                />
                            </FormControl>
                            <FormControl mt={5}>
                                <FormLabel>
                                    İsim Soyisim
                                </FormLabel>
                                <Input
                                onChange={formik.handleChange} value={formik.values.fullName}
                                    name="fullName"
                                />
                            </FormControl>
                            <FormControl mt={5}>
                                <FormLabel>
                                    Doğum Tarihi
                                </FormLabel>
                                <Input
                                onChange={formik.handleChange} value={formik.values.birthDayDate}
                                    name="birthDayDate"
                                    type="datetime-local"
                                />
                            </FormControl>
                            <FormControl mt={5}>
                                <FormLabel>
                                    TC Kimlik
                                </FormLabel>
                                <Input
                                onChange={formik.handleChange} value={formik.values.identityId}
                                    name="identityId"
                                />
                            </FormControl>
                            <FormControl mt={5}>
                                <FormLabel>
                                    Şifre
                                </FormLabel>
                                <Input
                                onChange={formik.handleChange} value={formik.values.password}
                                    name="password"
                                    type="password"
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
                                    Telefon Numarası
                                </FormLabel>
                                <Input
                                onChange={formik.handleChange} value={formik.values.phoneNumber}
                                    name="phoneNumber"
                                />
                            </FormControl>
                            <Button mt={4} width="full" type="submit">
                                Kayıt Ol
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Flex>
        </div>
    )
}
