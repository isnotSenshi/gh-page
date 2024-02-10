import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'
import './styles.css'
import { CustomBox } from '../../Styles/customBox'
import { EffectCreative } from 'swiper/modules'
import { EXPERIENCE, SWIPER_MAIN } from '../../Constants/components'
import Card from '../Card'
import uniqueId from 'lodash/uniqueId'
import RenderMedia from '../Media'
import ICONS from '../../Constants/icons'
import { ShakingImg } from '../../Styles/media'

const SwiperCards = () => {
     return (
          <CustomBox {...SWIPER_MAIN.container}>
               <Swiper
                    effect={'creative'}
                    grabCursor={true}
                    modules={[EffectCreative]}
                    pagination={{
                         clickable: true,
                    }}
                    creativeEffect={{
                         prev: {
                              shadow: true,
                              translate: [0, 0, -400],
                         },
                         next: {
                              translate: ['100%', 0, 0],
                         },
                    }}
               >
                    <CustomBox $styleString={'display: flex; justify-content: center;'}>
                         {EXPERIENCE.cardBox.map((card: any, i: any) => (
                              <SwiperSlide key={uniqueId()}>
                                   <Card {...card} />
                              </SwiperSlide>
                         ))}
                    </CustomBox>
               </Swiper>

               <CustomBox $styleString={'display: flex; justify-content: center; margin-top: 2vh;'}>
                    <ShakingImg src={ICONS.SWIPE} width={'3vh'} />
               </CustomBox>
          </CustomBox>
     )
}
export default SwiperCards

