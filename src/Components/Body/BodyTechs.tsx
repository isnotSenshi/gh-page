import { BODY_TECHS, GREEN_SPOTS } from '../../Constants/components'
import { CustomBox } from '../../Styles/customBox'
import RenderText from '../Text'
import { BODY_TEXT } from '../../Constants/globaltext'
import TextShpere from '../TextSphere/TextShpere'
import TechDesc from '../TechDesc'
import SpotsOne from '../Spots/SpotsOne'

const Body = () => {


     return (
          <>
               <CustomBox styleString={BODY_TECHS.styleString}>
                    <CustomBox>
                         <RenderText {...BODY_TECHS.bodyTitle} text={BODY_TEXT.bodyTitle} />
                         <RenderText {...BODY_TECHS.bodySubTitle} text={BODY_TEXT.bodySubTitle} />
                         <RenderText {...BODY_TECHS.bodySubTitle} text={BODY_TEXT.bodySubTitle2} />
                    </CustomBox>
                    <TextShpere />
               </CustomBox>
               <TechDesc />
               <SpotsOne />
          </>
     )
}

export default Body
