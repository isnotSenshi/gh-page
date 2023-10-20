import { CustomBox } from '../../Styles/customBox'
import { useNavigate } from 'react-router-dom'
import { HEADER } from '../../Constants/components'
import URLS from '../../Constants/urls'
import RenderText from '../Text'
import { COLORS } from '../../Constants/colors'

const HomeTitle = () => {
     const navigatoTo = useNavigate()
     const pathName = window.location.pathname

     return (
          <CustomBox styleString={HEADER.contentBox.styleString} onClick={() => navigatoTo(URLS.home)} background={pathName === '/' ? COLORS.GREEN : 'black'}>
               <RenderText {...HEADER.home.title} />
          </CustomBox>
     )
}

export default HomeTitle
