import { COLORS } from "./colors"
import ICONS from "./icons"

const INDEX = {
     $arrowDow: {
          src: ICONS.HOME,
          width: '2.5vh',
          height: '2.5vh',
          $pointer: true,
          $styleString: `
               right: 3vh; 
               background-color: ${COLORS.GREEN_STRONG}; 
               border-radius: 1vh;
               padding: .75vh;
               transition: .5s;
               z-index: 2;
               position: fixed;
               top: 45vh;
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
               right: 3vh; 
               background-color: ${COLORS.GREEN_STRONG}; 
               border-radius: 1vh;
               padding: .75vh;
               transition: .5s;
               position: fixed;
               top: 50vh;
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
               right: 3vh; 
               background-color: ${COLORS.GREEN_STRONG}; 
               border-radius: 1vh;
               padding: .75vh;
               transition: .5s;
               position: fixed;
               top: 9vh;
               z-index: 2;
               top: 55vh;              
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
                    z-index: 2;
                    top: 60vh;
          ` } : {
               src: ICONS.MAIL_ME,
               width: '2.5vh',
               height: '2.5vh',
               $pointer: true,
               $styleString: `
                    right: -10vh; 
                    background-color: ${COLORS.GREEN}; 
                    &: hover {
                         background-color: ${COLORS.LIGHT_BLUE_STRONG};
                     }
                    border-radius: 1vh;
                    padding: .75vh;
                    transition: .5s;
                    position: fixed;
                    top: 9vh;
                    z-index: 2;
                    top: 60vh;
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
          top: 15vh;
     `,
     },
     $logo: {
          src: ICONS.CONDING_DOGE,
          width: '5vw',
          $styleString: `
               border: .5vh solid ${COLORS.GREEN};
               border-radius: 500vh;
               margin-bottom: 10vh;
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
     container: {
          $styleString: `   
               border-radius: 2vh;
               position: absolute;
               width: 24vh;
               height: 24vh;
               padding: 1vh 1.5vh 1vh 1.5vh;
               background-color: ${COLORS.GREEN_2};
               border: .5vh solid ${COLORS.GREEN};
     ` },
     cloud: {
          $styleString: `   
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
          "MongoDB",
          "GIT",
          "Dart",
          "Flutter"
     ]
}

const EXPERIENCE = {
     $styleString: `      
          background: ${COLORS.GREY_SMOOTH};
          height: 100vh;
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
     cardBox: [
          {
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
               $hreflink: 'https://weplan-latam.com/',
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
               top: 10vh;
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
               top: 10vh;
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
               z-index: 1;
               position: relative;
               top: 10vh;
          `,
     },
     {
          text: "LinkedIn",
          size: '1.5vh',
          fontWeight: 'bold',
          onClick: () => window.open("https://www.linkedIn.com/in/mathiasalss/"),
          $styleString: `   
               justify-content: center;
               z-index: 1;
               position: relative;
               top: 10vh;
               margin-bottom: 1vh;
               cursor: pointer;               
               color: ${COLORS.LIGHT_BLUE};
               &: hover {
                    
               color: ${COLORS.LIGHT_BLUE_STRONG};
                }
          `,
     }],
     contactWithContainer: {
          $styleString: `
               display: flex; gap: .5vh; 
               justify-content: center;
               position: relative;
               display: flex;               
          `
     },
     contactWith: {
          $styleString: `
               position: relative;
               cursor: pointer;
               background: ${COLORS.LIGHT_BLUE_STRONG};           
               padding: 1vh;
               border-radius: 1vh;
               top: 25vh;
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
               top: 40vh;
               padding-bottom: 2vh;
          `,
     },
}

const MODAL_CONTACT = {
     mainConainer: {
          $styleString: `
          height: 47.5vh;
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
                    user-select: none;
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
               top: .5vh;
               user-select: none;
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
                    user-select: none;
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
               height: 3.5vh;
               position: absolute;
               top: .5vh;
               left: 2vh;
               user-select: none;
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
                    height: 3.5vh;
                    width: -webkit-fill-available;
			     background-color: ${COLORS.GREY_DEEP};
                    padding: 0 1vh;
                    border-radius: .5vh;
                    color: white;
                    outline: 0;
		`,
     },
     input2: {
          $styleString: `	                    
                    padding: 1.5vh 1.5vh 1.5vh 1vh;
                    text-overflow: hidden;
                    height: 3.5vh;
                    width: -webkit-fill-available;
                    font-size: 1.5vh;	
                    border: .2vh solid ${COLORS.GREEN_STRONG}; 
                    padding: 0 1vh;
                    border-radius: .5vh;
			     background-color: ${COLORS.GREY_DEEP};
                    color: white;
                    outline: 0;
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
                    user-select: none;
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
                    user-select: none;
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
                    font-weight: 600;
                    height: 10vh;	
                    width: -webkit-fill-available;
                    resize: none;                    
                    justify-content: flex-start;
                    padding: 1.5vh 1.5vh 1.5vh 1vh;
                    font-size: 1.5vh;
                    border: .25vh 
                    width: -webkit-fill-available;
			     background-color: ${COLORS.GREY_DEEP};
                    border-radius: .5vh;
                    color: white;
                    line-break: auto;
		`,
     },
     message2: {
          $styleString: `		
                    font-family: Montserrat;
                    font-weight: 600;
                    height: 10vh;	
                    width: -webkit-fill-available;
                    resize: none;
                    padding: 1.5vh 1.5vh 1.5vh 1vh;
                    text-overflow: hidden;
                    font-size: 1.5vh;	
                    border: .2vh solid ${COLORS.GREEN_STRONG}; 
                    border-radius: .5vh;
			     background-color: ${COLORS.GREY_DEEP};
                    color: white;
                    outline: 0;
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

const SWIPER_MAIN = {
     container: {
          $styleString: `
               margin-top: 5vh;
               position: fixed;               
     ` },
}

export {
     HOME,
     ABOUT_ME,
     TEXT_SPHERE,
     INDEX,
     EXPERIENCE,
     MODAL_CONTACT,
     SWIPER_MAIN
}