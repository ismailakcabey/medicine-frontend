import React, { Component, useContext } from 'react'
import { FormControl, FormLabel, Heading, Box, Flex, Input, Button, Alert } from '@chakra-ui/react'
import { useFormik } from 'formik'
import validationSchema from './validate'
import { userLogin } from '../../../services/user/user.service'
import { UserContext } from '../../../context/AuthContext'
import { boolean, string } from 'yup'
export default function Login() {
  const { user, setUser } = useContext(UserContext);
  const formik = useFormik({
    initialValues:{
      mail:"",
      password:""
    },
    validationSchema,
    onSubmit:async( values, bag ) => {
      try {
        if (!values.mail) {
            bag.setErrors({ mail: 'Please enter a valid email address' });
          } 
          if (!values.password) {
            bag.setErrors({ mail: 'Please enter a valid password' });
          }
        const data = await userLogin(values)
        console.log(data.token);
        data.user.data.token = data.token
        setUser(data.user.data)

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
                        Giriş Yap
                    </Box>
                    <Box my={5}>
                        {
                            formik.errors.mail && (
                                <Alert status='error'>
                                    {formik.errors.mail}
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
                                    Şifre
                                </FormLabel>
                                <Input
                                onChange={formik.handleChange} value={formik.values.password}
                                    name="password"
                                    type="password"
                                />
                            </FormControl>
                            <Button mt={4} width="full" type="submit">
                                Giriş Yap
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Flex>
        </div>
    )
  }
