import { Footer } from "../Footer/Footer"
import { MyHeader } from "../Header/Header"

export const Layout = ({ children }: any) => {
  return(
    <>
      <MyHeader as='h1' size='2xl' marginBottom='10px'/>
      { children }
      <Footer />
    </>
  )
}
