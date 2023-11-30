import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'
import './styles.css'
import { EffectCards } from 'swiper/modules'
import { CustomBox } from '../../Styles/customBox'
import { EXPERIENCE, SWIPER_MAIN } from '../../Constants/components'
import Card from '../Card'
import { v4 as uuidv4 } from 'uuid'

const SwiperCards = () => {
     return (
          <CustomBox {...SWIPER_MAIN.container}>
               <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}

               >
                    <CustomBox $styleString={'display: flex; justify-content: center;'}>
                         {EXPERIENCE.cardBox.map((card: any, i: any) => (
                              <SwiperSlide key={'swiper' + i}>
                                   <Card {...card} />
                              </SwiperSlide>
                         ))}
                    </CustomBox>
               </Swiper>
          </CustomBox>
     )
}
export default SwiperCards

