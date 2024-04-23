import {  Button } from '@chakra-ui/react'
import { login } from '../../services/login'

export const Ibutton = (event: any) => {
    return (
        <Button onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='5px' backgroundColor='teal' borderRadius='15px' >
           Entrar
        </Button>
    )
}