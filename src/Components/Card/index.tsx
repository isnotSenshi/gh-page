import { CustomBox } from '../../Styles/customBox'
import RenderText from '../Text'
import RenderMedia from '../Media'

const Card = (card: any) => {
     return (
          <CustomBox {...card}/*  key={} */>
               <a href={card.$hreflink} target="_blank" style={{ textDecoration: 'none' }}>
                    <CustomBox {...card.$upperPart}>
                         <RenderText {...card.$cardTitle} />
                    </CustomBox>
                    <CustomBox {...card.$cardBoxLogo}>
                         <RenderMedia {...card.media} />
                    </CustomBox>
                    <RenderText {...card.$cardBoxText} />
                    <RenderText {...card.$cardBoxSubText} />
                    <CustomBox style={{ margin: '-2vh 0' }}>
                         {card.$cardBoxUlText.text.map((cardUl: any) => (
                              <CustomBox style={{ textAlign: 'left', left: '3vh', maxWidth: '25vh', marginTop: '1vh' }}/*  key={} */>
                                   <RenderText {...card.$cardBoxUlText} text={cardUl} />
                              </CustomBox>
                         ))}
                    </CustomBox>
                    <CustomBox $styleString={card.$miniTextBoxes.$mainContainer}>
                         {card.$miniTextBoxes.text.map((boxText: any) => (
                              <CustomBox $styleString={card.$miniTextBoxes.container}/*  key={} */>
                                   <RenderText {...card.$cardBoxUlText} text={boxText} />
                              </CustomBox>
                         ))}
                    </CustomBox>
               </a>
          </CustomBox>
     )
}

export default Card
