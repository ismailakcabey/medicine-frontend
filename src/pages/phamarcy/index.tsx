import React, { Component, useContext } from 'react'
import Cards from '../../components/cards'
import { Grid, SimpleGrid } from '@chakra-ui/react'
import { useQuery , useInfiniteQuery} from 'react-query'
import { fetchPhamarcyList } from '../../services/phamarcy/phamarcy.service'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    Button
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/AuthContext'
interface IItem {  
    phamarcyName: string,
    adress: string
   }

function Phamarcy() {
    const { user, setUser } = useContext(UserContext);
    const { isLoading, error, data } = useQuery('phamarcy', ()=>fetchPhamarcyList(user?.token))
    if (isLoading) {
        return (
            <Alert status='warning'>
                <AlertIcon />
                Yükleniyor
            </Alert>
        )
    }
    if(user?.token == undefined){
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
            <Link to="/phamarcy/create">
            <Button my={5} colorScheme='blue'  id="button" type='submit'>
                    Eczane Oluştur
                </Button>
                
            </Link>
            <SimpleGrid minChildWidth='120px' spacing='40px'>
        {data?.data?.map((item:IItem,key:any)=>{
            return(
                <Cards key={key} item={item}/>
            )
        })}
      
    </SimpleGrid>
            
        </div>
      )
}

export default Phamarcy


  