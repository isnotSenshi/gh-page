import { FunctionComponent, useContext, useState } from 'react'
import Homepage from './home'
import AboutMe from './about'
import RenderMedia from '../../Components/Media'
import { INDEX } from '../../Constants/components'
import { CustomBox } from '../../Styles/customBox'
import Experience from './experience'
import { CHANGE_SPHERE_BOX, SHOW_MODAL } from '../../Core/Types'
import { CONTEXT } from '../../App/context'
import RenderText from '../../Components/Text'
import ModalContact from '../../Components/ModalContact'

const IndexPage: FunctionComponent = () => {

     const { state, dispatch }: any = useContext(CONTEXT)
     const { mailMe }: any = state

     const handleClick = (place: any) => {
          dispatch({
               type: CHANGE_SPHERE_BOX,
               value: { text: null, icon: null, level: null }
          })

          const about: any = document.getElementsByClassName('sc-bdnyFh dEcNyL')

          switch (place) {
               case 'HOME':
                    return window.scrollTo(0, 0)
               case 'ABOUT':
                    return about[0].scrollIntoView();
               case 'EXP':
                    return window.scrollTo(99999, 99999)
               default:
                    break;
          }
     }


     return (
          <>
               <ModalContact showModal={state.showModal} />
               <CustomBox styleString={'display: inline-block; transition: .5s;'}>
                    <CustomBox onClick={() => handleClick('HOME')} >
                         <RenderMedia {...INDEX.arrowDown} />
                    </CustomBox>
                    <CustomBox onClick={() => handleClick('ABOUT')} >
                         <RenderMedia {...INDEX.arrowDown1} />
                    </CustomBox>
                    <CustomBox onClick={() => handleClick('EXP')} >
                         <RenderMedia {...INDEX.arrowDown2} />
                    </CustomBox>

                    <CustomBox onClick={() => handleClick('EXP')} >
                         <RenderMedia {...INDEX.arrowDown3(!mailMe)} />
                    </CustomBox>

               </CustomBox >
               <Homepage />
               <AboutMe />
               <Experience />
          </>
     )
}
export default IndexPage
