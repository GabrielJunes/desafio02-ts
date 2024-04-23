import { Card , CardHeader, CardBody, Center, Input, CardProps, Box} from '@chakra-ui/react'

import { MyHeader } from '../Header/Header'
import { Ibutton } from '../Button/Button'

export const Icard = ({...rest}: CardProps) => {
  return(
    <Card minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
      <CardHeader fontSize='30px' fontWeight='bold'>
        <Center>
          <MyHeader/>
        </Center>
      </CardHeader>
      <CardBody backgroundColor='#ffffff' borderRadius='25px' padding='15px'>
        <Center fontSize='20px' fontWeight='semibold'>
          <h1>Faça o Login</h1>
        </Center>
        <Box display='flex' flexDirection='column' gap='10px' >
          <Input placeholder='email' type='email' border='solid' borderRadius='10px' borderWidth='1px' padding='3px'/>
          <Input placeholder='password' type='password' border='solid' borderRadius='10px' borderWidth='1px' padding='3px'/>
        </Box>
        <Center >
          <Ibutton/>
        </Center>
      </CardBody>
    </Card>
  )
}