import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

const skills = {
  knowledge: {
    languages: [
      { name: 'ingles', flag: cifUs },
      { name: 'portugues', flag: cifBr },
      { name: 'espanhol', flag: cifEs },
    ],
    skills: [
      {
        skill: 'java',
        level: 90,
        mentory: true,
        group: 'development',
        color: 'danger',
      },
      {
        skill: 'sql',
        level: 80,
        mentory: true,
        group: 'data science',
        color: 'danger',
      },
      {
        skill: 'contract-tests',
        level: 50,
        mentory: true,
        group: 'tests',
        color: 'danger',
      },
      {
        skill: 'python',
        level: 50,
        mentory: true,
        group: 'tests',
        color: 'danger',
      },
    ],
  },
}

export default skills
