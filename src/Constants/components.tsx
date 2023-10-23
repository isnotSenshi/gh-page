import { keyframes } from "styled-components";
import { COLORS } from "./colors"
import ICONS from "./icons"

const INDEX = {
     arrowDown: {
          src: ICONS.HOME,
          width: '2.5vh',
          height: '2.5vh',
          pointer: true,
          styleString: `
               right: 3vh; 
               background-color: ${COLORS.GREEN_STRONG}; 
               border-radius: 1vh;
               padding: .75vh;
               transition: .5s;
               z-index: 99;
               position: fixed;
               top: 45vh;
               &: hover {
                    background-color: ${COLORS.GREEN_4};
               }
          `
     },
     arrowDown1: {
          src: ICONS.PERSON,
          width: '2.5vh',
          height: '2.5vh',
          pointer: true,
          styleString: `
               right: 3vh; 
               background-color: ${COLORS.GREEN_STRONG}; 
               border-radius: 1vh;
               padding: .75vh;
               transition: .5s;
               position: fixed;
               top: 50vh;
               z-index: 99;
               &: hover {
                    background-color: ${COLORS.GREEN_4};
               }
          `
     },
     arrowDown2: {
          src: ICONS.PORTFOLIO,
          width: '2.5vh',
          height: '2.5vh',
          pointer: true,
          styleString: `
               right: 3vh; 
               background-color: ${COLORS.GREEN_STRONG}; 
               border-radius: 1vh;
               padding: .75vh;
               transition: .5s;
               position: fixed;
               top: 9vh;
               z-index: 99;
               top: 55vh;              
               &: hover {
                    background-color: ${COLORS.GREEN_4};
               }
          `
     },
     arrowDown3: {
          src: ICONS.MAIL_ME,
          width: '2.5vh',
          height: '2.5vh',
          pointer: true,
          styleString: `
               right: 3vh; 
               background-color: ${COLORS.GREEN}; 
               &: hover {
                    background-color: ${COLORS.LIGHT_BLUE_STRONG};
               }
               border-radius: 1vh;
               padding: .75vh;
               transition: .5s;
               position: fixed;
               top: 9vh;
               z-index: 99;
               top: 60vh;
          `
     }
}

const HOME = {
     styleString: `      
          height: 100vh;
          font-family: Josefin Sans;  
          animation-iteration-count: 1;  
     `,
     mainContainer: {
          styleString: `   
          font-weight: bold;
          text-align: center;
          item-align: center;
          top: 15vh;
     `,
     },
     logo: {
          src: ICONS.CONDING_DOGE,
          width: '5%',
          styleString: `
               border: .5vh solid ${COLORS.GREEN};
               border-radius: 500px;
               margin-bottom: 1vh;
          `
     },
     presentationText: {
          size: '3vh',
          fontWeight: 'bold',
     },
     pageText: {
          size: '3vh',
          fontWeight: 'bold',
          styleString: `
               display: inline-flex;
               color: ${COLORS.GREEN};
               font-size: 3vh; 
          `
     },
     linkedIn: {
          src: ICONS.LINKEDIN,
          //hoverSrc: ICONS.LINKEDIN_BLUE,
          width: '4vh',
          height: '4vh',
          pointer: true,
          styleString: `
               position: relative; 
               top: 10vh;        
          `
     },
     arrowDown: {
          src: ICONS.DRILL_ARROW,
          //hoverSrc: ICONS.LINKEDIN_BLUE,
          width: '2vh',
          height: '2vh',
          pointer: true,
          styleString: `
               rotate: 180deg;
               position: relative; 
               top: 45vh;       
               background-color: ${COLORS.GREEN_STRONG}; 
               border-radius: 5vh;
               padding: .75vh;
          `
     }
}

const ABOUT_ME = {
     styleString: `      
          background: ${COLORS.GREY_SMOOTH};
          height: 100vh;
          font-family: Josefin Sans;
          background: linear-gradient(0deg, rgba(44,50,63,1) 0%, rgba(0,0,0,1) 100%);  
     `,
     mainContainer: {
          styleString: `     
          top: 10vh;
          font-weight: bold;
          text-align: center;
          item-align: center;
     `,
     },
     titleContainer: {
          size: '3vh',
          fontWeight: 'bold',
          styleString: `
               display: inline-block;
               color: ${COLORS.GREEN};
               font-size: 3vh; 
          `
     },
     titleAbout: {
          size: '3vh',
          fontWeight: 'bold',
     },
     greenBar: {
          styleString: `
               background-color: ${COLORS.GREEN};
               height: .5vh;
               width: 5vh;
               margin-left: 30%;
               margin-top: 5%;
               item-align: center;
          `

     },
     whiteBar: {
          styleString: `
               background-color: ${COLORS.GREEN};
               height: .3vh;
               margin-top: 5%;
               item-align: center;
               margin-bottom: 2vh;
          `

     },
     introductionMe: {
          styleString: `
          margin-top: 10vh;
          width: 40vh;
     `
     },
     textBox: {
          styleString: `    
          text-align: start;
          line-height: 1.3;
     `
     },
     whoIam: {
          styleString: `
          color: ${COLORS.WHITE};
          font-size: 3vh; 
          margin-bottom: 2.5vh;
     `
     },
     skillsText: {
          styleString: `
          font-size: 3vh; 
          position: relative;
          justify-content: center;
     `
     },
     skillsText2: {
          styleString: `
          margin-top: .5vh;
          margin-bottom: -1.5vh;
          font-size: 1.5vh;
          position: relative;
          justify-content: center;
     `
     },
     text1: {
          styleString: `
          color: ${COLORS.WHITE};
          font-size: 1.5vh; 
          font-weight: 100;
          margin-bottom: 1.2vh;
     `},
     typeWritter: {
          styleString: `
          color: ${COLORS.WHITE};
          font-size: 1.5vh; 
          font-weight: 100;
          margin-bottom: 1.5vh;
          display: flex;
     `
     },
     location: {
          src: ICONS.LOCATION,
          width: '1.5vh',
          height: '1.5vh',
          margin: '-.1vh .5vh 0 0'
     },
     skills: {
          styleString: `
          margin-top: 10vh;
          margin-bottom: 3vh;
     `
     },
     upButton: {
          styleString: `
               background-color: ${COLORS.GREEN};
               height: 5vh;
               width: 5vh;
               position: absolute;
          `

     },
}

const TEXT_SPHERE: any = {
     container: {
          styleString: `   
               border-radius: 2vh;
               position: absolute;
               width: 24vh;
               height: 24vh;
               padding: 1vh 1.5vh 1vh 1.5vh;
               background-color: ${COLORS.GREEN_2};
               border: .5vh solid ${COLORS.GREEN};
     `},
     cloud: {
          styleString: `   
               font-weight: bold;
               font-size: 1vh;
               user-select: none;
               margin-left: -3vh;
          `,
     },
     texts: [
          "React",
          "TypeScript",
          "JavaScript",
          "Python",
          "NodeJS",
          "Design",
          "SQL",
          //"Express",
          "MongoDB",
          "GIT",
          "Dart",
          "Flutter"
     ]
}

const TECH_DESC = {
     mainContainer: {
          styleString: ` 
               display: inline-block;
               position: relative;
               top: 10vh;
               left: -12.5vh;
          `
     },
     textImage: {
          styleString: ` 
               position: relative;
               top: -.5vh;
               left: -4vh;
               font-size: 1.1vh;
               justify-content: center;
               width: 5vh;
               color: white;
          `
     },
     barMain: {
          styleString: ` 
          display: flex;
          left: -5vh;
          border-radius: 1vh;
          background-color: ${COLORS.GREY_STRONG};
     `},
     barContainer:
     {
          styleString: ` 
          display: flex;
          border-top-right-radius: 1vh;
          border-bottom-right-radius: 1vh;
          margin-left: .2vh;
          width: 50vh;
          background-color: ${COLORS.GREEN_2};
     `},
     barLevelContainer: (width: any) => {
          const realWidth = width * 5
          return {
               styleString: ` 
               border-top-right-radius: ${width ? width === 10 && '1vh' : '0vh'};
               border-bottom-right-radius:  ${width ? width === 10 && '1vh' : '0vh'};
               width: ${realWidth ? realWidth + 'vh' : '10vh'};
               background-color: ${COLORS.GREEN};
               transition: 1s;
               `
          }
     },
     typeWritter: {
          styleString: `
               color: ${COLORS.WHITE};
               font-size: 2.5vh; 
               font-weight: bold;
               margin-top: 2.2vh;
     `
     },
     typeWritter2: {
          styleString: `
               color: ${COLORS.WHITE};
               font-size: 2.5vh; 
               font-weight: bold;
               margin-top: .1vh;
               margin-left: 1vh;
     `
     },
}

const EXPERIENCE = {
     styleString: `      
          background: ${COLORS.GREY_SMOOTH};
          height: 100vh;
          font-family: Josefin Sans;
          background: linear-gradient(180deg, rgba(44,50,63,1) 50%, rgba(0,0,0,1) 100%);  
     `,
     mainContainer: {
          styleString: `     
          top: 10vh;
          font-weight: bold;
          text-align: center;
          item-align: center;
     `,
     },
     titleContainer: {
          size: '3vh',
          fontWeight: 'bold',
          styleString: `
               display: inline-block;
               color: ${COLORS.GREEN};
               font-size: 3vh; 
          `
     },
     titleExperience: {
          size: '3vh',
          fontWeight: 'bold',
     },
     greenBar: {
          styleString: `
               background-color: ${COLORS.GREEN};
               height: .5vh;
               width: 5vh;
               margin-left: 35%;
               margin-top: 5%;
               item-align: center;
          `

     },
}

export {
     HOME,
     ABOUT_ME,
     TEXT_SPHERE,
     TECH_DESC,
     INDEX,
     EXPERIENCE
}