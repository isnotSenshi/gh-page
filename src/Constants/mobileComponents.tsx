import { COLORS } from "./colors"
import ICONS from "./icons"

const INDEX = {
     mainContainer: {
          $styleString: `
          display: flex;
          transition: .5s; 
          gap: 4.5vh;
          bottom: -90vh;
          justify-content: center;    
     `  },
     $arrowDow: {
          src: ICONS.TS,
          width: '2.5vh',
          height: '2.5vh',
          $pointer: true,
          $styleString: `
               background-color: ${COLORS.GREEN_STRONG}; 
               padding: .75vh;
               transition: .5s;
               position: fixed;  
               z-index: 2;
               &: hover {
                    background-color: ${COLORS.GREEN_4};
                }
          `
     },
     $arrowDow1: {
          src: ICONS.PERSON,
          width: '2.5vh',
          height: '2.5vh',
          $pointer: true,
          $styleString: `
               background-color: ${COLORS.GREEN_STRONG}; 
               padding: .75vh;
               transition: .5s;
               position: fixed;  
               z-index: 2;
               &: hover {
                    background-color: ${COLORS.GREEN_4};
                }
          `
     },
     $arrowDow2: {
          src: ICONS.PORTFOLIO,
          width: '2.5vh',
          height: '2.5vh',
          $pointer: true,
          $styleString: `
               background-color: ${COLORS.GREEN_STRONG}; 
               padding: .75vh;
               transition: .5s;
               position: fixed;  
               z-index: 2;         
               &: hover {
                    background-color: ${COLORS.GREEN_4};
                }
          `
     },
     $arrowDow3: (mailMe: boolean) => {
          return (mailMe ? {
               src: ICONS.MAIL_ME,
               width: '2.5vh',
               height: '2.5vh',
               $pointer: true,
               $styleString: `
                    background-color: ${COLORS.GREEN}; 
                    padding: .75vh;
                    transition: .5s;
                    position: fixed;  
                    z-index: 2;
                    &: hover {
                         background-color: ${COLORS.LIGHT_BLUE_STRONG};
                     }
          ` } : {
               src: ICONS.MAIL_ME,
               width: '2.5vh',
               height: '2.5vh',
               $pointer: true,
               $styleString: `
                    background-color: ${COLORS.GREEN}; 
                    border-radius: 1vh;
                    padding: .75vh;
                    transition: .5s;
                    position: fixed;
                    z-index: 2;
                    &: hover {
                         background-color: ${COLORS.LIGHT_BLUE_STRONG};
                     }
          ` })
     },
     Size: '2vh',
}

const HOME = {
     $styleString: `       
          overflow-x: hidden;   
          height: 100vh;
          animation-iteration-count: 1;  
     `,
     $mainContainer: {
          $styleString: `   
          font-weight: bold;
          text-align: center;
          item-align: center;
          top: 15vh;
     `,
     },
     $logo: {
          src: ICONS.CONDING_DOGE,
          width: '10vh',
          $styleString: `
               border: .5vh solid ${COLORS.GREEN};
               border-radius: 500vh;
               margin-bottom: 5vh;
          `
     },
     $presentationText: {
          size: '3vh',
          fontWeight: 'bold',
     },
     $pageText: {
          size: '3vh',
          fontWeight: 'bold',
          $styleString: `
               display: inline-flex;
               color: ${COLORS.GREEN};
               font-size: 3vh; 
          `
     },
     $linkedIn: {
          src: ICONS.linkedIn,
          width: '4vh',
          height: '4vh',
          $pointer: true,
          $styleString: `
               position: relative; 
               top: 10vh;        
          `
     },
     $arrowDow: {
          src: ICONS.DRILL_ARROW,
          width: '2vh',
          height: '2vh',
          $pointer: true,
          $styleString: `
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
     $styleString: `      
          overflow-x: hidden;
          background: ${COLORS.GREY_SMOOTH};
          padding-bottom: 10vh;
          background: linear-gradient(0deg, rgba(44,50,63,1) 0%, rgba(0,0,0,1) 100%);  
     `,
     $mainContainer: {
          $styleString: `     
          top: 5vh;
          font-weight: bold;
          text-align: center;
          item-align: center;
     `,
     },
     titleContainer: {
          size: '3vh',
          fontWeight: 'bold',
          $styleString: `
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
          $styleString: `
               background-color: ${COLORS.GREEN};
               height: .5vh;
               width: 5vh;
               margin-left: 30%;
               margin-top: 5%;
               item-align: center;
          `

     },
     whiteBar: {
          $styleString: `
               background-color: ${COLORS.GREEN};
               height: .3vh;
               margin-top: 5%;
               item-align: center;
               margin-bottom: 2vh;
          `

     },
     introductionMe: {
          $styleString: `
          margin-top: 10vh;
          width: 40vh;
     `
     },
     textBox: {
          $styleString: `    
          text-align: start;
          line-height: 1.3;
     `
     },
     whoIam: {
          $styleString: `
          color: ${COLORS.WHITE};
          font-size: 3vh; 
          margin-bottom: 2.5vh;
     `
     },
     skillsText: {
          $styleString: `
          font-size: 3vh; 
          position: relative;
          justify-content: center;
     `
     },
     skillsText2: {
          $styleString: `
          margin-top: .5vh;
          margin-bottom: -1.5vh;
          font-size: 1.5vh;
          position: relative;
          justify-content: center;
     `
     },
     text1: {
          $styleString: `
          color: ${COLORS.WHITE};
          font-size: 1.5vh; 
          font-weight: 100;
          margin-bottom: 1.2vh;
     ` },
     typeWritter: {
          $styleString: `
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
          $styleString: `
               margin-top: 10vh;
               margin-bottom: 3vh;
     `
     },
     techTextSphere: {
          $styleString: ` 
               display: grid;     
               height: 70vh;                         
               justify-content: space-evenly;
               justify-items: center;
     `
     }
}

const TEXT_SPHERE: any = {
     cloud: {
          $styleString: `   
               display: flex;
               font-weight: bold;
               font-size: 1vh;
               user-select: none;
          `,
     },
     container: {
          $styleString: `   
               width: max-content;
               height: max-content;
               border-radius: 2vh;
               padding: 1vh 1.5vh 1vh 1.5vh;
               background-color: ${COLORS.GREEN_2};
               border: .5vh solid ${COLORS.GREEN};
     ` },
     texts: [
          "React",
          "TypeScript",
          "JavaScript",
          "Python",
          "NodeJS",
          "Design",
          "SQL",
          "MongoDB",
          "GIT",
          "Dart",
          "Flutter"
     ]
}

const TECH_DESC = {
     $mainContainer: (invisible: any) => {
          return {
               $styleString: ` 
               opacity: ${invisible ? '1' : '0'};
               overflow-x: hidden;
               display: block;
               margin-top: 5vh;
          ` }
     },
     textImage: (invisible: any) => {
          return {
               $styleString: ` 
               opacity: ${invisible ? '1' : '0'};
               margin-left: 1vh;
               margin-bottom: 1vh;
               font-size: 1.1vh;
               justify-content: center;
               width: 5vh;
               color: white;
          ` }
     },
     barMain: {
          $styleString: ` 
          display: flex;
          border-radius: 1vh;
          background-color: ${COLORS.GREY_STRONG};
     ` },
     barContainer:
     {
          $styleString: ` 
          display: flex;
          border-top-right-radius: 1vh;
          border-bottom-right-radius: 1vh;
          margin-left: .2vh;
          width: 30vh;
          background-color: ${COLORS.GREEN_2};
     ` },
     barLevelContainer: (width: any) => {
          const realWidth = width * 3
          return {
               $styleString: ` 
               border-top-right-radius: ${width ? width > 9 && '1vh' : '0vh'};
               border-bottom-right-radius:  ${width ? width > 9 && '1vh' : '0vh'};
               width: ${realWidth ? realWidth + 'vh' : '10vh'};
               background-color: ${COLORS.GREEN};
               transition: 1s;
               `
          }
     },
     typeWritter: {
          $styleString: `
               color: ${COLORS.WHITE};
               font-size: 1.75vh; 
               font-weight: bold;
               margin-top: 2.5vh;
     `
     },
     typeWritter2: {
          $styleString: `
               color: ${COLORS.WHITE};
               font-size: 1.75vh; 
               font-weight: bold;
               margin-left: 2vh;
     `
     },
}

const EXPERIENCE = {
     $styleString: `      
          background: ${COLORS.GREY_SMOOTH};
          background: linear-gradient(0deg, ${COLORS.BLACK} 10%, rgba(44,50,63,1) 70%);  
     `,
     $mainContainer: {
          $styleString: `     
          justify-content: center;
          top: 5vh;
          font-weight: bold;
          text-align: center;
          item-align: center;
     `,
     },
     titleContainer: {
          size: '3vh',
          fontWeight: 'bold',
          $styleString: `
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
          $styleString: `
               background-color: ${COLORS.GREEN};
               height: .5vh;
               width: 5vh;
               margin-left: 35%;
               margin-top: 5%;
               item-align: center;
          `

     },
     cardContainer: {
          $styleString: `  
               border: .5vh solid ${COLORS.YELLOW};
               margin-top: 5vh;
               margin-left: 7.5vh;
               height: 50vh;
               width: 40vh;
               border-top-right-radius: 5vh;
               border-top-left-radius: 1vh;
               border-bottom-right-radius: 1vh;
               border-bottom-left-radius: 1vh;
               background: linear-gradient(16deg, rgba(255,158,0,1) 0%, rgba(255,209,0,1) 100%);
               transition: .5s;
               position: absolute;
               z-index: 99;
          `
     },
     claroCardWindow: {
          $styleString: `  
               border: .25vh solid ${COLORS.RED};
               border-top-right-radius: 1vh;
               border-bottom-right-radius: 1vh;
               right: 4vh;
               position: absolute;
               cursor: pointer;
               height: 6vh;
               width: 6vh;
               background: linear-gradient(186deg, rgba(149,22,22,1) 0%, rgba(255,0,0,1) 100%);
               transition: .25s;
               &: hover {                    
                    right: 1vh;;
                }
          `
     },
     claroCard: {
          $styleString: ` 
               position: absolute;
               width: 30vh;
               height: 40vh;
               top: 5vh;
               left: .5vh;
               transition: .5s;
               border: .25vh solid ${COLORS.RED};
               border-top-right-radius: 1vh;
               border-bottom-right-radius: 1vh;
               background: linear-gradient(186deg, rgba(149,22,22,1) 0%, rgba(255,0,0,1) 100%);
          `
     },
     flutterCardWindow: {
          $styleString: `  
               border: .25vh solid ${COLORS.GREEN};
               border-top-right-radius: 1vh;
               border-bottom-right-radius: 1vh;
               right: 4vh;
               position: absolute;
               cursor: pointer;
               height: 6vh;
               width: 6vh;
               background: linear-gradient(82deg, rgba(0,255,226,1) 0%, rgba(86,255,0,1) 100%);
               transition: .25s;
               &: hover {                    
                    right: 1vh;;
                }
          `
     },
     flutterCard: {
          $styleString: ` 
               position: absolute;
               width: 30vh;
               height: 40vh;
               top: 5vh;
               left: .5vh;
               transition: .5s;
               border: .25vh solid ${COLORS.GREEN};
               border-top-right-radius: 1vh;
               border-bottom-right-radius: 1vh;
               background: linear-gradient(82deg, rgba(0,255,226,1) 0%, rgba(86,255,0,1) 100%);
          `
     },
     teeromuCardWindow: {
          $styleString: `  
               border: .25vh solid ${COLORS.ORANGE};
               border-top-right-radius: 1vh;
               border-bottom-right-radius: 1vh;
               right: 4vh;
               position: absolute;
               cursor: pointer;
               height: 6vh;
               width: 6vh;
               background: linear-gradient(82deg, rgba(255,46,0,1) 0%, rgba(255,124,0,1) 100%);
               transition: .25s;
               &: hover {                    
                    right: 1vh;;
                }
          `
     },
     cardBox: [{
          $styleString: `
          transition: .5s;
          position: absolute;
          width: 30vh;
          height: 40vh;
          background-color: ${COLORS.GREY_DEEP};
          border-radius: 1.5vh;
          &: hover {
               background-color: ${COLORS.GREY_LIGHT};
               cursor: pointer; 
           }
          `,
          $cardTitle: {
               text: 'Flutter Dev',
               size: '1.8vh',
               $styleString: `
               color: white;
               justify-content: center;
               position: relative; 
               z-index: 2;                        
               top: 1vh;
          `
          },
          $upperPart: {
               $styleString: `
                    width: 30vh;
                    height: 10vh;
                    background: linear-gradient(82deg, rgba(0,255,226,1) 0%, rgba(86,255,0,1) 100%);
                    border-top-left-radius: 1vh;
                    border-top-right-radius: 1vh;
          ` },
          $cardBoxLogo: {
               $styleString: `
                    width: 10vh;
                    height: 10vh;
                    top: -5vh;
                    display: inline-block;
                    background: linear-gradient(82deg, rgba(0,255,226,1) 0%, rgba(86,255,0,1) 100%);
                    border-radius: 10vh;
                    box-shadow: .1vh .1vh 8vh .5vh black;
          ` },
          media: {
               width: '7vh',
               height: '7vh',
               src: ICONS.WHITE_SMARTPHONE,
               $margin: '1.5vh 0',
          },
          $cardBoxText: {
               text: 'Beginner & Enthusiast',
               color: 'white',
               size: '2.5vh',
               $styleString: `
               position: relative;
               top: -3vh;
               justify-content: center;
          `
          },
          $cardBoxSubText: {
               text: 'Since 2022',
               color: 'white',
               size: '1.7vh',
               $styleString: `
               position: relative;
               justify-content: center;
               top: -2.5vh;
               font-weight: 300;
          `
          },
          $cardBoxUlText: {
               text: ['◆ Self taught on the area.', '◆ Many demos made from scratch.', '◆ Next step as a programmer, formally work with Mobile.'],
               color: 'white',
               size: '1.2vh',
               $styleString: `
                    font-weight: 100;
          ` },
          $miniTextBoxes: {
               text: ['Mobile', 'React Native', 'Flutter'],
               color: 'white',
               size: '1vh',
               $mainContainer: `
                    display: flex;
                    margin-top: 2.1vh;
                    left: 2vh;
                    gap: .5vh;
               `,
               container: `
                    background: linear-gradient(251deg, rgba(80,88,106,1) 0%, rgba(104,110,124,1) 100%);
                    border-radius: .5vh;
                    display: flex;
                    bottom: -3.3vh;
                    padding: .5vh .5vh .5vh .5vh;
               `,
               $styleString: `
                    font-weight: 100;
          `
          }
     },
     {
          $styleString: `
               width: 30vh;
               position: absolute;
               height: 40vh;
               transition: .5s;
               background-color: ${COLORS.GREY_DEEP};
               border-radius: 1.5vh;
               &: hover {
                    background-color: ${COLORS.GREY_LIGHT};
                    cursor: pointer;        
                }`,
          $cardTitle: {
               text: 'Claro',
               size: '1.8vh',
               $styleString: `
                         color: white;
                         justify-content: center;
                         position: relative; 
                         z-index: 2;                        
                         top: 1vh;
                    `
          },
          $upperPart: {
               $styleString: `
                         width: 30vh;
                         height: 10vh;
                         background: linear-gradient(186deg, rgba(149,22,22,1) 0%, rgba(255,0,0,1) 100%);
                         border-top-left-radius: 1vh;
                         border-top-right-radius: 1vh;
          ` },
          $cardBoxLogo: {
               $styleString: `
                         width: 10vh;
                         height: 10vh;
                         top: -5vh;
                         display: inline-block;
                         background: linear-gradient(186deg, rgba(149,22,22,1) 0%, rgba(255,0,0,1) 100%);
                         border-radius: 10vh;
                         box-shadow: .1vh .1vh 8vh .5vh black;
          ` },
          media: {
               width: '8vh',
               height: '9.7vh',
               src: ICONS.CLARO,
               $margin: '0',
          },
          $cardBoxText: {
               text: 'Fullstack Developer',
               color: 'white',
               size: '2.5vh',
               $styleString: `
                    position: relative;
                    top: -3vh;
                    justify-content: center;
               `
          },
          $cardBoxSubText: {
               text: '2021 - Current',
               color: 'white',
               size: '1.7vh',
               $styleString: `
                    position: relative;
                    justify-content: center;
                    top: -2.5vh;
                    font-weight: 300;
               `
          },
          $cardBoxUlText: {
               text: ['◆ Ssr Developer at WePlan S.A.', '◆ Web design, Back-end support, bug fixer, customer engagement.', ' ◆ Code quality control, code smells fixing, clean code coverage.'],
               color: 'white',
               size: '1.2vh',
               $styleString: `
                         font-weight: 100;
          ` },
          $miniTextBoxes: {
               text: ['ReactTS', 'NodeJS', 'SQL', 'Web Apps'],
               color: 'white',
               size: '1vh',
               $mainContainer: `
                         display: flex;
                         justify-content: left;
                         left: 2vh;
                         gap: .5vh;
                    `,
               container: `
                         background: linear-gradient(251deg, rgba(80,88,106,1) 0%, rgba(104,110,124,1) 100%);
                         border-radius: .5vh;
                         bottom: -4vh;
                         display: flex;
                         padding: .5vh .5vh .5vh .5vh;
                    `,
               $styleString: `
                         font-weight: 100;
               `
          }
     },
     {
          $styleString: `
               width: 30vh;
               height: 40vh;
               transition: .5s;
               position: absolute;
               background-color: ${COLORS.GREY_DEEP};
               border-radius: 1.5vh;
               &: hover {
                    background-color: ${COLORS.GREY_LIGHT};
                    cursor: pointer;    
                }`,
          $cardTitle: {
               text: 'Teeromu',
               size: '1.8vh',
               $styleString: `
                    color: white;
                    justify-content: center;
                    position: relative; 
                    z-index: 2;                        
                    top: 1vh;
               `
          },
          $upperPart: {
               $styleString: `
                         width: 30vh;
                         height: 10vh;
                         background: linear-gradient(82deg, rgba(255,46,0,1) 0%, rgba(255,124,0,1) 100%);
                         border-top-left-radius: 1vh;
                         border-top-right-radius: 1vh;
          ` },
          $cardBoxLogo: {
               $styleString: `
                         width: 10vh;
                         height: 10vh;
                         top: -5vh;
                         display: inline-block;
                         background: linear-gradient(82deg, rgba(255,46,0,1) 0%, rgba(255,124,0,1) 100%);
                         border-radius: 10vh;
                         box-shadow: .1vh .1vh 8vh .5vh black;
          ` },
          media: {
               width: '7vh',
               height: '7vh',
               src: ICONS.TEEROMU,
               $margin: '1.5vh 0',
          },
          $cardBoxText: {
               text: 'Creative Lead - Software Developer',
               color: 'white',
               size: '2.5vh',
               $styleString: `
                    position: relative;
                    top: -3vh;
                    justify-content: center;
               `
          },
          $cardBoxSubText: {
               text: '2019 - Current',
               color: 'white',
               size: '1.7vh',
               $styleString: `
                    position: relative;
                    justify-content: center;
                    top: -2.5vh;
                    font-weight: 300;
               `
          },
          $cardBoxUlText: {
               text: ['◆ Responsible for general software team, development, architecture and design.', '◆ Vanguardist software team.'],
               color: 'white',
               size: '1.2vh',
               $styleString: `
                         font-weight: 100;
                         top: -1vh;
          ` },
          $miniTextBoxes: {
               text: ['App design', 'Games', 'Challengers', 'Web'],
               color: 'white',
               size: '1vh',
               $mainContainer: `
                         display: flex;
                         justify-content: left;
                         left: 2vh;
                         gap: .5vh;
                    `,
               container: `
                         background: linear-gradient(251deg, rgba(80,88,106,1) 0%, rgba(104,110,124,1) 100%);
                         border-radius: .5vh;
                         display: flex;
                         bottom: -5vh;
                         padding: .5vh .5vh .5vh .5vh;
                    `,
               $styleString: `
                         font-weight: 100;
               `
          }
     },

     ],
     $resumeMessage: {
          text: "Or check my",
          size: '1.5vh',
          color: COLORS.WHITE,
          fontWeight: '100',
          $styleString: `   
               justify-content: center;
               z-index: 1;
               position: relative;
               margin-top: 5vh;
          `,
     },
     $resumeMessage2: {
          text: "Resume",
          size: '1.5vh',
          fontWeight: 'bold',
          $styleString: `   
               justify-content: center;
               z-index: 1;
               position: relative;
               margin-top: .25vh;
               cursor: pointer;
               color: ${COLORS.GREEN_3};
               &: hover {                    
                    color: ${COLORS.GREEN_5};
                }
          `,
     },
     $linkedInMessage: [{
          text: "Further in-depth experience can be found on my",
          size: '1.5vh',
          color: COLORS.WHITE,
          fontWeight: '100',
          $styleString: `   
               justify-content: center;
               position: relative;
               margin-top: 5vh;
               display: flex;
          `,
     },
     {
          text: "LinkedIn",
          size: '1.5vh',
          fontWeight: 'bold',
          onClick: () => window.open("https://www.linkedIn.com/in/mathiasalss/"),
          $styleString: `   
               justify-content: center;
               margin-top: .25vh;
               cursor: pointer;               
               color: ${COLORS.LIGHT_BLUE};
               &: hover {                    
                    color: ${COLORS.LIGHT_BLUE_STRONG};
                }
          `,
     }],
     contactWithContainer: {
          $styleString: `
               display: block;   
          `
     },
     contactWithContainer2: {
          $styleString: `
               display: flex;   
               justify-content: center;
          `
     },
     contactWith: {
          $styleString: `
               position: relative;
               display: flex;
               cursor: pointer;
               background: ${COLORS.LIGHT_BLUE_STRONG};           
               padding: 1vh;
               border-radius: 1vh;
               margin-top: 5vh;
               height: 5vh;
               width: 20vh;
               &: hover {
                    background-color: ${COLORS.LIGHT_BLUE};
                }
          `
     },
     contactWithText: {
          color: 'white',
          size: '2vh',
          $styleString: 'padding-top: 1vh; margin-left: 1.5vh;',

     },
     finalMessage: {
          text: "Made with love 💖 by Mathias Lovera",
          size: '1vh',
          color: COLORS.WHITE,
          fontWeight: '100',
          $styleString: `   
               justify-content: center;
               z-index: 1;
               position: relative;               
               padding-bottom: 1vh;
               margin-top: 5vh;
          `,
     },
}

const MODAL_CONTACT = {
     mainConainer: {
          $styleString: `
          padding: 3vh;
          background: ${COLORS.GREY_SMOOTH};  
          border-radius: 1vh;
     ` },
     titleModal: {
          text: "Mail me ",
          color: COLORS.WHITE,
          size: '3vh',
          fontWeight: 'bold',
          $styleString: 'justify-content: center;'
     },
     greenBar: {
          $styleString: `
               background-color: ${COLORS.GREEN};
               margin-top: 1vh;
               margin-left: 7.5vh;
               width: 20vh;
               height: .35vh;
          `

     },
     close: {
          src: ICONS.PORTFOLIO,
          color: COLORS.WHITE,
          text: '✖',
          size: '1.5vh',
          $pointer: true,
          $styleString: `
               border-radius: 1vh;
               padding: .5vh;
               position: fixed;
               top: 44vh;    
               right: 80.5vh; 
               cursor: pointer;
               &: hover { 
                    color: ${COLORS.LIGHT_BLUE};
                }
          `
     },
     nameContainer: {
          $styleString: `		
               margin-top: 5vh;
               display: flex;
               justify-content: center;
     `,
     },
     nameText: {
          text: 'Name',
          $styleString: `		
                    font-size: 1vh;
                    border-radius: .5vh;
                    position: absolute;
                    top: -2.5vh;
                    left: 1vh;
                    padding: .5vh;
                    z-index: 1;
                    color: ${COLORS.GREEN_STRONG};
                    transition: .5s;
		`,
     },
     nameText1: {
          text: 'Name',
          $styleString: `		
               font-size: 1.5vh;
               border-radius: .5vh;
               position: absolute;
               top: .75vh;
               left: 2vh;
               padding: .5vh;
               z-index: 1;
               color: ${COLORS.WHITE_GREY};
               transition: .5s;
		`,
     },
     inputContainer: {
          $styleString: `		
               margin-top: 5vh;
               display: flex;
               justify-content: center;
     `,
     },
     inputText: {
          text: 'Email',
          $styleString: `		
                    font-size: 1vh;
                    border-radius: .5vh;
                    position: absolute;
                    top: -2.5vh;
                    left: 1vh;
                    padding: .5vh;
                    z-index: 1;
                    color: ${COLORS.GREEN_STRONG};
                    transition: .5s;
		`,
     },
     inputText1: {
          text: 'Email',
          $styleString: `		
               font-size: 1.5vh;
               border-radius: .5vh;
               position: absolute;
               top: .75vh;
               left: 2vh;
               padding: .5vh;
               z-index: 1;
               color: ${COLORS.WHITE_GREY};
               transition: .5s;
		`,
     },
     input1: {
          $styleString: `		
                    padding: 1.5vh 1.5vh 1.5vh 1vh;
                    font-size: 1.5vh;
                    border: .25vh solid transparent;
			     background-color: ${COLORS.GREY_DEEP};
                    border-radius: .5vh;
                    color: white;
		`,
     },
     input2: {
          $styleString: `		
                    padding: 1.5vh 1.5vh 1.5vh 1vh;
                    font-size: 1.5vh;	
                    border: .2vh solid ${COLORS.GREEN_STRONG}; 
                    border-radius: .5vh;
			     background-color: ${COLORS.GREY_DEEP};
                    color: white;
		`,
     },
     messageContainer: {
          $styleString: `		
               margin-top: 5vh;
               display: flex;
               justify-content: center;
     `,
     },
     messageText: {
          text: 'Message',
          $styleString: `		
                    font-size: 1vh;
                    border-radius: .5vh;
                    position: absolute;
                    top: -2.5vh;
                    left: 1vh;
                    padding: .5vh;
                    z-index: 1;
                    color: ${COLORS.GREEN_STRONG};
                    transition: .5s;
		`,
     },
     messageText1: {
          text: 'Message',
          $styleString: `		
                    font-size: 1.5vh;
                    border-radius: .5vh;
                    position: absolute;
                    top: 1vh;
                    left: 2vh;
                    padding: .5vh;
                    z-index: 1;
                    color: ${COLORS.WHITE_GREY};
                    transition: .5s;
		`,
     },
     message1: {
          $styleString: `	                    
                    font-family: Montserrat;
                    height: 10vh;	
                    resize: none;                    
                    justify-content: flex-start;
                    padding: 1.5vh 1.5vh 1.5vh 1vh;
                    font-size: 1.5vh;
                    border: .25vh solid transparent;
			     background-color: ${COLORS.GREY_DEEP};
                    border-radius: .5vh;
                    color: white;
                    ine-break: auto;
		`,
     },
     message2: {
          $styleString: `		
                    font-family: Montserrat;
                    height: 10vh;	
                    resize: none;
                    padding: 1.5vh 1.5vh 1.5vh 1vh;
                    text-overflow: hidden;
                    font-size: 1.5vh;	
                    border: .2vh solid ${COLORS.GREEN_STRONG}; 
                    border-radius: .5vh;
			     background-color: ${COLORS.GREY_DEEP};
                    color: white;
		`,
     },
     contactModal: (aviable: any) => {
          return {
               $styleString: `
               display: flex;
               justify-content: center;
               ${aviable && 'cursor: pointer'};
               background: ${aviable ? COLORS.LIGHT_BLUE_STRONG : COLORS.RED_STRONG};           
               border-radius: .5vh;
               margin-top: 3vh;
               margin-left: 12vh;
               transition: .5s;
               margin-right: 12vh;
               &: hover {
                    background-color: ${aviable ? COLORS.LIGHT_BLUE : COLORS.RED_STRONG};
                }
          ` }
     },
     contactModalText: {
          color: 'white',
          size: '2vh',
          $styleString: `
               justify-content: center; 
               padding-top: 1vh; 
               padding-bottom: 1vh; 
               justify-content: center;
          `
     },
     sumbitOk: {
          $styleString: `
               color: white;
               padding: 1vh;
               margin-top: 3vh;
               transition: .5s;
               border-radius: .5vh;
               margin-right: 15vh;
               margin-left: 15vh;
               background: ${COLORS.ALERT_SUCCESS};
          `
     },
}

export {
     HOME,
     ABOUT_ME,
     TEXT_SPHERE,
     TECH_DESC,
     INDEX,
     EXPERIENCE,
     MODAL_CONTACT
}