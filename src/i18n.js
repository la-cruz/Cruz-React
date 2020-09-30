import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import teamFr from './translation/team/team_fr.json'
import teamEn from './translation/team/team_en.json'
import projectsEn from './translation/projects/project_en.json'
import projectsFr from './translation/projects/project_fr.json'
import globalsFr from './translation/global_fr.json'
import globalsEn from './translation/global_en.json'

var resources = {
  "fr": {
    "translation": {
      ...globalsFr,
      ...teamFr,
      ...projectsFr
    }
  },
  "en": {
    "translation": {
      ...globalsEn,
      ...teamEn,
      ...projectsEn
    }
  }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;