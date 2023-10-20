import { GREEN_BOX_TEXT } from "../Constants/globaltext"

export const greenBoxText = (lang: string) => {
     switch (lang) {
          case 'React':
               return GREEN_BOX_TEXT.reactText
          case 'JavaScript':
               return GREEN_BOX_TEXT.JSText
          case 'Python':
               return GREEN_BOX_TEXT.phytonText
          case 'NodeJS':
               return GREEN_BOX_TEXT.nodeJSText
          case 'Analytics':
               return GREEN_BOX_TEXT.analyticsText
          case 'SQL':
               return GREEN_BOX_TEXT.sqlText
          case 'MongoDB':
               return GREEN_BOX_TEXT.mongoText
          case 'Dart':
               return GREEN_BOX_TEXT.dartText
          case 'GIT':
               return GREEN_BOX_TEXT.gitText
     }
}
