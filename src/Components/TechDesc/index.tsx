import { ABOUT_ME, TECH_DESC } from '../../Constants/mobileComponents'
import { CustomBox } from '../../Styles/customBox'
import { CONTEXT } from '../../App/context'
import React, { useContext, useEffect, useState } from 'react'
import RenderMedia from '../Media'
import Typewriter from 'typewriter-effect'
import { GreenBoxText } from '../../utils/greenBoxText'
import RenderText from '../Text'

const TechDesc = () => {
     const { state } = useContext(CONTEXT)
     const [greenText, setText]: any = useState('')
     const [greenImg, setImg]: any = useState('')
     const [greenLevel, setlevel]: any = useState('')
     const { greenBox }: any = state

     useEffect(() => {
          setText(greenBox?.text)
          setImg(greenBox?.icon)
          setlevel(greenBox?.level)
     }, [greenBox])

     console.log(greenText, greenLevel)

     return ((greenText || greenImg || greenLevel) &&
          <CustomBox {...TECH_DESC.$mainContainer}>
               <RenderText text={greenText} {...TECH_DESC.textImage} />
               <CustomBox {...TECH_DESC.barMain}>
                    <RenderMedia src={greenImg} width={'5vh'} height={'5vh'} $styleString={'border-radius: 2vh; padding: 1vh;'} />
                    <CustomBox {...TECH_DESC.barContainer}>
                         <CustomBox {...TECH_DESC.barLevelContainer(greenLevel)} barAnimation>
                              {greenLevel >= 4 && <CustomBox {...TECH_DESC.typeWritter}>
                                   <Typewriter
                                        options={{
                                             cursor: '!',
                                             delay: 70,
                                             deleteSpeed: 10,
                                             strings: GreenBoxText(greenLevel),
                                             autoStart: true,
                                             loop: false,
                                        }}
                                   />
                              </CustomBox>}
                         </CustomBox>
                         <CustomBox {...TECH_DESC.typeWritter}>
                              {greenLevel < 4 && <CustomBox {...TECH_DESC.typeWritter2}>
                                   <Typewriter
                                        options={{
                                             cursor: '!',
                                             delay: 70,
                                             deleteSpeed: 10,
                                             strings: GreenBoxText(greenLevel),
                                             autoStart: true,
                                             loop: false,
                                        }}
                                   />
                              </CustomBox>}
                         </CustomBox>
                    </CustomBox>
               </CustomBox>
          </CustomBox>
     )
}

export default TechDesc
