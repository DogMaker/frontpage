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

const searchById = {
  clientId: 'CLI-01BX5ZZKBKACTAV9WEVGEMMVRY',
  linkedin: 'https://www.linkedin.com/in/hugo-pereira-066b8971',
  active: true,
  completeName: 'Jana Pereira',
  country: 'BRA',
  description:
    'Hello, my name is Hermon. I was born in Belize. I am a native English and Belize Kriol Speaker. I am a retired semi-professional basketball player which I played for 4 years, with 2 championship trophies. Besides basketball, I love reading car magazines and customizing vehicles, mountain biking, swimming, fishing, cooking and travelli ...',
  rattings: 5,
  prices: {
    valuePerMentoring: 81.51,
    mentoringPackages: [
      {
        name: 'Oferta mango',
        description: 'Oferta de final de ano para comemorar o natal',
        numberOfMentories: 5,
        discountPercentage: 5,
        totalPrice: 380,
      },
      {
        name: 'Oferta teta',
        description: 'Oferta de final de ano para comemorar o natal',
        numberOfMentories: 5,
        discountPercentage: 5,
        totalPrice: 380,
      },
    ],
  },
  rate: [
    {
      name: 'Ana Viatinan',
      description:
        'I m always so happy with my teacher. She is patient and kind and very thoughtful about my own needs, and how I think, and how I can understand Persian in the best way.',
      date: 'Sep 30, 2020',
      class: 'Java',
    },
  ],
  knowledge: {
    languages: [
      {
        name: 'ingles',
        flag: cifUs,
      },
      {
        name: 'portugues',
        flag: cifBr,
      },
      {
        name: 'espanhol',
        flag: cifEs,
      },
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
    ],
  },
}

export default searchById
