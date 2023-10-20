import { useEffect, useState } from 'react'

/**
 * useInsideClick gives you a way to be notified if an element or anyone of
 * their children's are clicked. So you can use it for example to close an
 * element if the user clicks outside it
 */
export const useInsideClick = ({ containerRef = null }) => {
     const [isInsideClick, setInsideClick] = useState(false)

     useEffect(() => {
          /* We must check if the container is defined because it's a reference
           and its setted after the first rendering */
          if (containerRef && containerRef.current) {
               /* Check if an element or anyone of their childrens are clicked */
               try {
                    const handleClick = (event) => {
                         const eventPath = event.path || event.composedPath()
                         setInsideClick(eventPath.includes(containerRef.current))
                    }

                    window.addEventListener('click', handleClick)
                    return () => window.removeEventListener('click', handleClick)
               } catch (error) {
                    return {
                         isInsideClick
                    }
               }
          }
     }, [containerRef])

     return {
          isInsideClick
     }
}

export default {
     useInsideClick
}
