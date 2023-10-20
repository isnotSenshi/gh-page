import RenderTitle from '../Text'
import { CustomBox } from '../../Styles/customBox'
import { HEADER } from '../../Constants/components'
import { COLORS } from '../../Constants/colors'
import { useNavigate } from 'react-router-dom'
import URLS from '../../Constants/urls'

const Tech = () => {

     const navigatoTo = useNavigate()
     const pathName = window.location.pathname

     return (
          <CustomBox styleString={HEADER.contentBox.styleString} onClick={() => navigatoTo(URLS.techs)} background={pathName === '/techs' ? COLORS.GREEN : 'black'}>
               <RenderTitle {...HEADER.tech.title}/>
          </CustomBox>
     )
}

export default Tech
