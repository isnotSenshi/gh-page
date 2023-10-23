import { FunctionComponent, useContext, useRef } from 'react'
import { CustomBox } from '../../Styles/customBox'
import { ABOUT_ME, EXPERIENCE, TEXT_SPHERE } from '../../Constants/components'
import RenderMedia from '../../Components/Media'
import RenderText from '../../Components/Text'
import { COLORS } from '../../Constants/colors'
import Typewriter from 'typewriter-effect'
import TextShpere from '../../Components/TextSphere/TextShpere'
import TechDesc from '../../Components/TechDesc'
import { ABOUT_ME_TEXT } from '../../Constants/globaltext'


const Experience: FunctionComponent = () => {

     return (
          <>
               <CustomBox styleString={EXPERIENCE.styleString}>
                    <CustomBox styleString={EXPERIENCE.mainContainer.styleString}>
                         <CustomBox {...EXPERIENCE.titleContainer}>
                              <RenderText text={"Experience"} {...EXPERIENCE.titleExperience} color={COLORS.WHITE} id='about-me' />
                              <CustomBox {...EXPERIENCE.greenBar} />
                         </CustomBox>

                    </CustomBox>
               </CustomBox>


          </>
     )
}
export default Experience
