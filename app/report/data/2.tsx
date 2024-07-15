
export enum statusType {
  InProgress,
  Done,
  Issue
}

export const data = {
  main: [
    {
      number: 209798,
      numberEpic: 203820,
      title: '[ID-FE][AS][FE][Link & Checkout] Support Admin Enhancement',
      pm: 'olivia.kohar',
      assigne: 'adi.almajid',
      scope: ['AS'],
      role: ['reviewer'],
      status: 1,
      releasePlan: '07.v2'
    },
    {
      number: 217529,
      numberEpic: 209484,
      title: '[AS][FE][Admin] Adjust Transaction detail page due to NFC addition',
      pm: 'trang.phan',
      assigne: 'yohannes.alldy',
      scope: ['AS'],
      role: ['developer'],
      status: 0,
      releasePlan: 'TBA'
    },
    {
      number: 218169,
      numberEpic: '',
      title: '[BE] should display spl option on spportal admin "Payment Method" field',
      pm: '-',
      assigne: 'adi.almajid',
      scope: ['AS'],
      role: ['reviewer'],
      status: 0,
      releasePlan: 'TBA'
    },
    {
      number: 218382,
      numberEpic: 195376,
      title: '[Data][FE] Check Request Logic of Real Time Monitoring Request Config',
      pm: '-',
      assigne: 'yohannes.alldy',
      scope: ['Real Time Monitoring'],
      role: ['developer'],
      status: 0,
      releasePlan: 'within Q3'
    },
    {
      number: 218383,
      numberEpic: 195376,
      title: '[Data][FE] Add Clearing Service Monitoring Menu',
      pm: '-',
      assigne: 'yohannes.alldy',
      scope: ['Real Time Monitoring'],
      role: ['developer'],
      status: 0,
      releasePlan: 'within Q3'
    },
  ],
  platform: [
    {
      number: 214480,
      numberEpic: 215859,
      title: 'Update Main Portal GRPC to support PCI Migration',
      pm: '',
      assigne: 'yohannes.alldy',
      scope: ['Platform', 'SPM'],
      role: ['developer'],
      status: 1,
      releasePlan: '2024.06.v2-Tech_Adhoc'
    },
    {
      number: 217590,
      numberEpic: 215859,
      title: 'Update Main Portal grpc client version',
      pm: '',
      assigne: 'yohannes.alldy',
      scope: ['Platform', 'SPM'],
      role: ['developer'],
      status: 1,
      releasePlan: '2024.06.v2-Tech_Adhoc'
    },
  ],
  others: [
    {
      title: 'Shopee PMP Project Handover initiation',
      assigne: 'yohannes.alldy',
      role: ['developer'],
      status: 1,
    },
  ]
}