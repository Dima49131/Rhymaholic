
const constArr = ["p","b","t","d","ʧ","dʒ","k","ɡ","f","v","θ","ð","s","s","z","ʃ","ʒ","m","n","ŋ","h","l","r","w","j"];
const symbolArr = ["eɪl","aɪl","ɔɪl","oʊl","eɪ","aɪ","ɔɪ","oʊ","aʊ","ju","ɑr","ɔr","ər","ɛr","ir","ɪr","ɜr","ʊr","ɪŋ","ɔŋ","æŋ","ʌŋ","ɑŋ","ɛŋ","æl","ɑl","ʌl","ɛl","il","ɪl","ʊl","æ","ɑ","ɔ","ʌ","ə","ɛ","i","ɪ","u","ʊ","ɝ"];

const colorMap1 = {
    "eɪl":"#E6E6FA", // Soft Lavender
    "aɪl":"#ADD8E6", // Pale Blue
    "ɔɪl":"#98FF98", // Mint Green
    "oʊl":"#FFC0CB", // Blush Pink
    "eɪ":"#FFDAB9", // Light Peach
    "aɪ":"#FFFDD0", // Cream
    "ɔɪ":"#87CEEB", // Sky Blue
    "oʊ":"#FFFACD", // Pastel Yellow
    "aʊ":"#F08080", // Light Coral
    "ju":"#89CFF0", // Baby Blue
    "ɑr":"#FFB6C1", // Light Pink
    "ɔr":"#FFD700", // Gold
    "ər":"#FF69B4", // Hot Pink
    "ɛr":"#8A2BE2", // Blue Violet
    "ir":"#7FFF00", // Chartreuse
    "ɪr":"#D2691E", // Chocolate
    "ɜr":"#FF7F50", // Coral
    "ʊr":"#6495ED", // Cornflower Blue
    "ɪŋ":"#DC143C", // Crimson
    "ɔŋ":"#00FFFF", // Cyan
    "æŋ":"#00008B", // Dark Blue
    "ʌŋ":"#008B8B", // Dark Cyan
    "ɑŋ":"#B8860B", // Dark Goldenrod
    "ɛŋ":"#A9A9A9", // Dark Gray
    "æl":"#006400", // Dark Green
    "ɑl":"#BDB76B", // Dark Khaki
    "ʌl":"#8B008B", // Dark Magenta
    "ɛl":"#556B2F", // Dark Olive Green
    "il":"#FF8C00", // Dark Orange
    "ɪl":"#9932CC", // Dark Orchid
    "ʊl":"#8B0000", // Dark Red
    "æ":"#FFA07A", // Light Salmon
    "ɑ":"#20B2AA", // Light Sea Green
    "ɔ":"#778899", // Light Slate Gray
    "ʌ":"#B0C4DE", // Light Steel Blue
    "ə":"#FF6347", // Tomato
    "ɛ":"#40E0D0", // Turquoise
    "i":"#EE82EE", // Violet
    "ɪ":"#F5DEB3", // Wheat
    "u":"#D2B48C", // Tan
    "ʊ":"#D8BFD8", // Thistle
    "ɝ":"#FF4500"  // Orange Red
};

let dictionary = [];
fetch('../Rhymaholic/public/ipa-dictionary.json').then(response => response.json()).then(data => {dictionary = data; }).catch(error => {console.error('Error loading IPA dictionary:', error);});

let inputArea = document.getElementById("input");
let outputArea = document.getElementById("output");
let outputArea2 = document.getElementById("output2");

inputArea.value = "Majesty";

inputArea.addEventListener("input", function() {
    outputArea.innerHTML = getWordSentence(input.value);
    outputArea2.innerHTML = getWordSentence(input.value);
});

  /**
         * [ bg color ] : let highlightedVowel = <span style="background-color: ${color};">${IPAvowel}</span>;        
         * [ txt color ] : let highlightedVowel = `<span style="color: ${color};">${IPAvowel}</span>`;
         * [ underline ] : let highlightedVowel = `<span style="text-decoration: underline; text-decoration-color: ${color};">${IPAvowel}</span>`;
         * [ border ] : let highlightedVowel = `<span style="border: 1px solid ${color}; padding: 1px;">${IPAvowel}</span>`;
         * [ glow/shadow ] : let highlightedVowel = `<span style="text-shadow: 0 0 5px ${color};">${IPAvowel}</span>`;
         * [ oval ] : let highlightedVowel = `<span style="border-radius: 50%; background-color: ${color}; padding: 3px;">${IPAvowel}</span>`;
         * [ top right mini ] : let highlightedVowel = `<sup style="color: ${color};">${IPAvowel}</sup>`;
         * [ flashing pulse ] : let highlightedVowel = `<span style="animation: pulse 1s infinite; color: ${color};">${IPAvowel}</span>`;
*/

const highlightedIPA = (IPA, colorMap) => {
    let WordContent = getWordContent(IPA);
    let IPAvowels = WordContent[0]; 
    let replacements = {};

    for (let i = 0; i < IPAvowels.length; i++) {
        let IPAvowel = IPAvowels[i];
        let color = colorMap[IPAvowel];
        let highlightedVowel = `<span style="text-decoration: underline; text-decoration-color: ${color};">${IPAvowel}</span>`;
        replacements[IPAvowel] = highlightedVowel;
    }

    let highlightedIPA = IPA.replace(new RegExp(Object.keys(replacements).join('|'), 'g'), (match) => {return replacements[match] || match;});
    return highlightedIPA;
};


const highlightedWord = (IPA, originalWord, colorMap) => {
    const [IPAvowels] = getWordContent(IPA);
    const WordPieces = splitStringByPieces(originalWord, IPAvowels.length);

    const finalStr = WordPieces.map((piece, index) => {
        const color = colorMap[IPAvowels[index]];
        return `<span style="text-decoration: underline; text-decoration-color: ${color};">${piece}</span>`;
    }).join('');

    return finalStr;
};

const splitStringByPieces = (str, numPieces) => {
    let pieceLength = Math.ceil(str.length / numPieces);
    let result = [];
    
    for (let i = 0; i < str.length; i += pieceLength) {
        result.push(str.slice(i, i + pieceLength));
    }   
    return result;
}

const getWordContent = (IPA) => {
    let strippedWord = IPA.replace(/[ˈˌːˑ]/g, '');
    let vowelRegex = new RegExp(symbolArr.join('|'), 'ig');
    let constRegex = new RegExp(`[${constArr.join('')}]`, 'ig');
    return [strippedWord.match(vowelRegex),strippedWord.match(constRegex),IPA];
}

const processSegment = (segment) => {
    const IsAlphabetical = /[a-zA-Z]+/;
    const IsSymbol = /\W|\d+/;
    
    if (IsAlphabetical.test(segment)) { 
        let IPAWord = getIPA(segment); 
        if (IPAWord.includes('color: red')){return IPAWord;}
        return highlightedWord(IPAWord, segment, colorMap1);
    } 

    else if (IsSymbol.test(segment)) { return `<span style="color: blue;">${segment}</span>`; } 
    else { return segment; }
};

const processLine = (line) => {
    return line.split(/([^\w']+|\s+)/).map(processSegment).join('');
};

const getWordSentence = (sentence) => {
    return sentence
        .split(/\n/)               // Split sentence into lines
        .map(line => line.trim())   // Trim whitespace from each line
        .filter(line => line.length > 0) // Remove empty lines
        .map(processLine)           // Process each line
        .join('<br>');              // Join lines with HTML line breaks
};

const getIPASentence = (sentence) => {
    return sentence
        .split(/\n/)               // Split sentence into lines
        .map(line => line.trim())   // Trim whitespace from each line
        .filter(line => line.length > 0) // Remove empty lines
        .map(processLine)           // Process each line
        .join('<br>');              // Join lines with HTML line breaks
};

const getIPA = (word) => {
    const cleanedWord = word.replace(/'/g, '');
    const ipa = dictionary[cleanedWord.toUpperCase()];
    if (ipa) { return ipa; } 
    else { return `<span style="color: red;">${word}</span>`; }
};



/**
 * 
 * 

24th Dinner with grandma & church
2:30pm 25th family



 */