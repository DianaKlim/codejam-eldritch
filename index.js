import cardsData from './data/mythicCards/blue/index.js';
import cardsDataBrown from './data/mythicCards/brown/index.js';
import cardsDataGreen from './data/mythicCards/green/index.js';
import ancientsData from './data/ancients.js';


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
    deckContainer.style.visibility = 'hidden';

    if (e.target.className === 'ancient-card azathoth') {
        ancientsDat = ancientsData[0];
        fillDots(ancientsData[0]);
        // activeCardAncient(ancientsData[0]['id']);
        azathoth.classList.add('card-active');
        cthulhu.classList.remove('card-active');
        iogSothoth.classList.remove('card-active');
        shubNiggurath.classList.remove('card-active');
    }
    else if (e.target.className === 'ancient-card cthulhu') {
        ancientsDat = ancientsData[1];
        fillDots(ancientsData[1]);
        cthulhu.classList.add('card-active');
        azathoth.classList.remove('card-active');
        iogSothoth.classList.remove('card-active');
        shubNiggurath.classList.remove('card-active');
    }
    else if (e.target.className === 'ancient-card iogSothoth') {
        ancientsDat = ancientsData[2];
        fillDots(ancientsData[2])
        azathoth.classList.remove('card-active');
        cthulhu.classList.remove('card-active');
        shubNiggurath.classList.remove('card-active');
        iogSothoth.classList.add('card-active');
    }
    else if (e.target.className === 'ancient-card shubNiggurath') {
        ancientsDat = ancientsData[3];
        fillDots(ancientsData[3])
        shubNiggurath.classList.add('card-active');
        azathoth.classList.remove('card-active');
        cthulhu.classList.remove('card-active');
        iogSothoth.classList.remove('card-active');
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
        deckContainer.style.visibility = 'hidden';

        //-------------------------------- клик на замешать колоду в легком уровне -------

        kneadButton.addEventListener('click', e => {
            console.log('ancientsDat', ancientsDat)
            fillDots(ancientsDat)
            deckContainer.style.visibility = 'visible';
            dictForActualCard = easyDifficulty()
            count = 0;
            actualCard.style.backgroundImage = `url('./assets/mythicCardBackground.png')`;
        })
    }

    //-----------------------------------------клик на средний уровень ------------------


    if (e.target.className === 'level-game average') {
        lightLevel.classList.remove('bg-active')
        averageLevel.classList.add('bg-active')
        hardLevel.classList.remove('bg-active')
        veryLightLevel.classList.remove('bg-active')
        veryHardLevel.classList.remove('bg-active')
        deckContainer.style.visibility = 'hidden';

        //-------------------------------- клик на замешать колоду в среднем уровне -------

        kneadButton.addEventListener('click', e => {
            deckContainer.style.visibility = 'visible';
            dictForActualCard = normalDifficulty()
            count = 0;
            actualCard.style.backgroundImage = `url('./assets/mythicCardBackground.png')`;
        })
    }

      //-----------------------------------------клик на тяжелый уровень ------------------


      if (e.target.className === 'level-game hard') {
        lightLevel.classList.remove('bg-active')
        averageLevel.classList.remove('bg-active')
        hardLevel.classList.add('bg-active')
        veryLightLevel.classList.remove('bg-active')
        veryHardLevel.classList.remove('bg-active')
        deckContainer.style.visibility = 'hidden';

        //-------------------------------- клик на замешать колоду в среднем уровне -------

        kneadButton.addEventListener('click', e => {
            deckContainer.style.visibility = 'visible';
            dictForActualCard = hardDifficulty()
            count = 0;
            actualCard.style.backgroundImage = `url('./assets/mythicCardBackground.png')`;
        })
    }

    // -----------------------------------------клик очень легкий уроыень ------------------


    if (e.target.className === 'level-game very-light') {
        lightLevel.classList.remove('bg-active')
        averageLevel.classList.remove('bg-active')
        hardLevel.classList.remove('bg-active')
        veryLightLevel.classList.add('bg-active')
        veryHardLevel.classList.remove('bg-active')
        deckContainer.style.visibility = 'hidden';

        // -------------------------------- клик на замешать колоду в очень легком уровне -------

        kneadButton.addEventListener('click', e => {
            deckContainer.style.visibility = 'visible';
            dictForActualCard = veryEasyDifficulty (ancientsDat)
            count = 0;
            actualCard.style.backgroundImage = `url('./assets/mythicCardBackground.png')`;
        })
    }

    // -----------------------------------------клик очень тяжелый уроыень ------------------


    if (e.target.className === 'level-game very-higth') {
        lightLevel.classList.remove('bg-active')
        averageLevel.classList.remove('bg-active')
        hardLevel.classList.remove('bg-active')
        veryLightLevel.classList.remove('bg-active')
        veryHardLevel.classList.add('bg-active')
        deckContainer.style.visibility = 'hidden';

        // -------------------------------- клик на замешать колоду в очень тяжелом уровне -------

        kneadButton.addEventListener('click', e => {
            deckContainer.style.visibility = 'visible';
            dictForActualCard = veryHardDifficulty (ancientsDat)
            count = 0;
            actualCard.style.backgroundImage = `url('./assets/mythicCardBackground.png')`;
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


//---------------------------------- shuffle function -------------------------


function shuffle (cards) {
    const shuffleArr = cards.sort(() => Math.random() - 0.5);
    console.log(' shuffleArr', shuffleArr)
    return shuffleArr
}


//---------------------------------- Функция, возвращающая словарь 'стейдж: кол-во карт цвета'  -------------------------

function cardsColorAncient (ancient, color) {
    const dict = {}
    dict['firstStage'] = ancient.firstStage[color]
    dict['secondStage'] = ancient.secondStage[color]
    dict['thirdStage'] = ancient.thirdStage[color]
    return dict
}

//-------------------------- CHOOSE CARDS easy normal hard level -----------------

function dictionaryEasyNormalHard (arr, dict) {
    const shuffledArr = shuffle(arr);
    const sum = dict.firstStage + dict.secondStage + dict.thirdStage;
    const sliceArr = shuffledArr.slice(0, sum)
    const dictionary = {}
    dictionary['firstStage'] = sliceArr.slice(0, dict.firstStage)
    dictionary['secondStage'] = sliceArr.slice(dict.firstStage, dict.firstStage + dict.secondStage)
    dictionary['thirdStage'] = sliceArr.slice(dict.firstStage + dict.secondStage)
    return dictionary
}


//---------------------------- deck of ancient -----------------------------------

function dictColor() {
    const dictGreen = cardsColorAncient (ancientsDat, 'green')
    const dictBrown = cardsColorAncient (ancientsDat, 'brown')
    const dictBlue = cardsColorAncient (ancientsDat, 'blue');
    return [dictGreen, dictBrown, dictBlue]
}

//---------------------- sort colors by stages (Easy Normal Hard level)-------------------------------------

function sortColorsByStages (arrGreen, arrBrown, arrBlue, dictColors) {
    const chooseGreen = dictionaryEasyNormalHard (arrGreen, dictColors[0]);
    const chooseBrown = dictionaryEasyNormalHard (arrBrown, dictColors[1]);
    const chooseBlue = dictionaryEasyNormalHard (arrBlue, dictColors[2]);
   return shuffleFunc (chooseGreen, chooseBrown, chooseBlue)
}

// -------------------------------shuffle -------------------------------------------------
function shuffleFunc (chooseGreen, chooseBrown, chooseBlue) {
    const firstStage = [...chooseGreen.firstStage, ...chooseBrown.firstStage, ...chooseBlue.firstStage];
    const secondStage = [...chooseGreen.secondStage, ...chooseBrown.secondStage, ...chooseBlue.secondStage];
    const thirdStage = [...chooseGreen.thirdStage, ...chooseBrown.thirdStage, ...chooseBlue.thirdStage]

    const shuffleFirstStage = shuffle (firstStage);
    const shuffleSecondStage = shuffle (secondStage);
    const shuffleThirdStage = shuffle (thirdStage);

    console.log('deck', [...shuffleFirstStage, ...shuffleSecondStage, ...shuffleThirdStage ])
    return [...shuffleFirstStage, ...shuffleSecondStage, ...shuffleThirdStage ]
}


//---------------------------------- EASY DIFFICULTY -------------------------

function easyDifficulty () {
    const dictColors = dictColor()
    const arrGreen = [...sortByLevel (cardsDataGreen, 'easy'), ...sortByLevel (cardsDataGreen, 'normal')]
    const arrBrown = [...sortByLevel (cardsDataBrown, 'easy'), ...sortByLevel (cardsDataBrown, 'normal')]
    const arrBlue = [...sortByLevel (cardsData, 'easy'), ...sortByLevel (cardsData, 'normal')]
    return sortColorsByStages (arrGreen, arrBrown, arrBlue, dictColors)
}


//---------------------------------- HARD DIFFICULTY -------------------------

function hardDifficulty () {
    const dictColors = dictColor()
    const arrGreen = [...sortByLevel (cardsDataGreen, 'hard'), ...sortByLevel (cardsDataGreen, 'normal')]
    const arrBrown = [...sortByLevel (cardsDataBrown, 'hard'), ...sortByLevel (cardsDataBrown, 'normal')]
    const arrBlue = [...sortByLevel (cardsData, 'hard'), ...sortByLevel (cardsData, 'normal')]
    return sortColorsByStages (arrGreen, arrBrown, arrBlue, dictColors)
}


//---------------------------------- NORMAL DIFFICULTY -------------------------

function normalDifficulty () {
    const dictColors = dictColor()
    const arrGreen = [...sortByLevel (cardsDataGreen, 'hard'), ...sortByLevel (cardsDataGreen, 'normal'), ...sortByLevel (cardsDataGreen, 'easy')]
    const arrBrown = [...sortByLevel (cardsDataBrown, 'hard'), ...sortByLevel (cardsDataBrown, 'normal'), ...sortByLevel (cardsDataBrown, 'easy')]
    const arrBlue = [...sortByLevel (cardsData, 'hard'), ...sortByLevel (cardsData, 'normal'), ...sortByLevel (cardsData, 'easy')]
    return sortColorsByStages (arrGreen, arrBrown, arrBlue, dictColors)
}

//---------------------------------- VERY EASY DIFFICULTY -------------------------

function veryEasyDifficulty () {
    const dictColors = dictColor()
    const chooseGreen = addCardsForVeryEasy (cardsDataGreen, dictColors[0]);
    const chooseBrown = addCardsForVeryEasy (cardsDataBrown, dictColors[1]);
    const chooseBlue = addCardsForVeryEasy (cardsData, dictColors[2]);

    return shuffleFunc (chooseGreen, chooseBrown, chooseBlue)
}

//---------------------------------- VERY HARD DIFFICULTY -------------------------

function veryHardDifficulty () {
    const dictColors = dictColor()
    const chooseGreen = addCardsForVeryHard (cardsDataGreen, dictColors[0]);
    const chooseBrown = addCardsForVeryHard (cardsDataBrown, dictColors[1]);
    const chooseBlue = addCardsForVeryHard (cardsData, dictColors[2]);

    return shuffleFunc (chooseGreen, chooseBrown, chooseBlue)
}

//---------------------------------- add normal card for very easy and very hard levels-------------------------

function addNormalCards (cards) {
    const arr = sortByLevel (cards, 'normal');
    const shuffledArr = shuffle(arr);
    return shuffledArr
}


//---------------------------------- dictionary for Very Easy and Very Hard -------------------------

function dictionaryForVeryLevel(arr, dict, cards){

    const addCards = addNormalCards (cards)
    const sum = dict.firstStage + dict.secondStage + dict.thirdStage;  // сумма всех карт этого цвета из всех стейджов

    if (arr.length < sum) {
        let i = 0;
        while (i = sum - arr.length)
        arr.push(addCards[i])
        i++
    }

    const shuffledArr = shuffle(arr);
    const sliceArr = shuffledArr.slice(0, sum)
    const dictionary = {}
    dictionary['firstStage'] = sliceArr.slice(0, dict.firstStage)
    dictionary['secondStage'] = sliceArr.slice(dict.firstStage, dict.firstStage + dict.secondStage)
    dictionary['thirdStage'] = sliceArr.slice(dict.firstStage + dict.secondStage)
    
    return dictionary

}

//---------------------------------- add cards 'easy' for very easy lvel-------------------------

function addCardsForVeryEasy (cards, dict) {

    const arr = sortByLevel (cards, 'easy');
    return dictionaryForVeryLevel(arr, dict, cards)
}

//---------------------------------- add cards 'hard' for very hard-------------------------

function addCardsForVeryHard (cards, dict) {
    const arr = sortByLevel (cards, 'hard');
    return dictionaryForVeryLevel(arr, dict, cards)
}






