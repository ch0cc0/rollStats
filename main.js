// Rolls a six-sided dice (d6) and returns a value between 1 and 6.
function rollD6() {
    return Math.ceil(Math.random() * 6);
}

// Function to remove the lowest number in an array. In this case will be used for our dice rolls.
function sumAfterRemovingLowest(rolls) {
    const minRoll = Math.min(...rolls);
    const indexToRemove = rolls.indexOf(minRoll);
    rolls.splice(indexToRemove, 1);
    return rolls.reduce((a, b) => a + b, 0);
}

// Rolls 3d6 and returns value between 1 and 18.
function rollStat(stat, legendary = false) {
    let result = rollD6() + rollD6() + rollD6();
    let statName = stat.charAt(0).toUpperCase() + stat.slice(1);
    // If legendary is true, roll 4d6 remove the lowest number and add 1 unless the natural rolled number is 18.
    if (legendary) {
        const rolls = Array(4).fill().map(rollD6);
        const sumOfRolls = sumAfterRemovingLowest(rolls);
        result = sumOfRolls < 18 ? sumOfRolls + 1 : sumOfRolls;
    }
    console.log(`${statName} rolled: ${result}`);
    return result;
}

// function to create a new character object with a name and the stats rolled.
function newCharacter(name = "Mysterious Stranger") {
    console.log("Rolling Stats for " + name + ": ");
    // for aesthetics
    console.log();

    return {
        name,
        _strength: rollStat("strength"),
        _dexterity: rollStat("dexterity"),
        _constitution: rollStat("constitution"),
        _intelligence: rollStat("intelligence"),
        _wisdom: rollStat("wisdom"),
        _charisma: rollStat("charisma"),
    }    
}

// function that checks the stats of a character object and prints a random message based on the deemed quality of the stats.
function checkCharacter(character) {
    const messages = {
        terrible: ["I've never seen such bad luck before.", "I'm sorry, this is a tragedy"],
        bad: ["Oof! Unlucky Rolls.", "It could be worse. Not really but stay positive.", "Sometimes playing a bad character can also be fun, right?"],
        average: ["Pretty good, have fun.", "Not bad, not great, just right.", "Work hard and you'll be alright."],
        good: ["Wow! Nice Stats!", "Looking good adventurer but talent isn't everything.", "With stats like those I'm sure you will achieve great things."],
        great: ["18! A truly legendary character, good luck.", "You have been blessed with incredible abilities, make sure you put them to use."]
    };

    let statsCount = {
        terrible: 0,
        bad: 0,
        average: 0,
        good: 0,
        great: 0
    };

    for (let stat in character) {
        if (typeof character[stat] === 'number') {
            if (character[stat] === 18) {
                statsCount.great++;
            } else if (character[stat] >= 14) {
                statsCount.good++;
            } else if (character[stat] >= 8 && character[stat] <= 13) {
                statsCount.average++;
            } else if (character[stat] >= 4 && character[stat] < 8) {
                statsCount.bad++;
            } else {
                statsCount.terrible++;
            }
        }
    }

    let quality;
    if (statsCount.great >= 1) {
        quality = "great";
    } else if (statsCount.good >= 2) {
        quality = "good";
    } else if (statsCount.terrible >= 1 || statsCount.bad >= 4) {
        quality = "terrible";
    } else if (statsCount.bad >= 3) {
        quality = "bad";
    } else {
        quality = "average";
    }

    const randomMessage = messages[quality][Math.floor(Math.random() * messages[quality].length)];
    console.log(randomMessage);
}

// for aesthetics
console.log();

const johnWinters = newCharacter("John Winters");

// for aesthetics
console.log();

checkCharacter(johnWinters);

// for aesthetics
console.log();