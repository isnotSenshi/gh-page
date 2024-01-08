import { FunctionComponent, useEffect, useContext, useRef } from 'react'
import { CustomBox } from '../../Styles/customBox'
import { EXPERIENCE } from '../../Constants/mobileComponents'
import RenderText from '../../Components/Text'
import { COLORS } from '../../Constants/colors'
import useOnScreen from '../../Hooks/checkVisibility'
import { CONTEXT } from '../../App/context'
import { MAIL_ME_STATUS, SHOW_MODAL } from '../../Core/Types'
import { Link } from 'react-router-dom'
import SwiperComponent from '../../Components/Swiper'
import uniqueId from 'lodash/uniqueId'

const Experience: FunctionComponent = () => {
     const { state, dispatch }: any = useContext(CONTEXT)
     const { mailMe }: any = state
     const ref = useRef<HTMLDivElement>(null)
     const isVisible = useOnScreen(ref)

     const setModal = () => {
          dispatch({
               type: SHOW_MODAL,
               value: !state.showModal
          })
     }
     useEffect(() => {
          dispatch({
               type: MAIL_ME_STATUS,
               value: isVisible
          })
     }, [isVisible])

     return (
          <CustomBox $styleString={EXPERIENCE.$styleString}>
               <CustomBox $styleString={EXPERIENCE.$mainContainer.$styleString}>
                    <CustomBox {...EXPERIENCE.titleContainer}>
                         <RenderText text={"Experience"} {...EXPERIENCE.titleExperience} color={COLORS.WHITE} />
                         <CustomBox {...EXPERIENCE.greenBar} />
                    </CustomBox>

                    <SwiperComponent />

                    <CustomBox {...EXPERIENCE.contactWithContainer} ref={ref}>
                         {EXPERIENCE.$linkedInMessage.map((message: any) =>
                              <RenderText {...message} key={uniqueId()}/>
                         )}
                    </CustomBox>

                    <CustomBox {...EXPERIENCE.contactWithContainer} ref={ref}>
                         <RenderText {...EXPERIENCE.$resumeMessage} />
                         <Link to="/Archives/sh1-resume.pdf" target="_blank" download style={{ textDecoration: 'none' }}>
                              <RenderText {...EXPERIENCE.$resumeMessage2} />
                         </Link>
                    </CustomBox>

                    <CustomBox {...EXPERIENCE.contactWithContainer2}>
                         <CustomBox {...EXPERIENCE.contactWith} onClick={setModal}>
                              {mailMe && <RenderText text={'Contact with me'} {...EXPERIENCE.contactWithText} />}
                         </CustomBox>
                    </CustomBox>

                    <RenderText {...EXPERIENCE.finalMessage} />
               </CustomBox>

          </CustomBox>
     )
}
export default Experience
