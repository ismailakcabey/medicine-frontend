import React, { Component } from 'react'
import Cards from '../../components/cards'
import { Grid } from '@chakra-ui/react'
import { useQuery , useInfiniteQuery} from 'react-query'
import { fetchPhamarcyList } from '../../services/phamarcy/phamarcy.service'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'
interface IItem {  
    phamarcyName: string,
    adress: string
   }

function Phamarcy() {

    const { isLoading, error, data } = useQuery('phamarcy', fetchPhamarcyList)
 
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
        <div>
            <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        {data?.data?.map((item:IItem,key:any)=>{
            return(
                <Cards key={key} item={item}/>
            )
        })}
      
    </Grid>
        </div>
      )
}

export default Phamarcy


  