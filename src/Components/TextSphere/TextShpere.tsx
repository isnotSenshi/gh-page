import { CustomBox } from '../../Styles/customBox'
import { TEXT_SPHERE } from '../../Constants/components'
import { TagCloud } from "@frank-mayer/react-tag-cloud"
import { CONTEXT } from '../../App/context'
import { useContext } from 'react'
import '../../Styles/textSphere/TextShpere.css'
import { CHANGE_GREEN_BOX } from '../../Core/Types'
import { greenBoxText } from '../../utils/greenBoxText'
import { greenBoxImg } from '../../utils/greenBoxImg'

const TextShpere = () => {
  const { dispatch } = useContext(CONTEXT)

  const changeGreenBox = (lang: string) => {
    dispatch({
      type: CHANGE_GREEN_BOX,
      value: { text: greenBoxText(lang), icon: greenBoxImg(lang) }
    })
  }

  return (
    <CustomBox styleString={TEXT_SPHERE.cloud.styleString}>
      <TagCloud
        options={TEXT_SPHERE.options}
        onClick={e => changeGreenBox(e)}>
        {TEXT_SPHERE.texts}
      </TagCloud>
    </CustomBox>
  )
}

export default TextShpere
