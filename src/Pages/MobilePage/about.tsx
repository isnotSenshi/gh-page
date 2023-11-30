import { FunctionComponent } from 'react'
import { CustomBox } from '../../Styles/customBox'
import { ABOUT_ME, TEXT_SPHERE } from '../../Constants/mobileComponents'
import RenderMedia from '../../Components/Media'
import RenderText from '../../Components/Text'
import { COLORS } from '../../Constants/colors'
import Typewriter from 'typewriter-effect'
import TextShpere from '../../Components/TextSphere/TextShpere'
import TechDesc from '../../Components/TechDesc'
import { ABOUT_ME_TEXT } from '../../Constants/globaltext'


const AboutMe: FunctionComponent = () => {

     return (
          <>
               <CustomBox $styleString={ABOUT_ME.$styleString} className='aboutScroll'>
                    <CustomBox $styleString={ABOUT_ME.$mainContainer.$styleString}>
                         <CustomBox {...ABOUT_ME.titleContainer}>
                              <RenderText text={"About Me"} {...ABOUT_ME.titleAbout} color={COLORS.WHITE} />
                              <CustomBox {...ABOUT_ME.greenBar} />
                         </CustomBox>

                         <CustomBox $styleString={'display: block; padding: 5vw;'}>
                              <CustomBox {...ABOUT_ME.introductionMe}>
                                   <CustomBox {...ABOUT_ME.textBox}>
                                        <RenderText text={ABOUT_ME_TEXT.textBox1} {...ABOUT_ME.whoIam} color={COLORS.WHITE} />
                                        <RenderText text={ABOUT_ME_TEXT.textBox2} {...ABOUT_ME.text1} color={COLORS.WHITE} />
                                        <RenderText text={ABOUT_ME_TEXT.textBox3} {...ABOUT_ME.text1} color={COLORS.WHITE} />
                                        <RenderText text={ABOUT_ME_TEXT.textBox4} {...ABOUT_ME.text1} color={COLORS.WHITE} />
                                        <CustomBox {...ABOUT_ME.typeWritter}>
                                             ⚡ <CustomBox $styleString={'text-indent: .7vh;'}>
                                                  <Typewriter
                                                       options={{
                                                            cursor: '<',
                                                            delay: 45,
                                                            deleteSpeed: 10,
                                                            strings: ABOUT_ME_TEXT.typeWritterStrings,
                                                            autoStart: true,
                                                            loop: true,
                                                       }}
                                                  />
                                             </CustomBox>
                                        </CustomBox>
                                        <RenderText text={ABOUT_ME_TEXT.$presentationText} {...ABOUT_ME.text1} color={COLORS.WHITE} />
                                        <CustomBox {...ABOUT_ME.whiteBar} />
                                        <CustomBox $styleString={'display: flex;'}>
                                             <RenderMedia {...ABOUT_ME.location} $margin={'.15vh .25vh 0 0'} />
                                             <RenderText text={"Buenos Aires, Argentina"} {...ABOUT_ME.text1} color={COLORS.WHITE} />
                                        </CustomBox>
                                   </CustomBox >
                              </CustomBox>

                              <CustomBox {...ABOUT_ME.techTextSphere}>
                                   <CustomBox {...ABOUT_ME.skills}>
                                        <RenderText text={"Skill Box"} {...ABOUT_ME.skillsText} color={COLORS.WHITE} />
                                        <RenderText text={"Interact with me!"} {...ABOUT_ME.skillsText2} color={COLORS.GREEN} />
                                   </CustomBox>

                                   <CustomBox {...TEXT_SPHERE.container}>
                                        <TextShpere />
                                   </CustomBox>

                                   <TechDesc />
                              </CustomBox>

                         </CustomBox>
                    </CustomBox>
               </CustomBox>


          </>
     )
}
export default AboutMe
