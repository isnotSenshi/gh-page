import { FunctionComponent, useContext } from 'react'
import Homepage from './home'
import AboutMe from './about'
import Experience from './experience'
import { CONTEXT } from '../../App/context'
import ModalContact from '../../Components/ModalContact'

const IndexPageMobile: FunctionComponent = () => {

     const { state }: any = useContext(CONTEXT)


     return (
          <>
               <ModalContact showModal={state.showModal} />
               <Homepage />
               <AboutMe />
               <Experience />
          </>
     )
}
export default IndexPageMobile
