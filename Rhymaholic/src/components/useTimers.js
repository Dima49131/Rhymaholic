import { useState, useEffect } from "react";


let wordMap = null;

export async function loadWordMap() {
    if (wordMap) {
        return wordMap;
    }

    const response = await fetch("/data/wordMap.json");

    if (!response.ok) {
        throw new Error(`Failed to load wordMap: ${response.status}`);
    }

    wordMap = await response.json();

    return wordMap;
}

import { getRandomWordObject } from "./rhymingLogic.js";


export function useTimers(timerSettings, wordCount, selectedSyllables) {
  const [times, setTimes] = useState(() => {
    const startingTimes = {};

    for (const timer of timerSettings) {
      startingTimes[timer.id] = timer.duration;
    }

    return startingTimes;
  });

  const [isRunning, setIsRunning] = useState(false);
  const [words, setWords] = useState([]);


  // Update displayed times when settings change
  // Only happens while paused/stopped
  useEffect(() => {
    if (isRunning) {
      return;
    }

    const newTimes = {};

    for (const timer of timerSettings) {
      newTimes[timer.id] = timer.duration;
    }

    setTimes(newTimes);
  }, [timerSettings]);

  // Countdown
  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const interval = setInterval(() => {
      setTimes((currentTimes) => {
        const newTimes = { ...currentTimes };

        for (const timer of timerSettings) {

            if (newTimes[timer.id] > 0) {
                newTimes[timer.id]--;
            }

         if (
            newTimes[timer.id] === 0 &&
            timer.resetWhen &&
            newTimes[timer.resetWhen] > 0
            ) {
            newTimes[timer.id] = timer.duration;
            if (timer.id == "timerTwo") {
                generateWords(wordCount, selectedSyllables).then(setWords);
            }
            }
        }

        return newTimes;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, timerSettings]);

async function start() {
    const newWords = await generateWords(wordCount, selectedSyllables)
    setWords(newWords);
    setIsRunning(true);
}

  function pause() {
    setIsRunning(false);
  }

  function reset() {
    setIsRunning(false);

    const newTimes = {};

    for (const timer of timerSettings) {
      newTimes[timer.id] = timer.duration;
    }

    setTimes(newTimes);
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  }


async function generateWords(amount, selectedSyllables) {
    const wordMap = await loadWordMap();

    let wordArr = [];
    for (let i = 0; i < amount; i++) {
        let thisWordData = getRandomWordObject(wordMap, selectedSyllables, 500000);        
        if (!thisWordData) { throw new Error("No matching words found"); }
        let thisWord = thisWordData[0];
        wordArr.push(thisWord);
    }    
    return wordArr;
}

  return {
    times,
    words,
    isRunning,
    start,
    pause,
    reset,
    formatTime
  };
}