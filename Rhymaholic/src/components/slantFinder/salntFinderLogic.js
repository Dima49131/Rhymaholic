//import Dictionary from '../../data/phonetic-Dictionary.json';
//let dictionaryArray = Object.entries(Dictionary);


//let thisWordMap = getUniqueWords("door");
//console.log((thisWordMap));

export function orderByCommonConsonants(wordMap, useBroadMatch = false) {
    const constInCommon = [ [""], ["p"], ["b"], ["t"], ["d"], ["k"], ["g"], ["m"], ["n"], ["ŋ"], ["ʃ"], ["ʧ"], ["ʒ"], ["θ"], ["f"], ["v"], ["s"], ["z"]];

    const orderedWords = {};
    for (const consonantGroup of constInCommon) {
        for (const consonant of consonantGroup) {
            if (useBroadMatch) {
                for (const [wordMapping, wordData] of wordMap) {
                    if (wordMapping.includes(consonant)) { orderedWords[wordMapping] = wordData; }
                }
            } else { if (wordMap.has(consonant)) { orderedWords[consonant] = wordMap.get(consonant); }}
        }
    }
    return orderedWords;
}
 
export function getUniqueWords(word){
    const bestWords = new Map();

    for (let i = 0; i < dictionaryArray.length; i++) { //dictionaryArray.length
        let dictionaryWord = dictionaryArray[i][0];
        let thisFreq = dictionaryArray[i][1][3];
        let theseVowels = dictionaryArray[i][1][0];
        let wordMapping = dictionaryArray[i][1][2].split(theseVowels[0]).slice(1).join("");
        
        const currentBest = bestWords.get(wordMapping);

         if (compareWords(word, dictionaryWord)  && thisFreq > 0){
            if (!currentBest || thisFreq > currentBest.frequency) {
                bestWords.set(wordMapping, { word: dictionaryArray[i], frequency: thisFreq});
            }
        }
    }    
    return bestWords;
}

function compareWords(word1, word2) {
    try {
        let word1Data = getPhonetics(word1);
        let word2Data = getPhonetics(word2);
        if (word1Data == false || word2Data == false){ return false; }
        let matchingSyllable = word1Data.syllables[0] == word2Data.syllables[0] && word1Data.syllables.length == 1 && word2Data.syllables.length == 1;        
        return matchingSyllable;
    } catch (e){
        console.log("compareWords failed:", e);
        return false;
    }
};

function getPhonetics(word){
    try { 
        if (typeof word != "string" && word != ""){ return false };
        let wordData = Dictionary[word.toUpperCase()]; 
        if (wordData == undefined) { return false };
        return { data: wordData, syllables: wordData[0],  letters: wordData[1], word: wordData[2], howCommon:wordData[3] };
    } 
    catch (e){ 
        console.log(`Error occured while retrieving phonetics of word: `, e);
        return false;
     }
}

