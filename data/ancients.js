import Ancients from '../assets/Ancients/Ancients.js'

const ancientsData = [
  {
    id: 'azathoth',
    name: 'azathoth',
    cardFace: Ancients[0].src,
    firstStage: {
      green: 1,
      blue: 1,
      brown: 2,
    },
    secondStage: {
      green: 2,
      blue: 1,
      brown: 3,
    },
    thirdStage: {
      green: 2,
      blue: 0,
      brown: 4,
    },
  },
  {
    id: 'cthulhu',
    name: 'cthulhu',
    cardFace: Ancients[1].src,
    firstStage: {
      green: 0,
      blue: 2,
      brown: 2,
    },
    secondStage: {
      green: 1,
      blue: 0,
      brown: 3,
    },
    thirdStage: {
      green: 3,
      blue: 0,
      brown: 4,
    },
  },
  {
    id: 'iogSothoth',
    name: 'iogSothoth',
    cardFace: Ancients[2].src,
    firstStage: {
      green: 0,
      blue: 1,
      brown: 2,
    },
    secondStage: {
      green: 2,
      blue: 1,
      brown: 3,
    },
    thirdStage: {
      green: 3,
      blue: 0,
      brown: 4,
    },
  },
  {
    id: 'shubNiggurath',
    name: 'shubNiggurath',
    cardFace: Ancients[3].src,
    firstStage: {
      green: 1,
      blue: 1,
      brown: 2,
    },
    secondStage: {
      green: 3,
      blue: 1,
      brown: 2,
    },
    thirdStage: {
      green: 2,
      blue: 0,
      brown: 4,
    },
  },
]

export default ancientsData