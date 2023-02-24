import React , {useState} from 'react'
import "./Model.css";
import { Descriptions, Badge } from 'antd';
import { useParams, Link } from 'react-router-dom'
import { FullscreenExitOutlined } from '@ant-design/icons'
import { fetchPhamarcyById, fetchPhamarcyByIdUpdate } from '../../../services/phamarcy/phamarcy.service';
import { useQuery } from 'react-query';
import { FormControl, FormLabel, Heading, Box, Flex, Input, Alert , Button} from '@chakra-ui/react'
import validationSchema from './validate'
import { useFormik } from 'formik'
export default function PhamarcyCreateModel() {
   const [modal, setModal] = useState(false);
   const { phamarcy_id } = useParams();
   const { isLoading, error, data } = useQuery(["phamarcy", phamarcy_id], () => fetchPhamarcyById(phamarcy_id))
  const toggleModal = () => {
    setModal(!modal);
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
            const data = fetchPhamarcyByIdUpdate(phamarcy_id,values)
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
            <h2><b>{data.phamarcyName} </b> Eczanesini Güncelle</h2>
            <br />
            <p>
            <Box  my={5} textAlign="left">
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
                        <form onSubmit={formik.handleSubmit}>
                            <FormControl>
                                <FormLabel>
                                    Eczane Adı
                                </FormLabel>
                                <Input
                                onChange={formik.handleChange} value={formik.values.phamarcyName}
                                    name="phamarcyName"
                                />
                            </FormControl>
                            <FormControl mt={5}>
                                <FormLabel>
                                    Eczane Numarası
                                </FormLabel>
                                <Input
                                onChange={formik.handleChange} value={formik.values.phoneNumber}
                                    name="phoneNumber"
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
