import {
    loadDictionary,
    getDictionaryArray
} from '../../components/rhymingLogic.js';

export async function findWordMatches(inputWord) {
    await loadDictionary();

    const dictionaryArray = getDictionaryArray();

    const results = [];
    const searchWord = inputWord.toUpperCase();
    const maxResults = 50;

    for (let i = 0; i < dictionaryArray.length; i++) {
        const [word, data] = dictionaryArray[i];

        if (word.includes(searchWord)) {
            results.push(dictionaryArray[i]);
        }
    }

    results.sort((a, b) => {
        return b[1][3] - a[1][3];
    });

    return results.slice(0, maxResults);
}