import { HEADER } from '../../Constants/components'
import { CustomBox } from '../../Styles/customBox'
import ContactUs from '../ContactUs'
import HomeTitle from '../HomeTitle'
import RenderMedia from '../Media'
import Tech from '../Tech'
import RenderText from '../Text'
import { useState, useEffect } from 'react'

const Header = () => {

     const [imgBool, openImg]: any = useState(false)

     return (
          <>
               <CustomBox styleString={HEADER.header.styleString}>
                    <HomeTitle />
                    <Tech />
                    <ContactUs />
                    <CustomBox styleString={HEADER.logoContent.styleString} onClick={() => openImg(!imgBool)}>
                         <RenderText styleString={HEADER.textlogo.styleString} text={'Teeromu'} />
                         {imgBool && <RenderMedia {...HEADER.logo} />}
                    </CustomBox>
               </CustomBox>
          </>
     )
}

export default Header
