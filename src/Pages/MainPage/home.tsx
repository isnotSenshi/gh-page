import { FunctionComponent } from 'react'
import { CustomBox } from '../../Styles/customBox'
import { HOME } from '../../Constants/components'
import RenderMedia from '../../Components/Media'
import RenderText from '../../Components/Text'
import { COLORS } from '../../Constants/colors'
import { ShakingText } from '../../Styles/media'
import Typewriter from 'typewriter-effect'

const Homepage: FunctionComponent = () => {

     return (
          <>
               <CustomBox {...HOME}>
                    <CustomBox {...HOME.$mainContainer} $fadeAnimation>

                         <RenderMedia {...HOME.$logo} />
                         <CustomBox>
                              <CustomBox {...HOME.$pageText}>
                                   <RenderText text={"Hi, I'm"} {...HOME.$presentationText} color={'#FFF'} />
                                   <RenderText text={"Mathias Lovera"} {...HOME.$presentationText} color={COLORS.PURPLE} $margin={'0 .5vh 0 .7vh'} />
                                   <ShakingText style={{ top: '-.2vh' }}>
                                        {'👋'}
                                   </ShakingText>
                              </CustomBox>
                         </CustomBox>

                         <CustomBox {...HOME.$pageText}>
                              <Typewriter
                                   options={{
                                        cursor: '_',
                                        delay: 70,
                                        deleteSpeed: 10,
                                        strings: ['Growing up at my own pace.', 'Plus Ultra!', 'Ready to learn something new.', 'Wanna design something?', 'Let me code it for ya!'],
                                        autoStart: true,
                                        loop: true,
                                   }}
                              />
                         </CustomBox>

                         <CustomBox>
                              <a href='https://www.$linkedIn.com/in/mathiasalss/' target="_blank">
                                   <RenderMedia {...HOME.$linkedIn} />
                              </a>
                         </CustomBox>
                    </CustomBox>
               </CustomBox>
          </>
     )
}
export default Homepage
