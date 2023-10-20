import { COLORS } from "./colors"
import ICONS from "./icons"

const PAGE = {
     styleString: `       
          height: 100vh;
          overflow-x: hidden;
          overflow-y: hidden;
          width: 100vw; 
          position: relative;
          background: #272B33;
          font-family: Josefin Sans;  
     `,
     mainContainer: {
          styleString: `     
          margin-left: 45%;
          font-weight: bold;'
     `,
     },
     logo: {
          src: ICONS.CONDING_DOGE,
          width: '120px',
          height: '120px',
          styleString: `
               border: 5px solid ${COLORS.GREEN};
               border-radius: 500px;
               margin-top: 20vh;
          `
     },
     presentationText: {
          size: '35px',
          align: 'center',
          fontWeight: 'bold',
     },
}

const HEADER = {
     header: {
          styleString: `   
          display: flex;
          padding: 20px;
          border-radius: 35px;
       `
     },
     home: {
          title: {
               title: 'Inicio',
               size: '25px',
               color: 'white',
               margin: '10px; 0 0 0'
          }
     },
     tech: {
          title: {
               title: 'Tecnologías',
               color: 'white',
               size: '25px',
               margin: '10px; 0 0 0'
          }
     },
     contact: {
          title: {
               title: 'Contactanos',
               color: 'white',
               size: '25px',
               margin: '10px; 0 0 0'
          }
     },
     contentBox: {
          styleString: `       
                    padding: 20px;
                    margin-right: 10px;
                    display: flex;
                    border-radius: 10px;
                    transition: .5s;
                    cursor: pointer;
                    &:hover{
                         background: #29d658;                         
                    } 
               `
     },
     logo: {
          src: ICONS.PEPE_GENTLEMAN,
          width: '50px',
          height: '60px',
          styleString: `
               padding: 0px 0px 0px 15px;
               border-radius: 5px;
               margin-right: 20px;
          `
     },
     textlogo: {
          styleString: `
               color: white;
               font-size: 35px;
               padding: 20px;
          `
     },
     logoContent: {
          styleString: `
               color: white;
               cursor: pointer;
               display: flex;
               background: #29d65860;
               border: 5px solid #29d658;
               background: #29d65860;
               border-radius: 10px;
               position: absolute;
               right: 2%;
               `
     },

}

const BODY_TECHS = {
     styleString: `   
          margin-left: 4vw;          
          justify-content: space-between;
          width: 90vw;
          display: flex;
          
     `,
     bodyTitle: {
          color: 'white',
          size: '30px',
          margin: '25px'
     },
     bodySubTitle: {
          color: '#29d658',
          size: '60px',
          margin: '25px'
     }
}

const TECH_DESC = {
     mainContainer: {
          styleString: ` 
               display: flex;
               position: relative;
               bottom: 14rem;
               left: 2vw;
          `
     },
     imgContainer: {
          styleString: ` 
               margin-left: 6rem;
               height: 20rem;
               width: 20rem;
               border-radius: 15px;
               background: linear-gradient(147deg, rgba(0,207,55,1) 0%, rgba(0,135,36,1) 12%, rgba(0,0,0,1) 100%);
          `
     },
     imgContainer2: {
          styleString: ` 
               margin: 1rem;
               height: 18rem;
               width: 18rem;
               border-radius: 15px;
               background: black;
          `
     },
     container: {
          styleString: `   
               margin-left: 6rem;
               height: 20rem;
               width: 50rem;
               border-radius: 15px;
               background: linear-gradient(347deg, rgba(0,207,55,1) 0%, rgba(0,135,36,1) 12%, rgba(0,0,0,1) 100%);
          `,
     },
     text: {
          styleString: `   
               color: white;
               font-size: 30px;
               padding: 10px 20px 0px 30px;
               letter-spacing: 3px;
               height: 17.5rem;
               overflow-y: auto;
               margin-top: 15px;               
     `,
     },
}

const GREEN_SPOTS = {
     spot1: {
          styleString: ` 
          width: 15rem;
          height: 25rem;
          background: linear-gradient(347deg, rgba(0,207,55,1) 0%, rgba(0,120,32,1) 59%, rgba(0,82,22,1) 78%, rgba(0,0,0,1) 100%);
          border-radius: 30rem;
          bottom: -10rem;
          right: 30rem;
          position: absolute;
          z-index: -9;
     `
     },
     spot2: {
          styleString: ` 
          width: 30rem;
          height: 50rem;
          background: linear-gradient(347deg, rgba(0,207,55,1) 0%, rgba(0,120,32,1) 59%, rgba(0,82,22,1) 78%, rgba(0,0,0,1) 100%);
          border-radius: 50rem;
          right: -10rem;
          bottom: -15rem;
          position: absolute;
          z-index: -9;
     `
     },
     spot3: {
          styleString: ` 
          width: 30rem;
          height: 40rem;
          background: linear-gradient(347deg, rgba(0,207,55,1) 0%, rgba(0,120,32,1) 59%, rgba(0,82,22,1) 78%, rgba(0,0,0,1) 100%);
          border-radius: 30rem;
          right: 5rem;
          bottom: -15rem;
          position: absolute;
          z-index: -9;
     `
     },
}

const TEXT_SPHERE: any = {
     cloud: {
          styleString: `   
               font-weight: 600;
               font-size: 1.3em;
               user-select: none;
          `,
     },
     texts: [
          "React",
          "JavaScript",
          "Python",
          "NodeJS",
          "Analytics",
          "SQL",
          "MongoDB",
          "GIT",
          "Dart",
     ],
     options: {
          radius: 250,
          maxSpeed: "fast",
          initSpeed: "fast",
          keep: false,
     }
}

const CARD_BOX = {
     singleBox: {
          styleString: `   
               cursor: pointer;
               margin: 1rem;
               background: ${COLORS.BLACK};
               height: 100vh;
               text-align: center;
               overflow-wrap: break-word;
               width: 25vw;
               border-radius: 2rem;
               transition: .5s;
               &: hover{
                    background: ${COLORS.GREEN_STRONG};
                    border-radius: 2rem;
                    transition: .5s;
               }
     `
     },
     multiBox: {
          styleString: ` 
          width: 100vw;
          display: flex; 
     `
     },
     titleCard: {
          color: 'black',
          size: '70px',
          align: 'center',
          fontWeight: 'bold',
     },
     contentCard: {
          color: 'white',
          size: '25px',
          align: 'center',
          fontWeight: 'bold',
          margin: '0px 0px 0px 0px'
     },
}


export {
     HEADER,
     BODY_TECHS,
     TECH_DESC,
     TEXT_SPHERE,
     PAGE,
     GREEN_SPOTS,
     CARD_BOX
}