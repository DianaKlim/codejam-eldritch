// import Ancients from '/eldritch-codejam/assets/Ancients/Ancients.js';
import cardsData from '/eldritch-codejam/data/mythicCards/blue/index.js';
import cardsDataBrown from '/eldritch-codejam/data/mythicCards/brown/index.js';
import cardsDataGreen from '/eldritch-codejam/data/mythicCards/green/index.js';
import ancientsData from '/eldritch-codejam/data/ancients.js';


const azathoth = document.querySelector('.azathoth');
const cthulhu = document.querySelector('.cthulhu');
const iogSothoth = document.querySelector('.iogSothoth');
const shubNiggurath = document.querySelector('.shubNiggurath');
const actualCard = document.querySelector('.actual-card');
const veryLightLevel = document.querySelector('.very-light');
const lightLevel = document.querySelector('.light');
const averageLevel = document.querySelector('.average');
const hardLevel = document.querySelector('.hard');
const veryHardLevel = document.querySelector('.very-higth');
const kneadButton = document.querySelector('.knead-button');
const ancientsContainer = document.querySelector('.ancients');
const levelsContainer = document.querySelector('.levels');
const deckContainer = document.querySelector('.deck-container');
const firstStage = document.querySelectorAll('.firstStage');
const secondStage = document.querySelectorAll('.secondStage');
const thirdStage = document.querySelectorAll('.thirdStage');




let ancientsDat = 0;
let dictForActualCard = {};


// ---------------------------заполнение табло --------------------------------

function fillDots(ancient) {
    firstStage[0].textContent = ancient.firstStage.green;
    firstStage[1].textContent = ancient.firstStage.brown;
    firstStage[2].textContent = ancient.firstStage.blue;
    secondStage[0].textContent = ancient.secondStage.green;
    secondStage[1].textContent = ancient.secondStage.brown;
    secondStage[2].textContent = ancient.secondStage.blue;
    thirdStage[0].textContent = ancient.thirdStage.green;
    thirdStage[1].textContent = ancient.thirdStage.brown;
    thirdStage[2].textContent = ancient.thirdStage.blue;
}


 
//-------------------------------- КЛИК НА ДРЕВНЕГО -----------------------------------

ancientsContainer.addEventListener('click', e => {
    kneadButton.style.visibility = 'hidden';
    deckContainer.style.visibility = 'hidden'

    if (e.target.className === 'ancient-card azathoth') {
        ancientsDat = ancientsData[0];
        fillDots(ancientsData[0])
        azathoth.classList.add('card-active')
        cthulhu.classList.remove('card-active')
        iogSothoth.classList.remove('card-active')
        shubNiggurath.classList.remove('card-active')
    }
    else if (e.target.className === 'ancient-card cthulhu') {
        ancientsDat = ancientsData[1];
        fillDots(ancientsData[1])
        cthulhu.classList.add('card-active')
        azathoth.classList.remove('card-active')
        iogSothoth.classList.remove('card-active')
        shubNiggurath.classList.remove('card-active')
    }
    else if (e.target.className === 'ancient-card iogSothoth') {
        ancientsDat = ancientsData[2];
        fillDots(ancientsData[2])
        azathoth.classList.remove('card-active')
        cthulhu.classList.remove('card-active')
        shubNiggurath.classList.remove('card-active')
        iogSothoth.classList.add('card-active')
    }
    else if (e.target.className === 'ancient-card shubNiggurath') {
        ancientsDat = ancientsData[3];
        fillDots(ancientsData[3])
        shubNiggurath.classList.add('card-active')
        azathoth.classList.remove('card-active')
        cthulhu.classList.remove('card-active')
        iogSothoth.classList.remove('card-active')
    }
    levelsContainer.style.visibility = 'visible'

})

//-------------------------------- КЛИК НА УРОВНИ -----------------------------------


levelsContainer.addEventListener('click', e => {
    //-----------------------------------------клик на легкий уровень ---------------------------------------------
    if (e.target.className === 'level-game light') {
        lightLevel.classList.add('bg-active')
        averageLevel.classList.remove('bg-active')
        hardLevel.classList.remove('bg-active')
        veryLightLevel.classList.remove('bg-active')
        veryHardLevel.classList.remove('bg-active')

        //-------------------------------- клик на замешать колоду в легком уровне -------

        kneadButton.addEventListener('click', e => {
            console.log('ancientsDat', ancientsDat)
            fillDots(ancientsDat)
            deckContainer.style.visibility = 'visible';
            dictForActualCard = easyDifficulty()
            count = 0;
            actualCard.style.backgroundImage = `url('/eldritch-codejam/assets/mythicCardBackground.png')`;
        })
    }

    //-----------------------------------------клик на средний уровень ------------------


    if (e.target.className === 'level-game average') {
        lightLevel.classList.remove('bg-active')
        averageLevel.classList.add('bg-active')
        hardLevel.classList.remove('bg-active')
        veryLightLevel.classList.remove('bg-active')
        veryHardLevel.classList.remove('bg-active')
        //-------------------------------- клик на замешать колоду в среднем уровне -------

        kneadButton.addEventListener('click', e => {
            deckContainer.style.visibility = 'visible';
            dictForActualCard = normalDifficulty()
            count = 0;
            actualCard.style.backgroundImage = `url('/eldritch-codejam/assets/mythicCardBackground.png')`;
        })
    }

      //-----------------------------------------клик на тяжелый уровень ------------------


      if (e.target.className === 'level-game hard') {
        lightLevel.classList.remove('bg-active')
        averageLevel.classList.remove('bg-active')
        hardLevel.classList.add('bg-active')
        veryLightLevel.classList.remove('bg-active')
        veryHardLevel.classList.remove('bg-active')
        //-------------------------------- клик на замешать колоду в среднем уровне -------

        kneadButton.addEventListener('click', e => {
            deckContainer.style.visibility = 'visible';
            dictForActualCard = hardDifficulty()
            count = 0;
            actualCard.style.backgroundImage = `url('/eldritch-codejam/assets/mythicCardBackground.png')`;
        })
    }

kneadButton.style.visibility = 'visible';
})



//-------------------------------- КЛИК НА РУБАШКУ -----------------------------------

let count = 0;

actualCard.addEventListener('click', e => {
    let cardUrl = dictForActualCard[`${count}`].cardFace
    actualCard.style.backgroundImage = `url('${cardUrl}')`;
    console.log(dictForActualCard[`${count}`])
    tablo(dictForActualCard[`${count}`].color)
    count ++
})


    //----------------------------функция ТАБЛО ----------------------------------------

    function tablo(color) {
        if (color === 'green') {
            colorDashboard(0)
        }
        if (color === 'brown') {
            colorDashboard(1)
        }
        if (color === 'blue') {
            colorDashboard(2)
        }
    }

    function colorDashboard(num) {
        
        if (firstStage[num].textContent > 0) {
            firstStage[num].textContent --;
        }
        else if (firstStage[num].textContent === 0) {
            secondStage[num].textContent --;
        }
        else if (secondStage[num].textContent > 0) {
            secondStage[num].textContent --;
        }
        else if (secondStage[num].textContent === 0) {
            thirdStage[num].textContent --;
        }
        else if (thirdStage[num].textContent > 0) {
            thirdStage[num].textContent --;
        }
        else if (thirdStage[num].textContent === 0) {
            thirdStage[num].textContent = 0;
        }
    }

//---------------------------------- Функция, сортирующая карты по режиму сложности -------------------------

function sortByLevel (cards, difficulty) {
    let arr = [];
    cards.forEach(el => {
        if (el.difficulty === difficulty) {
            arr.push(el)
        }
    })
    return arr
}


//---------------------------------- Перемешивающая функция -------------------------


function shuffle (cards) {                                      // num - кол-во всех карточек одного цвета у древнего,   all  -  все существующие карточки в игре
    const arr = Array(cards.length).fill().map((e, i) => i + 0);  // массив от 0 
    const shuffleArr = arr.sort(() => Math.random() - 0.5);       // отсортировала
    let array = [];
    shuffleArr.forEach(el => {
        array.push(cards[el])
    })
    return array                                            // вывожу num-рандомных чисел
}


//---------------------------------- Функция, возвращающая словарь стейдж: кол-во карт цвета  -------------------------

function cardsColorAncient (ancient, color) {
    const dict = {}
    dict['firstStage'] = ancient.firstStage[color]
    dict['secondStage'] = ancient.secondStage[color]
    dict['thirdStage'] = ancient.thirdStage[color]
    return dict
}




//---------------------------------- CHOOSE CARDS easy -------------------------

function chooseCards (cards, dict) {
    const arr = [...sortByLevel (cards, 'easy'), ...sortByLevel (cards, 'normal')]
    const shuffledArr = shuffle(arr);
    const sum = dict.firstStage + dict.secondStage + dict.thirdStage;
    const sliceArr = shuffledArr.slice(0, sum)
    const dictionary = {}
    dictionary['firstStage'] = sliceArr.slice(0, dict.firstStage)
    dictionary['secondStage'] = sliceArr.slice(dict.firstStage, dict.firstStage + dict.secondStage)
    dictionary['thirdStage'] = sliceArr.slice(dict.firstStage + dict.secondStage)
    // console.log('sliceArr', sliceArr)
    // console.log( 'dictionary', dictionary)
    return dictionary
}

//---------------------------------- EASY DIFFICULTY -------------------------

function easyDifficulty () {
    const dictGreen = cardsColorAncient (ancientsDat, 'green')
    const dictBrown = cardsColorAncient (ancientsDat, 'brown')
    const dictBlue = cardsColorAncient (ancientsDat, 'blue');
    const chooseGreen = chooseCards (cardsDataGreen, dictGreen);
    const chooseBrown = chooseCards (cardsDataBrown, dictBrown);
    const chooseBlue = chooseCards (cardsData, dictBlue);

    // console.log('chooseGreen', chooseGreen.firstStage)
    // console.log('chooseBrown', chooseBrown)
    // console.log('chooseBlue', chooseBlue)

    const firstStage = [...chooseGreen.firstStage, ...chooseBrown.firstStage, ...chooseBlue.firstStage];
    const secondStage = [...chooseGreen.secondStage, ...chooseBrown.secondStage, ...chooseBlue.secondStage];
    const thirdStage = [...chooseGreen.thirdStage, ...chooseBrown.thirdStage, ...chooseBlue.thirdStage]

    // console.log('firstStage', firstStage)
    // console.log('secondStage', secondStage)
    // console.log('thirdStage', thirdStage)

    const shuffleFirstStage = shuffle (firstStage);
    const shuffleSecondStage = shuffle (secondStage);
    const shuffleThirdStage = shuffle (thirdStage);

    // console.log('shuffleFirstStage', shuffleFirstStage)
    // console.log('shuffleSecondStage', shuffleSecondStage)
    // console.log('shuffleThirdStage', shuffleThirdStage)

    console.log('deck', [...shuffleFirstStage, ...shuffleSecondStage, ...shuffleThirdStage ])

    return [...shuffleFirstStage, ...shuffleSecondStage, ...shuffleThirdStage ]


}




//---------------------------------- CHOOSE CARDS hard-------------------------

function chooseCardsHard (cards, dict) {
    const arr = [...sortByLevel (cards, 'hard'), ...sortByLevel (cards, 'normal')]
    const shuffledArr = shuffle(arr);
    const sum = dict.firstStage + dict.secondStage + dict.thirdStage;
    const sliceArr = shuffledArr.slice(0, sum)
    const dictionary = {}
    dictionary['firstStage'] = sliceArr.slice(0, dict.firstStage)
    dictionary['secondStage'] = sliceArr.slice(dict.firstStage, dict.firstStage + dict.secondStage)
    dictionary['thirdStage'] = sliceArr.slice(dict.firstStage + dict.secondStage)
    return dictionary
}

//---------------------------------- HARD DIFFICULTY -------------------------

function hardDifficulty () {
    const dictGreen = cardsColorAncient (ancientsDat, 'green')
    const dictBrown = cardsColorAncient (ancientsDat, 'brown')
    const dictBlue = cardsColorAncient (ancientsDat, 'blue');
    const chooseGreen = chooseCardsHard (cardsDataGreen, dictGreen);
    const chooseBrown = chooseCardsHard (cardsDataBrown, dictBrown);
    const chooseBlue = chooseCardsHard (cardsData, dictBlue);

    const firstStage = [...chooseGreen.firstStage, ...chooseBrown.firstStage, ...chooseBlue.firstStage];
    const secondStage = [...chooseGreen.secondStage, ...chooseBrown.secondStage, ...chooseBlue.secondStage];
    const thirdStage = [...chooseGreen.thirdStage, ...chooseBrown.thirdStage, ...chooseBlue.thirdStage]

    const shuffleFirstStage = shuffle (firstStage);
    const shuffleSecondStage = shuffle (secondStage);
    const shuffleThirdStage = shuffle (thirdStage);

    console.log('deck', [...shuffleFirstStage, ...shuffleSecondStage, ...shuffleThirdStage ])
    return [...shuffleFirstStage, ...shuffleSecondStage, ...shuffleThirdStage ]
}




//---------------------------------- CHOOSE CARDS normal-------------------------

function chooseCardsNormal (cards, dict) {
    const arr = [...sortByLevel (cards, 'hard'), ...sortByLevel (cards, 'normal'), ...sortByLevel (cards, 'easy')]
    const shuffledArr = shuffle(arr);
    const sum = dict.firstStage + dict.secondStage + dict.thirdStage;
    const sliceArr = shuffledArr.slice(0, sum)
    const dictionary = {}
    dictionary['firstStage'] = sliceArr.slice(0, dict.firstStage)
    dictionary['secondStage'] = sliceArr.slice(dict.firstStage, dict.firstStage + dict.secondStage)
    dictionary['thirdStage'] = sliceArr.slice(dict.firstStage + dict.secondStage)
    return dictionary
}

//---------------------------------- NORMAL DIFFICULTY -------------------------

function normalDifficulty () {
    const dictGreen = cardsColorAncient (ancientsDat, 'green')
    const dictBrown = cardsColorAncient (ancientsDat, 'brown')
    const dictBlue = cardsColorAncient (ancientsDat, 'blue');
    const chooseGreen = chooseCardsNormal (cardsDataGreen, dictGreen);
    const chooseBrown = chooseCardsNormal (cardsDataBrown, dictBrown);
    const chooseBlue = chooseCardsNormal (cardsData, dictBlue);

    const firstStage = [...chooseGreen.firstStage, ...chooseBrown.firstStage, ...chooseBlue.firstStage];
    const secondStage = [...chooseGreen.secondStage, ...chooseBrown.secondStage, ...chooseBlue.secondStage];
    const thirdStage = [...chooseGreen.thirdStage, ...chooseBrown.thirdStage, ...chooseBlue.thirdStage]

    const shuffleFirstStage = shuffle (firstStage);
    const shuffleSecondStage = shuffle (secondStage);
    const shuffleThirdStage = shuffle (thirdStage);

    console.log('deck', [...shuffleFirstStage, ...shuffleSecondStage, ...shuffleThirdStage ])
    return [...shuffleFirstStage, ...shuffleSecondStage, ...shuffleThirdStage ]
}




//---------------------------------- CHOOSE CARDS very easy-------------------------

function chooseCardsVeryEasy (cards, dict) {
    const arr = sortByLevel (cards, 'easy');
    const shuffledArr = shuffle(arr);
    const sum = dict.firstStage + dict.secondStage + dict.thirdStage;  // сумма всех карт их всех стейджов
    const sliceArr = shuffledArr.slice(0, sum)
    const dictionary = {}
    dictionary['firstStage'] = sliceArr.slice(0, dict.firstStage)
    dictionary['secondStage'] = sliceArr.slice(dict.firstStage, dict.firstStage + dict.secondStage)
    dictionary['thirdStage'] = sliceArr.slice(dict.firstStage + dict.secondStage)

    console.log( 'dictionary', dictionary)
    
    return dictionary
}

//---------------------------------- ADD NORMAL CARD very easy-------------------------

function chooseCardsNormalForVeryEasyDifficult (cards) {
    const arr = sortByLevel (cards, 'normal');
    const shuffledArr = shuffle(arr);
    return shuffledArr
}

//---------------------------------- VERY EASY DIFFICULTY -------------------------

function veryEasyDifficulty (ancientsDat) {
    const dictGreen = cardsColorAncient (ancientsDat, 'green')
    const dictBrown = cardsColorAncient (ancientsDat, 'brown')
    const dictBlue = cardsColorAncient (ancientsDat, 'blue');
    const chooseGreen = chooseCardsVeryEasy (cardsDataGreen, dictGreen);
    const chooseBrown = chooseCardsVeryEasy (cardsDataBrown, dictBrown);
    const chooseBlue = chooseCardsVeryEasy (cardsData, dictBlue);
    
    console.log('chooseCardsNormalForVeryEasyDifficult ((cardsDataGreen, dictGreen)', chooseCardsNormalForVeryEasyDifficult ((cardsDataGreen)))


    const firstStage = [...chooseGreen.firstStage, ...chooseBrown.firstStage, ...chooseBlue.firstStage];
    const secondStage = [...chooseGreen.secondStage, ...chooseBrown.secondStage, ...chooseBlue.secondStage];
    const thirdStage = [...chooseGreen.thirdStage, ...chooseBrown.thirdStage, ...chooseBlue.thirdStage]
    
    const shuffleFirstStage = shuffle (firstStage);
    const shuffleSecondStage = shuffle (secondStage);
    const shuffleThirdStage = shuffle (thirdStage);

    return [...shuffleFirstStage, ...shuffleSecondStage, ...shuffleThirdStage ]
}

// console.log(veryEasyDifficulty())


