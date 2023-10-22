import { TECH_DESC } from '../../Constants/components'
import { CustomBox } from '../../Styles/customBox'
import Typewriter from 'typewriter-effect'
import { CONTEXT } from '../../App/context'
import { useContext, useEffect, useState } from 'react'
import RenderMedia from '../Media'
import ICONS from '../../Constants/icons'

const TechDesc = () => {
     const { state } = useContext(CONTEXT)
     const [greenText, setText]: any = useState('')
     const [greenImg, setImg]: any = useState('')
     const { greenBox }: any = state

     useEffect(() => {
          setText(greenBox?.text)
          setImg(greenBox?.icon)
     }, [greenBox])

     return ((greenText || greenImg) ?
          <CustomBox styleString={TECH_DESC.mainContainer.styleString}>
               <RenderMedia src={greenImg} width={'10rem'} height={'10rem'} margin={'22%'} />
          </CustomBox > : <></>
     )
}

export default TechDesc
