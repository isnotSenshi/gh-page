import Card from '.'
import { CARD_BOX } from '../../Constants/components'
import { CARD_BOX_TEXT } from '../../Constants/globaltext'
import ICONS from '../../Constants/icons'
import { CustomBox } from '../../Styles/customBox'

const CardBox = () => {

     return (
          <>
               <CustomBox styleString={CARD_BOX.multiBox.styleString}>
                    <Card text={CARD_BOX_TEXT.MOBILE_APPS} content={"asdasd"} icon={ICONS.BLACK_MOBILE} />
                    <Card text={CARD_BOX_TEXT.MANAGE_DATA} content={"asdasd"} icon={ICONS.BLACK_FOLDER} />
                    <Card text={CARD_BOX_TEXT.ROBOTIZATION} content={"asdasd"} icon={ICONS.BLACK_ROBOT} />
                    <Card text={CARD_BOX_TEXT.WEB_APPS} content={"asdasd"} icon={ICONS.BLACK_WWW} />
               </CustomBox>
          </>
     )
}

export default CardBox
