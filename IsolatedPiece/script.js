

/*

Improvements to be made
    1. " " at the begining of a line miss aligns everything
    2. "[enter]" without any text miss aligns everything

    3. perhaps for words that aren't even in letter count and more than one syllable
    I can do a diffrent algorhythm for determining the length of each color bar.

    4. add a toggle button to see only words rhyming 2 or more times in length.

    5. add a dark theme/mode.

    6. add a color map setting for any color sceme.
        1. update the color map to match pronouciation
        2. similar sounds are closer

*/


const constArr = ["p","b","t","d","ʧ","dʒ","k","ɡ","f","v","θ","ð","s","s","z","ʃ","ʒ","m","n","ŋ","h","l","r","w","j"];
const symbolArr = ["eɪl","aɪl","ɔɪl","oʊl","eɪ","aɪ","ɔɪ","oʊ","aʊ","ju","ɑr","ɔr","ər","ɛr","ir","ɪr","ɜr","ʊr","ɪŋ","ɔŋ","æŋ","ʌŋ","ɑŋ","ɛŋ","æl","ɑl","ʌl","ɛl","il","ɪl","ʊl","æ","ɑ","ɔ","ʌ","ə","ɛ","i","ɪ","u","ʊ","ɝ"];

/*
"#FFB6C1", // Light Pink
"#FF69B4", // Hot Pink
"#FF1493", // Deep Pink
"#DB7093", // Pale Violet Red
"#FF6347", // Tomato
"#FF4500", // Orange Red
"#FF8C00", // Dark Orange
"#FFA500", // Orange
"#FFD700", // Gold
"#FFFF00", // Yellow
"#ADFF2F", // Green Yellow
"#7FFF00", // Chartreuse
"#7CFC00", // Lawn Green
"#00FF00", // Lime
"#32CD32", // Lime Green
"#00FA9A", // Medium Spring Green
"#00FF7F", // Spring Green
"#3CB371", // Medium Sea Green
"#2E8B57", // Sea Green
"#20B2AA", // Light Sea Green
"#48D1CC", // Medium Turquoise
"#40E0D0", // Turquoise
"#00CED1", // Dark Turquoise
"#00BFFF", // Deep Sky Blue
"#1E90FF", // Dodger Blue
"#6495ED", // Cornflower Blue
"#4682B4", // Steel Blue
"#4169E1", // Royal Blue
"#0000FF", // Blue
"#0000CD", // Medium Blue
"#00008B", // Dark Blue
"#8A2BE2", // Blue Violet
"#9400D3", // Dark Violet
"#9932CC", // Dark Orchid
"#BA55D3", // Medium Orchid
"#DA70D6", // Orchid
"#EE82EE", // Violet
"#DDA0DD", // Plum
"#FF00FF", // Magenta
"#FF1493", // Deep Pink
"#FF69B4", // Hot Pink
"#FFB6C1"  // Light Pink
*/

const colorMap1 = {
    "æ":"#FFA07A", // Light Salmon
    "ɑ":"#20B2AA", // Light Sea Green
    "ɔ":"#778899", // Light Slate Gray
    "ʌ":"#B0C4DE", // Light Steel Blue
    "ə":"#FF6347", // Tomato
    "ɛ":"#40E0D0", // Turquoise
    "i":"#EE82EE", // Violet // free
    "ɪ":"#0091ff", // Wheat
    "u":"#D2B48C", // Tan
    "ʊ":"#D8BFD8", // Thistle
    "ɝ":"#FF4500",  // Orange Red
    "eɪ":"#89CFF0", // Light Peach
    "aɪ":"#ff0095", // // lie
    "ɔɪ":"#87CEEB", // Sky Blue
    "oʊ":"#ffc369", // Pastel Yellow
    "aʊ":"#F08080", // Light Coral
    "ju":"#FF00FF", // Baby Blue


    "eɪl":"#E6E6FA", // Soft Lavender
    "aɪl":"#ADD8E6", // Pale Blue
    "ɔɪl":"#98FF98", // Mint Green // oil
    "oʊl":"#FFC0CB", // Blush Pink
    "ɑr":"#FFB6C1", // Light Pink
    "ɔr":"#FFD700", // Gold // door
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
    "ɪl":"#000000", // Dark Orchid
    "ʊl":"#8B0000", // Dark Red
};

//colorMap1 = generateColorMap(symbolArr);

function generateColorMap(symbolArr) {
    function generateRandomColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    }

    const colorMap = {};
    symbolArr.forEach(symbol => {
        colorMap[symbol] = generateRandomColor();
    });
    return colorMap;
}


let dictionary = [];
fetch('../Rhymaholic/public/ipa-dictionary.json').then(response => response.json()).then(data => {dictionary = data; }).catch(error => {console.error('Error loading IPA dictionary:', error);});

let inputArea = document.getElementById("input");
let outputArea = document.getElementById("output");
let outputArea2 = document.getElementById("output2");

inputArea.innerText = "jail style oil goal day lie coin bone loud view car door hair fear\nhere ding song hang rung strength cal dull erl eel pill school cab \non off the word free lit who ";

inputArea.addEventListener("input", function() {

   // inputArea.innerHTML = getWordSentence(inputArea.innerText);

    outputArea.innerHTML = getWordSentence(input.innerText, false);
    outputArea2.innerHTML = getWordSentence(input.innerText, true);

});

/*

HTML
<div contenteditable="true" id="input"></div>

JS
inputArea.addEventListener("input", function() {
    inputArea.innerHTML = inputArea.innerText;
});

*/



/**
 * [ bg color ] : let highlightedVowel = `<span style="background-color: ${color};">${IPAvowel}</span>`;        
 * [ txt color ] : let highlightedVowel = `<span style="color: ${color};">${IPAvowel}</span>`;
 * [ underline ] : let highlightedVowel = `<span style="text-decoration: underline; text-decoration-color: ${color};">${IPAvowel}</span>`;
 * [ border ] : let highlightedVowel = `<span style="border: 1px solid ${color}; padding: 1px;">${IPAvowel}</span>`;
 * [ glow/shadow ] : let highlightedVowel = `<span style="text-shadow: 0 0 5px ${color};">${IPAvowel}</span>`;
 * [ oval ] : let highlightedVowel = `<span style="border-radius: 50%; background-color: ${color}; padding: 3px;">${IPAvowel}</span>`;
 * [ top right mini ] : let highlightedVowel = `<sup style="color: ${color};">${IPAvowel}</sup>`;
 * [ flashing pulse ] : let highlightedVowel = `<span style="animation: pulse 1s infinite; color: ${color};">${IPAvowel}</span>`;
*/

const highlightedText = (IPA, originalWord, colorMap, IsIPA) => {
  
    const [IPAvowels] = getWordContent(IPA);

    if (!IsIPA){
        const WordPieces = splitStringByPieces(originalWord, IPAvowels.length);
        console.log(WordPieces);

        const finalStr = WordPieces.map((piece, index) => {
            const color = colorMap[IPAvowels[index]];
            // return `<span style="text-decoration: underline; text-decoration-color: ${color};">${piece}</span>`;

return `<span style="background-image: linear-gradient(to bottom, transparent calc(100% - 3px), ${color} calc(100% - 3px), ${color} 100%); background-size: 100% 3px; background-repeat: no-repeat; background-position: 0 100%;">${piece}</span>`;
        }).join('');

        return finalStr;
    } else {

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
    }
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

const processSegment = (segment, IsIPA) => {
    const IsAlphabetical = /[a-zA-Z]+/;
    const IsSymbol = /\W|\d+/;
    
    if (IsAlphabetical.test(segment)) { 
        let IPAWord = getIPA(segment); 
        if (IPAWord.includes('color: red')){return IPAWord;}
        return highlightedText(IPAWord, segment, colorMap1, IsIPA);
    } 

    else if (IsSymbol.test(segment)) { return `<span style="color: lightblue;">${segment}</span>`; } 
    else { return segment; }
};

const processLine = (line, IsIPA) => {
    return line.split(/([^\w']+|\s+)/).map(segment => processSegment(segment, IsIPA)).join('');
};

const getWordSentence = (sentence, IsIPA) => {
    return sentence
        .split(/\n/)               // Split sentence into lines
        .map(line => line.trim())   // Trim whitespace from each line
        .filter(line => line.length > 0) // Remove empty lines
        .map(line => processLine(line, IsIPA)) // Process each line
        .join('<br>');              // Join lines with HTML line breaks
};

const getIPA = (word) => {
    const cleanedWord = word.replace(/'/g, '');
    const ipa = dictionary[cleanedWord.toUpperCase()];
    if (ipa) { return ipa; } 
    else { return `<span style="color: red;">${word}</span>`; }
};

