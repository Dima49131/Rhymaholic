

//import { writeFileSync } from "fs";

let Dictionary = null;
let dictionaryArray = null;
let dictionaryPromise = null;


export function getDictionaryArray() {
    return dictionaryArray;
}

export async function loadDictionary() {
    if (Dictionary) {
        return Dictionary;
    }

    if (!dictionaryPromise) {

    dictionaryPromise = loadDictionaryFile()
        .then((dictionary) => {
            Dictionary = dictionary;
            dictionaryArray = Object.entries(dictionary);
            return dictionary;
        })
        .catch((error) => {
            dictionaryPromise = null;
            throw error;
        });

    }

    return dictionaryPromise;
}

async function loadDictionaryFile() {
    if (typeof window !== "undefined") {
        return loadDictionaryBrowser();
    }

    return loadDictionaryNode();
}

async function loadDictionaryBrowser() {
    const response = await fetch("/data/phonetic-Dictionary.json");

    if (!response.ok) {
        throw new Error("Failed to load phonetic dictionary");
    }

    return response.json();
}

async function loadDictionaryNode() {
    const fs = await import("fs/promises");
    const path = await import("path");
    const { fileURLToPath } = await import("url");

    const currentFile = fileURLToPath(import.meta.url);
    const currentDirectory = path.dirname(currentFile);

    const dictionaryPath = path.join(
        currentDirectory,
        "../../public/data/phonetic-Dictionary.json"
    );

    const file = await fs.readFile(dictionaryPath, "utf8");

    return JSON.parse(file);
}

//let uniqueWords = getUniqueWords();

//console.log(getRandomWord(uniqueWords, [1, 2]));

//import wordMap from '../data/wordMap.json' with { type: "json"};
//console.log(getRandomWordObject(wordMap, [1], 20000));


//const wordMapData = JSON.parse(fs.readFileSync("../data/wordMap.json", "utf8"));
//RhymeReactClientv2/Rhymaholic/src/data/wordMap.json



/*
function generateWordMapJson(){
  const wordMap = getUniqueWords(dictionaryArray);
  const data = Object.fromEntries(wordMap);
  fs.writeFileSync(
      "wordMap.json",
      JSON.stringify(data)
  );
}
*/
export function getUniqueWords(syllableCount){

  let wordMap = new Map();

  for (let i = 0; i < dictionaryArray.length; i++) { //dictionaryArray.length
    //console.log(dictionaryArray[i][1][0]);
    if (dictionaryArray[i]){
    let thisWordVowels = dictionaryArray[i][1][0];
    let thisWordSyllables = thisWordVowels.length;
    
    let phoneticWord = dictionaryArray[i][1][2];
    let lastWordVowel = thisWordVowels[thisWordVowels.length - 1];
    let vowelPosition = phoneticWord.lastIndexOf(lastWordVowel);
    let afterVowel = phoneticWord.slice(vowelPosition + lastWordVowel.length);

    //console.log(afterVowel);
    
    //console.log(afterVowel);
    
    

    //console.log(afterVowel);
    

  let vowelMapKey = thisWordVowels.join("") + "|" + afterVowel;

    if (!wordMap.has(vowelMapKey)) {
      wordMap.set(vowelMapKey, []);
    }

      wordMap.get(vowelMapKey).push(dictionaryArray[i]);
    
  }
  }
  for (const [key, words] of wordMap) {
    words.sort((a, b) => {
        return b[1][3] - a[1][3];
    });
}
//console.dir(wordMap.get('eɪ|n'), { depth: null });
//console.dir(wordMap, { depth: null });
//console.log(wordMap);
  return wordMap;
}

export function getRandomWordObject(wordMap, syllableCounts, minFrequency) {
    const validKeys = [];

    for (const key of Object.keys(wordMap)) {
        const words = wordMap[key];
        const topWord = words[0];

        const syllableCount = topWord[1][0].length;
        const frequency = topWord[1][3];

        if (
            syllableCounts.includes(syllableCount) &&
            frequency >= minFrequency
        ) {
            validKeys.push(key);
        }
    }

    if (validKeys.length === 0) {
        return null;
    }

    const randomIndex = Math.floor(Math.random() * validKeys.length);
    const randomKey = validKeys[randomIndex];

    return wordMap[randomKey][0];
}

export function getRandomWord(wordMap, allowedSyllables) {
    const validKeys = [];

    for (const [key, words] of wordMap) {
        const topWord = words[0];
        const syllableCount = topWord[1][0].length;

        if (allowedSyllables.includes(syllableCount)) {
            validKeys.push(key);
        }
    }

    if (validKeys.length === 0) {
        return null;
    }

    const randomIndex = Math.floor(Math.random() * validKeys.length);
    const randomKey = validKeys[randomIndex];

    return wordMap.get(randomKey)[0];
}

export async function processWord(word){
    await loadDictionary();
    console.log(word);
    const wordData = Dictionary[word.toUpperCase()];
    if (!wordData) return [];

    const rhymingWords = dictionaryArray
      .filter(([key, value]) => {
        if (value[0].length < 2) return doesItRhyme(wordData, value, "PS");
        return doesItRhyme(wordData, value, "PS");
      })
      .map(([key, value]) => {
        return [formatWord(key), value[3]]; // Return word and its frequency value
      });

    const sortedList = sortByValue(rhymingWords);
    const cleanedList = sortedList.map(item => item[0]);

    return cleanedList;
  };

function sortByValue(data){
    return data.sort((a, b) => b[1] - a[1]); // Sort by frequency (second element in the array)
  };

function doesItRhyme (wordContent, thisWord, filter) {
    const lastLetterEqual = wordContent[2].slice(-1)[0] === thisWord[2].slice(-1)[0];
    const vowelsEqual = wordContent[0].toString() === thisWord[0].toString();
    const lastPartEqual = wordContent[2].slice(-2) == thisWord[2].slice(-2);
    if (filter === "PS") { return vowelsEqual && lastPartEqual; }
    if (filter === "P") { return vowelsEqual && lastLetterEqual; }
    return false;
};

function formatWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
