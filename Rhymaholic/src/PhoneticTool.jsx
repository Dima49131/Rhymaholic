import React, { useState, useEffect } from 'react';
import './App.css'; 


const PhoneticTool = () => {

    const [dictionary, setDictionary] = useState({});
    const [inputSentence, setInputSentence] = useState('');
    const [ipaSentence, setIpaSentence] = useState('');
    const [isIPA, setIsIPA] = useState(true); // IPA shown first
    const [messageVisible, setMessageVisible] = useState(true);

    useEffect(() => {
        fetch('/ipa-dictionary.json')
            .then(response => response.json())
            .then(data => setDictionary(data))
            .catch(error => {
                console.error('Error loading IPA dictionary:', error);
            });
    }, []);

    const handleInputChange = (event) => {
        const sentence = event.target.value;
        setInputSentence(sentence);
        setIpaSentence(getIPASentence(sentence));
    };

    const handleButtonClick = () => {
        setIsIPA(prevState => !prevState);
    };

    const handleClear = () => {
        setInputSentence('');
        setIpaSentence('');
    };

    async function copyText() {
        try {
            const element = document.getElementById("output");
            const range = document.createRange();
            range.selectNodeContents(element);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range); 
            const success = document.execCommand("copy");
            selection.removeAllRanges();

            if (success) {
                // Get the message element
                const message = document.getElementById("message");

                // Show the message with a smooth transition
                message.classList.remove('hide');
                message.classList.add('show');

                // Hide the message after 2 seconds
                setTimeout(() => {
                    message.classList.remove('show');
                    message.classList.add('hide');
                }, 1000);
            } else {
                throw new Error("Copy command failed");
            }
        } catch (error) {
            console.error("Failed to copy text: ", error);
            alert("Failed to copy text.");
        }
    }



    const getIPASentence = (sentence) => {
        return sentence
            .split(/\n/)
            .map(line => line.trim())
            .filter(line => line.length > 0)
            .map(line =>
                line
                    .split(/([^\w']+|\s+)/)
                    .map(segment => {
                        if (segment.match(/[a-zA-Z]+/)) {
                            return getIPA(segment);
                        } else if (segment.match(/[\W0-9]+/)) {
                            return `<span style="color: blue;">${segment}</span>`;
                        } else {
                            return segment;
                        }
                    })
                    .join('')
            )
            .join('<br>');
    };

    const getIPA = (word) => {
        const cleanedWord = word.replace(/'/g, '');
        const ipa = dictionary[cleanedWord.toUpperCase()];
        if (ipa) {
            return ipa;
        } else {
            return `<span style="color: red;">${word}</span>`;
        }
    };

    return (
        <div>
            <div id="message">Copied to clipboard!</div>
            <div className="container">
                <textarea id="input" value={inputSentence} onChange={handleInputChange} placeholder="Enter in some text" autoComplete="off"/>

                <div className="button-group">
                    <button id="button1" onClick={handleButtonClick}>{isIPA ? 'Show Normal' : 'Show IPA'}</button>
                    <button id="copyButton" onClick={copyText}>Copy</button>
                    <button id="clearButton" onClick={handleClear}>Clear</button>
                </div>
                <div id="output" dangerouslySetInnerHTML={{__html: isIPA ? ipaSentence.replace(/\n/g, '<br>') : inputSentence.replace(/\n/g, '<br>')}} /> 
            </div>
        </div>
    );
};

export default PhoneticTool;
