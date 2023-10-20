import { FunctionComponent } from 'react'
import Header from '../../Components/Header'
import Body from '../../Components/Body/BodyTechs'
import { CustomBox } from '../../Styles/customBox'
import { CARD_BOX, PAGE } from '../../Constants/components'
import CardBox from '../../Components/Card/cardbox'
import RenderMedia from '../../Components/Media'
import RenderText from '../../Components/Text'
import { COLORS } from '../../Constants/colors'
import { ShakingImg, ShakingText } from '../../Styles/media'
import Typewriter from 'typewriter-effect';

const Homepage: FunctionComponent = () => {

     return (
          <CustomBox styleString={PAGE.styleString}>

               <CustomBox styleString={PAGE.mainContainer.styleString}>
                    <RenderMedia {...PAGE.logo} />
                    <CustomBox styleString={'display: flex; margin: 15px 0px 0px -135px;'}>

                         <RenderText text={"Hi, I'm"} {...PAGE.presentationText} color={'#FFF'} />
                         <RenderText text={"Mathias Lovera"} {...PAGE.presentationText} color={COLORS.PURPLE} margin={'0 1px 0 10px'} />
                         <RenderText text={"!"} {...PAGE.presentationText} color={'#FFF'} />
                         <ShakingText>
                              {'👋'}
                         </ShakingText>

                    </CustomBox>
               </CustomBox>

               <CustomBox styleString={`font-size: 40px; color: ${COLORS.GREEN}; text-align: center; margin: 10px 8rem 0px 0px; font-weight: bold;`}>
                    <Typewriter
                         options={{
                              cursor: '_',
                              delay: 70,
                              deleteSpeed: 10,
                              strings: ['Growing up at my own pace.', 'Plus Ultra!', 'Ready to learn something new.', 'Wanna design something?','Let me code it for ya!'],
                              autoStart: true,
                              loop: true,
                         }}
                    />
               </CustomBox>

          </CustomBox>
     )
}
export default Homepage
