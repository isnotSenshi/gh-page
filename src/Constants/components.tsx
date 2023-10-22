import { keyframes } from "styled-components";
import { COLORS } from "./colors"
import ICONS from "./icons"
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
          top: 20vh;
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
     `,
     mainContainer: {
          styleString: `     
          top: 5vh;
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
}

const TEXT_SPHERE: any = {
     container: {
          styleString: `   
               border-radius: 5vh;
               position: absolute;
               width: 25vh;
               height: 25vh;
               padding: 1vh;
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
          "JavaScript",
          "Python",
          "NodeJS",
          "Analytics",
          "SQL",
          "MongoDB",
          "GIT",
          "Dart",
     ]
}

const TECH_DESC = {
     mainContainer: {
          styleString: ` 
               display: flex;
               position: relative;
          `
     },
}

export {
     HOME,
     ABOUT_ME,
     TEXT_SPHERE,
     TECH_DESC
}