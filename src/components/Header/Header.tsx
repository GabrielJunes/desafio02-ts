import { Heading, HeadingProps } from '@chakra-ui/react'

export const MyHeader  = ({...rest} : HeadingProps) => {
  return(
    <Heading  {...rest}>
     Dio Bank
    </Heading>
    
  )
}
