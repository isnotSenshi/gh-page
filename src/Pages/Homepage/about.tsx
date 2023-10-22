import { FunctionComponent, useContext } from 'react'
import { CustomBox } from '../../Styles/customBox'
import { ABOUT_ME, TEXT_SPHERE } from '../../Constants/components'
import RenderMedia from '../../Components/Media'
import RenderText from '../../Components/Text'
import { COLORS } from '../../Constants/colors'
import { ShakingText } from '../../Styles/media'
import Typewriter from 'typewriter-effect'
import TextShpere from '../../Components/TextSphere/TextShpere'
import TechDesc from '../../Components/TechDesc'

const AboutMe: FunctionComponent = () => {

     return (
          <>
               <CustomBox styleString={ABOUT_ME.styleString}>
                    <CustomBox styleString={ABOUT_ME.mainContainer.styleString} fadeAnimation>
                         <CustomBox {...ABOUT_ME.titleContainer}>
                              <RenderText text={"About Me"} {...ABOUT_ME.titleAbout} color={COLORS.WHITE} />
                              <CustomBox {...ABOUT_ME.greenBar} />
                         </CustomBox>

                         <CustomBox styleString={'display: flex; justify-content: space-around;'}>
                              <CustomBox {...ABOUT_ME.introductionMe}>
                                   <CustomBox {...ABOUT_ME.textBox}>
                                        <RenderText text={"Who am I?"} {...ABOUT_ME.whoIam} color={COLORS.WHITE} />
                                        <RenderText text={"I'm Mathias 😁, nice to meet you!"} {...ABOUT_ME.text1} color={COLORS.WHITE} />
                                        <RenderText text={"⚡ I'm a Full-Stack developer focusing on Front-End applications."} {...ABOUT_ME.text1} color={COLORS.WHITE} />
                                        <RenderText text={"⚡ You can find me working with React, JavaScript or TypeScript, Native, Node, Apollo GQL and sometimes with Flutter."} {...ABOUT_ME.text1} color={COLORS.WHITE} />
                                        <CustomBox {...ABOUT_ME.typeWritter}>
                                             ⚡ <CustomBox styleString={'text-indent: .7vh;'}>
                                                  <Typewriter
                                                       options={{
                                                            cursor: '<',
                                                            delay: 45,
                                                            deleteSpeed: 10,
                                                            strings: ['Pocket solutions? Widely resolutive!.',
                                                                 'Always flexible, like a rubber.',
                                                                 "If I don't know it, then I can learn it.",
                                                                 'Self taught 24/7!',
                                                            ],
                                                            autoStart: true,
                                                            loop: true,
                                                       }}
                                                  />
                                             </CustomBox>
                                        </CustomBox>
                                        <RenderText text={`Since 2014 - I've been working on different projects, some of my own, others as a formal programmer.
                                   Always looking for new challenges and places where I can achieve experience and improve myself. This has lead me
                                   working on some amazing projectsm at some amazing palces and with some great people💖`} {...ABOUT_ME.text1} color={COLORS.WHITE} />
                                        <CustomBox {...ABOUT_ME.whiteBar} />
                                        <CustomBox styleString={'display: flex;'}>
                                             <RenderMedia {...ABOUT_ME.location} />
                                             <RenderText text={"Buenos Aires, Argentina"} {...ABOUT_ME.text1} color={COLORS.WHITE} />
                                        </CustomBox>
                                   </CustomBox >
                              </CustomBox>

                              <CustomBox styleString={'display: inline-block;'}>
                                   <CustomBox {...ABOUT_ME.skills}>
                                        <RenderText text={"Skills"} {...ABOUT_ME.skillsText} color={COLORS.WHITE} />
                                   </CustomBox>

                                   <CustomBox {...TEXT_SPHERE.container}>
                                        <TextShpere />
                                        <TechDesc />
                                   </CustomBox>
                              </CustomBox>

                         </CustomBox>
                    </CustomBox>
               </CustomBox>
          </>
     )
}
export default AboutMe
