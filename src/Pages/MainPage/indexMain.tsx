import { FunctionComponent, useContext } from 'react'
import Homepage from './home'
import AboutMe from './about'
import RenderMedia from '../../Components/Media'
import { INDEX } from '../../Constants/components'
import { CustomBox } from '../../Styles/customBox'
import Experience from './experience'
import { CHANGE_SPHERE_BOX } from '../../Core/Types'
import { CONTEXT } from '../../App/context'
import ModalContact from '../../Components/ModalContact'

const IndexPage: FunctionComponent = () => {
     const { state, dispatch }: any = useContext(CONTEXT)
     const { mailMe }: any = state
     const about: any = document.getElementsByClassName('aboutScroll')

     const handleClick = (place: any) => {
          dispatch({
               type: CHANGE_SPHERE_BOX,
               value: { text: null, icon: null, level: null }
          })

          switch (place) {
               case 'HOME':
                    return window.scrollTo(0, 0)
               case 'ABOUT':
                    return about[0].scrollIntoView()
               case 'EXP':
                    return window.scrollTo(99999, 99999)
               default:
                    break
          }
     }

     return (
          <>
               <ModalContact showModal={state.showModal} />
               <CustomBox $styleString={'display: inline-block; transition: .5s;'}>
                    <CustomBox onClick={() => handleClick('HOME')} >
                         <RenderMedia {...INDEX.$arrowDow} />
                    </CustomBox>
                    <CustomBox onClick={() => handleClick('ABOUT')} >
                         <RenderMedia {...INDEX.$arrowDow1} />
                    </CustomBox>
                    <CustomBox onClick={() => handleClick('EXP')} >
                         <RenderMedia {...INDEX.$arrowDow2} />
                    </CustomBox>

                    <CustomBox onClick={() => handleClick('EXP')} >
                         <RenderMedia {...INDEX.$arrowDow3(!mailMe)} />
                    </CustomBox>

               </CustomBox >
               <Homepage />
               <AboutMe />
               <Experience />
          </>
     )
}
export default IndexPage
