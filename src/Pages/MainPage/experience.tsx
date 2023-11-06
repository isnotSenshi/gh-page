import { FunctionComponent, useEffect, useContext, useRef } from 'react'
import { CustomBox } from '../../Styles/customBox'
import { EXPERIENCE } from '../../Constants/components'
import RenderMedia from '../../Components/Media'
import RenderText from '../../Components/Text'
import { COLORS } from '../../Constants/colors'
import useOnScreen from '../../Hooks/checkVisibility'
import { CONTEXT } from '../../App/context'
import { MAIL_ME_STATUS, SHOW_MODAL } from '../../Core/Types'
import { v4 as uuidv4 } from 'uuid'

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
          <>
               <CustomBox $styleString={EXPERIENCE.$styleString}>
                    <CustomBox $styleString={EXPERIENCE.$mainContainer.$styleString}>
                         <CustomBox {...EXPERIENCE.titleContainer}>
                              <RenderText text={"Experience"} {...EXPERIENCE.titleExperience} color={COLORS.WHITE} id='about-me' />
                              <CustomBox {...EXPERIENCE.greenBar} />
                         </CustomBox>

                         <CustomBox {...EXPERIENCE.cardContainer}>
                              {EXPERIENCE.cardBox.map((card: any, i: any) => (
                                   <CustomBox {...card} key={uuidv4()}>
                                        <CustomBox {...card.$upperPart}>
                                             <RenderText {...card.$cardTitle} />
                                        </CustomBox>
                                        <CustomBox {...card.$cardBoxLogo}>
                                             <RenderMedia {...card.media} />
                                        </CustomBox>
                                        <RenderText {...card.$cardBoxText} />
                                        <RenderText {...card.$cardBoxSubText} />

                                        <CustomBox style={{ margin: '-2vh 0' }}>
                                             {card.$cardBoxUlText.text.map((cardUl: any, i: any) => (
                                                  <CustomBox style={{ textAlign: 'left', left: '3vh', maxWidth: '25vh', marginTop: '1vh' }} key={uuidv4()}>
                                                       <RenderText {...card.$cardBoxUlText} text={cardUl} />
                                                  </CustomBox>
                                             ))}
                                        </CustomBox>

                                        <CustomBox $styleString={card.$miniTextBoxes.$mainContainer}>
                                             {card.$miniTextBoxes.text.map((boxText: any, i: any) => (
                                                  <CustomBox $styleString={card.$miniTextBoxes.container} key={uuidv4()}>
                                                       <RenderText {...card.$cardBoxUlText} text={boxText} />
                                                  </CustomBox>
                                             ))}
                                        </CustomBox>
                                   </CustomBox>
                              ))}
                         </CustomBox>

                         <CustomBox $styleString={'display: flex; gap: .7vh; justify-content: center;'} ref={ref}>
                              {EXPERIENCE.$linkedInMessage.map((message: any) =>
                                   <RenderText {...message} key={uuidv4()} />
                              )}
                         </CustomBox>

                         <RenderText {...EXPERIENCE.finalMessage} />

                         <CustomBox {...EXPERIENCE.contactWith} onClick={setModal}>
                              {mailMe && <RenderText text={'Contact with me'} {...EXPERIENCE.contactWithText} />}
                         </CustomBox>
                    </CustomBox>

               </CustomBox>
          </>
     )
}
export default Experience
