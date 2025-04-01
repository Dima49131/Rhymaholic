import React, { useState, useRef, useEffect } from "react";
import "./RhymingToolSimple.css";

const RhymeChecker = () => {
  const [dictionary, setDictionary] = useState({});
  const [dictionaryArray, setDictionaryArray] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [rhymingWords, setRhymingWords] = useState([]);

  useEffect(() => {
    fetch("output.json")
      .then((response) => response.json())
      .then((data) => {
        setDictionary(data);
        setDictionaryArray(Object.entries(data));
      })
      .catch((error) => console.error("Error loading IPA dictionary:", error));
  }, []);

  const processWord = (word) => {
    console.log(word);
    const wordData = dictionary[word.toUpperCase()];
    if (!wordData) return [];

    const rhymingWords = dictionaryArray
      .filter(([key, value]) => {
        if (value[0].length < 2) return doesItRhyme(wordData, value, "PS");
        return doesItRhyme(wordData, value, "P");
      })
      .map(([key, value]) => {
        return [formatWord(key), value[3]]; // Return word and its frequency value
      });

    const sortedList = sortByValue(rhymingWords);
    const cleanedList = sortedList.map(item => item[0]);

    return cleanedList;
  };

  const sortByValue = (data) => {
    return data.sort((a, b) => b[1] - a[1]); // Sort by frequency (second element in the array)
  };

  const doesItRhyme = (wordContent, thisWord, filter) => {
    const lastLetterEqual = wordContent[2].slice(-1)[0] === thisWord[2].slice(-1)[0];
    const vowelsEqual = wordContent[0].toString() === thisWord[0].toString();

    if (filter === "PS") {
      return vowelsEqual && lastLetterEqual;
    }
    if (filter === "P") {
      return vowelsEqual && lastLetterEqual;
    }
    return false;
  };

  const formatWord = (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

  const cacheRef = useRef({});
const cacheSizeRef = useRef(0);
const MAX_CACHE_SIZE = 1000;

  const handleChange = (event) => {
    const inputText = event.target.value;
    setInputValue(inputText);
    const inputWords = inputText.trim().split(/\s+/);

     
  const updatedRhymes = inputWords.map((word) => {
    if (!word) return [];
    
    if (cacheRef.current[word]) {
      return cacheRef.current[word];
    }
    
    const result = processWord(word);
    
    // Enforce cache limit
    if (cacheSizeRef.current < MAX_CACHE_SIZE) {
      cacheRef.current[word] = result;
      cacheSizeRef.current++;
    }
    
    return result;
  });

    setRhymingWords(updatedRhymes);
  };

  return (
    
    <div>
        <div className="containerHere">
        <h1 id="titleHere">Rhyming Simplified</h1>
        <input type="text" id="inputHere" autoComplete="off" value={inputValue} onChange={handleChange} placeholder="Type in some words"/>
      
      <div id="outputContainer">
        {rhymingWords.map((rhymes, index) => (
          <textarea key={index} className="outputHere" value={rhymes.join("\n")} readOnly/>
        ))}
      </div>
      </div>

    </div>
  );
};

export default RhymeChecker;
