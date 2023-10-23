import { FunctionComponent, useContext } from 'react'
import Homepage from './home'
import AboutMe from './about'
import RenderMedia from '../../Components/Media'
import { INDEX } from '../../Constants/components'
import { CustomBox } from '../../Styles/customBox'
import Experience from './experience'
import { CHANGE_SPHERE_BOX } from '../../Core/Types'
import { CONTEXT } from '../../App/context'

const IndexPage: FunctionComponent = () => {

     const { state, dispatch }: any = useContext(CONTEXT)

     const clearGreenBox = () => {
          dispatch({
               type: CHANGE_SPHERE_BOX,
               value: { text: null, icon: null, level: null }
          })
     }

     const handleClickHome = () => {
          clearGreenBox()
          const element: any = document.getElementsByClassName('sc-bdnyFh dqvtPh')
          if (element) {
               window.scrollTo(0, 0)
          }
     }

     const handleClickAbout = () => {
          const element: any = document.getElementsByClassName('sc-bdnyFh dqvtPh')
          if (element) {
               element[0].scrollIntoView({ behavior: 'smooth' });
          }
     }

     const handleClickEnd = () => {
          clearGreenBox()
          const element: any = document.getElementsByClassName('sc-bdnyFh dqvtPh')
          if (element) {
               window.scrollTo(99999, 99999)
          }
     }


     return (
          <>
               <CustomBox styleString={'display: inline-block;'}>
                    <CustomBox onClick={() => handleClickHome()} >
                         <RenderMedia {...INDEX.arrowDown} />
                    </CustomBox>
                    <CustomBox onClick={() => handleClickAbout()} >
                         <RenderMedia {...INDEX.arrowDown1} />
                    </CustomBox>
                    <CustomBox onClick={() => handleClickEnd()} >
                         <RenderMedia {...INDEX.arrowDown2} />
                    </CustomBox>
                    <RenderMedia {...INDEX.arrowDown3} />
               </CustomBox>
               <Homepage />
               <AboutMe />
               <Experience />
          </>
     )
}
export default IndexPage
