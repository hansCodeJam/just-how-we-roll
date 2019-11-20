
const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

const d6Roll = document.querySelector('#d6-roll');
d6Roll.addEventListener('click', rollDiceSix);

const d6DoubleRoll1 = document.querySelector('#double-d6-roll-1')
d6DoubleRoll.addEventListener('click', rollDiceDoubleSix);
const d6DoubleRoll2 = document.querySelector('#double-d6-roll-2')
d6DoubleRoll2.addEventListener('click', rollDiceDoubleSix);

const d12Roll = document.querySelector('#d12-roll');
d12Roll.addEventListener('click', rollDice12);

const d20Roll = document.querySelector('#d20-roll');
d12Roll.addEventListener('click', rollDice20);

function rollDiceSix() {
    const dice = getRandomNumber(6);
    sixes.push(dice);
    const mean = (6/ sixes.length);
    const meanSection = document.querySelector('#d6-rolls-mean')
    meanSection.innerText = mean;
    const sortSix = sixes.sort();
    const middle = (sortSix.length / 2);
    const median = sortSix[middle];
    const medianSection = document.querySelector('#d6-rolls-median');
    medianSection.innerText = median;
    const mode = mode(sixes);
    const modeSection = document.querySelector('#d6-rolls-mode');
    modeSection.innerText = mode;
}

function rollDiceDoubleSix() {
    const dice1 = getRandomNumber(6);
    const dice2 = getRandomNumber(6);
    const dice = dice1 + dice2;
    doubleSixes.push(dice);

    const doubleSixMean = mean(doubleSixes);
    const doubleSixMedian = median(doubleSixes);
    const doubleSixesMode = mode(doubleSixes);
    const mean = document.querySelector('#double-d6-rolls-mean');
    mean.innerText = doubleSixMean;
    const median = document.querySelector("#double-d6-rolls-median");
    median.innerText = doubleSixMedian;
    const mode = document.querySelector("#double-d6-rolls-mode");
    mode.innerText = doubleSixesMode;
}

function rollDice12(){
    const dice = getRandomNumber(12);
    twelves.push(dice);

    const twelveMean = mean(twelves);
    const twelveMedian = median(twelves);
    const twelveMode = mode(twelves);
    const mean = document.querySelector("#d12-rolls-mean");
    const median = document.querySelector("#d12-rolls-median");
    const mode = document.querySelector("#d12-rolls-mode");
    mean.innerText = twelveMean;
    median.innerText = twelveMedian;
    mode.innerText = twelveMode;
}

function rollDice20(){
    const dice = getRandomNumber(20);
    twenties.push(dice);

    const twentiesMean = mean(twenties);
    const twentiesMedian = median(twenties);
    const twentiesMode = mode(twenties);
    const mean = document.querySelector("#d20-rolls-mean");
    const median = document.querySelector("#d20-rolls-median");
    const mode = document.querySelector("#d20-rolls-mode");
    mean.innerText = twentiesMean;
    median.innerText = twentiesMedian;
    mode.innerText = twentiesMode;
}


/****************
 * MATH SECTION *
 ****************/
//mean function
function getRandomNumber(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    
    return result;
}

//mean function
function mean(numbers) {
    let total = 0, i;
    for (i = 0; i < numbers.length; i += 1) {
        total += numbers[i];
    }
    return total / numbers.length;
}

//median function
function median(numbers) {
    let median = 0, numsLen = numbers.length;
    numbers.sort();
 
    if (
        numsLen % 2 === 0 
    ) {
 
        median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
    } else { 
        
        median = numbers[(numsLen - 1) / 2];
    }
 
    return median;
}

//mode function
function mode(rolls) {
   const counts = {};
   let highestCount = 0;
   let mode = 0;
   for(let i = 0; i < rolls.length; i++) {
       const currentRoll = rolls[i];
       if(!counts[currentRoll]) {
           counts[currentRoll] = 1;
       } else {
           counts[currentRoll] = counts[currentRoll] + 1;
       }
       
       if (counts[currentRoll] > highestCount) {
           highestCount = counts[currentRoll]
           mode = currentRoll;
       }
   }
   
  



   return mode;
}

/*********
 * RESET *
 *********/


