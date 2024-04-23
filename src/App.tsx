import { ChakraBaseProvider, } from '@chakra-ui/react'
import { Icard } from './components/Card/Card'

function App() {
  return (
    <ChakraBaseProvider>
      <Icard/>
    </ChakraBaseProvider>
  );
}

export default App;
