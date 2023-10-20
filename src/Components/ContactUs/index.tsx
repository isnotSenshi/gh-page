import { CustomBox } from '../../Styles/customBox'
import { useNavigate } from 'react-router-dom'
import { HEADER } from '../../Constants/components'
import URLS from '../../Constants/urls'
import RenderText from '../Text'
import { COLORS } from '../../Constants/colors'

const ContactUs = () => {
     const navigatoTo = useNavigate()
     const pathName = window.location.pathname

     return (
          <CustomBox styleString={HEADER.contentBox.styleString} onClick={() => navigatoTo(URLS.contact)} background={pathName === '/contact' ? COLORS.GREEN : 'black'}>
               <RenderText {...HEADER.contact.title} />
          </CustomBox>
     )
}

export default ContactUs
