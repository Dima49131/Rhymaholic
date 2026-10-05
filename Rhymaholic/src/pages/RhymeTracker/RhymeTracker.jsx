import React, { useState, useMemo, useEffect } from 'react';
import '/src/App.css'; 
import './RhymeTracker.css';

//import { makeRhymes } from './RhymeTrackerLogic'

import { getRandomWordObject } from '../../components/rhymingLogic';
import { getUniqueWords, orderByCommonConsonants } from '../../components/slantFinder/salntFinderLogic';
import SlantFinder from '../../components/slantFinder/slantFinder_UI';
import { useTimers } from '../../components/useTimers';


const RhymeTracker = () => {



    //makeRhymes();
    //const [dictionary, setDictionary] = useState({});
    
    //console.log(getRandomWordObject(wordMap, [1], 20000));

    const [wordCount, setWordCount] = useState(1);

    const [lastWord, setLastWord] = useState("");
    const [useBroadMatch, setUseBroadMatch] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [selectedSyllables, setSelectedSyllables] = useState([1]);


    const [timerSettings, setTimerSettings] = useState([
        { id: "timerOne", name: "Main Timer", duration: 60 },
        { id: "timerTwo", name: "wordTimer", duration: 10, resetWhen: "timerOne" }
    ]);

    const timer = useTimers(timerSettings, wordCount, selectedSyllables);

    //console.log(selectedSyllables);
    
    function toggleSyllable(syllable) {
    if (selectedSyllables.includes(syllable)) {
        setSelectedSyllables(
            selectedSyllables.filter((item) => item !== syllable)
        );
    } else {
        setSelectedSyllables([
            ...selectedSyllables,
            syllable
        ]);
    }
}

    const orderedWords = useMemo(() => {
        if (!lastWord) { return {}; }
        console.log(lastWord);
        
        const uniqueWords = getUniqueWords(lastWord);
        return orderByCommonConsonants(uniqueWords, useBroadMatch);
        
    }, [lastWord, useBroadMatch]);
    /**
    Generate random words
    be able to filter by syllable count
    and other filters
    */
    
       return (
            <>
            <div className='page_container'>         
                <aside className={`settings-panel ${settingsOpen ? "open" : ""}`}>
                    <button className="settings-button" type="button" onClick={() => setSettingsOpen(!settingsOpen)}>Close Settings</button>
                    <div className='settings_control_container'>
                        <div className='rhyme_tracker_label'>Allowed Syllables</div>
                        <div className="controls_container">
                            <button disabled={timer.isRunning} className={`rhyme_tracker_button ${selectedSyllables.includes(1) ? "selected" : ""}`} onClick={() => toggleSyllable(1)}> 1 Syllable</button>
                            <button disabled={timer.isRunning} className={`rhyme_tracker_button ${selectedSyllables.includes(2) ? "selected" : ""}`} onClick={() => toggleSyllable(2)}>2 Syllables</button>
                            <button disabled={timer.isRunning} className={`rhyme_tracker_button ${selectedSyllables.includes(3) ? "selected" : ""}`} onClick={() => toggleSyllable(3)}>3 Syllables</button>
                            <button disabled={timer.isRunning} className={`rhyme_tracker_button ${selectedSyllables.includes(4) ? "selected" : ""}`} onClick={() => toggleSyllable(4)}>4 Syllables</button>
                        </div>
                    </div>
                    <div className='settings_control_container'>
                        <div className='rhyme_tracker_label'>Number of words Per Generation</div>                
                        <input id="word-count" type="number" inputMode='numberic'  disabled={timer.isRunning} value={wordCount} min="1" max="5" placeholder="Number of words" onChange={(event) => {setWordCount(Number(event.target.value))}}/>
                    </div>
                    <div className='rhyme_tracker_label'>Timer Settings</div>
                    {timerSettings.map((setting) => (
                        <div key={setting.id}>
                        <label className='rhyme_tracker_label'>
                            {setting.name}

                            <input
                            className='timer_number_setting'
                            type="number"
                            min="1"
                            value={setting.duration}
                            disabled={timer.isRunning}
                            onChange={(event) => {
                                const newDuration = Number(event.target.value);

                                setTimerSettings((currentSettings) => {
                                return currentSettings.map((currentSetting) => {
                                    if (currentSetting.id === setting.id) {
                                    return {
                                        ...currentSetting,
                                        duration: newDuration
                                    };
                                    }

                                    return currentSetting;
                                });
                                });
                            }}
                            />
                        </label>
                        </div>
                    ))}
                </aside>
            
                <div className='rhyme_tracker_container'>               
                    <button className="settings-button" type="button" onClick={() => setSettingsOpen(!settingsOpen)}>Settings</button>

                    <div className='timer_container'>
                        <div className='timer_sub_container'>
                            <div className='rhyme_tracker_label'>Timer</div>
                            <div className='timer' id='main_timer'>{timer.formatTime(timer.times.timerOne)}</div>
                        </div>
                        <div className='timer_sub_container'>
                            <div className='rhyme_tracker_label' id='word_timer_label'>Word Timer</div>
                            <div className='timer' id='word_timer'>{timer.formatTime(timer.times.timerTwo)}</div>                    
                        </div>
                    </div>

                    <div className="words_container">
                        {timer.words.map((word, index) => (
                            <div className="generated_word" key={index}>
                            {word}
                            </div>
                        ))}
                    </div>

                    <div className='controls_container'>
                        <button className='rhyme_tracker_button' onClick={timer.start} disabled={timer.isRunning}>Start</button>
                        <button className='rhyme_tracker_button' onClick={timer.pause} disabled={!timer.isRunning}>Pause</button>
                        <button className='rhyme_tracker_button' onClick={timer.reset}>Reset</button>

                    </div>
                </div>
                

            </div>
            
           

            {/*
            <SlantFinder orderedWords={orderedWords} />
            */}


            </>
       )

};

export default RhymeTracker;
