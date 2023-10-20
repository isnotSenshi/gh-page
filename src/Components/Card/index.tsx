import { CARD_BOX } from '../../Constants/components'
import { CustomBox } from '../../Styles/customBox'
import { Media, ShakingImg } from '../../Styles/media'
import RenderMedia from '../Media'
import RenderText from '../Text'
import { useState } from 'react'

const Card = ({ title, content, icon }: any) => {

     const [imgBool, setBool]: any = useState(false)

     return (
          <>
               <CustomBox styleString={CARD_BOX.singleBox.styleString}
                    onMouseEnter={() => setBool(true)}
                    onMouseLeave={() => setBool(false)}>

                    {imgBool && <CustomBox styleString={'text-align: center;'}>
                         <RenderText text={title} {...CARD_BOX.titleCard} margin={'5rem 0px'}/>
                    </CustomBox>}

                    <RenderText text={''} {...CARD_BOX.contentCard} />

                    <CustomBox styleString={'margin-top: 40vh;'}>
                         {!imgBool && <ShakingImg src={icon} width={'100px'} />}
                    </CustomBox>

               </CustomBox>
          </>
     )
}

export default Card

// : <Media src={icon} width={'100px'} />