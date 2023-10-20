import { GREEN_SPOTS } from '../../Constants/components'
import { CustomBox } from '../../Styles/customBox'

const SpotsOne = () => {

     return (
          <CustomBox styleString={'display: flex;'}>
          <CustomBox styleString={GREEN_SPOTS.spot1.styleString} />
          <CustomBox styleString={GREEN_SPOTS.spot3.styleString} />
          <CustomBox styleString={GREEN_SPOTS.spot2.styleString} />
          </CustomBox>
     )
}

export default SpotsOne