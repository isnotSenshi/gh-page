import { FunctionComponent, useState, useEffect } from 'react'
import IndexPage from '../MainPage/indexMain'
import IndexPageMobile from '../MobilePage/indexMobile'

const RenderApp: FunctionComponent = () => {

     const [dimensions, setDimensions] = useState({
          width: window.innerWidth,
          height: window.innerHeight,
     })

     const handleResize = () => {
          setDimensions({
               width: window.innerWidth,
               height: window.innerHeight,
          })
     }

     useEffect(() => {
          window.addEventListener("resize", handleResize, false)
     }, [])

     return (
          <>
               {(dimensions.width / dimensions.height) < 1.1
                    ? <IndexPageMobile />
                    : <IndexPage />
               }
          </>
     )
}
export default RenderApp
