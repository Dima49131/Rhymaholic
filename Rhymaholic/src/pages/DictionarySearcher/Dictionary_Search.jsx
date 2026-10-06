import React, { useState, useEffect } from 'react';
import '/src/App.css';
import './testPage.css';

import { findWordMatches } from './wordLookupper.js';

const TestPage = () => {
    const [inputWord, setInputWord] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (inputWord.length < 2) {
            setResults([]);
            return;
        }

        const timer = setTimeout(async () => {
            const matches = await findWordMatches(inputWord);
            setResults(matches);
        }, 200);

        return () => {
            clearTimeout(timer);
        };
    }, [inputWord]);

    function handleInputChange(event) {
        setInputWord(event.target.value);
    }

    function highlightMatch(word, searchTerm) {
    const startIndex = word.toLowerCase().indexOf(searchTerm.toLowerCase());

    if (startIndex === -1) {
        return word;
    }

    const endIndex = startIndex + searchTerm.length;

    const before = word.substring(0, startIndex);
    const match = word.substring(startIndex, endIndex);
    const after = word.substring(endIndex);

    return (
        <>
            {before}
            <span className="highlight">{match}</span>
            {after}
        </>
    );
}

    return (
        <div className="container">
            <div>

                <label htmlFor="input_word">
                    Search for a word in the Dictionary
                </label>

                <input
                    id="input_word"
                    value={inputWord}
                    onChange={handleInputChange}
                    placeholder="Enter a word or part of a word..."
                    aria-describedby="search-help"
                />
            </div>

            {inputWord.length === 1 && (
                <p className="search-help">
                    Enter at least 2 characters to search.
                </p>
            )}

            {inputWord.length >= 2 && (
                <div className="results">
                    <p className="result-description">
                        Words containing "{inputWord}"
                    </p>

                    {results.length > 0 ? (
                        <>
                            <div className="result-row result-header">
                                <div>Word</div>
                                <div>Pronunciation (IPA)</div>
                                <div>Frequency</div>
                            </div>

                            {results.map((result) => (
                                <div className="result-row" key={result[0]}>
                                <div>{highlightMatch(result[0], inputWord)}</div>                                    <div>{result[1][2]}</div>
                                    <div>{result[1][3]}</div>
                                </div>
                            ))}

                            <p className="result-count">
                                {results.length} {results.length === 1 ? 'result' : 'results'} found
                            </p>
                        </>
                    ) : (
                        <p className="no-results">
                            No words in Dictionary found containing "{inputWord}".
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

export default TestPage;