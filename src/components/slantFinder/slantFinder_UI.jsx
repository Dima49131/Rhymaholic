
// eslint-disable-next-line react/prop-types
const SlantFinder = ({ orderedWords }) => {
    return (
        <div className="rhyme-list">
            {Object.entries(orderedWords).map(([consonant, wordData]) => (
                <div key={consonant}>
                    <strong>{consonant}</strong>
                    {": "}
                    {formatWord(wordData.word[0])}
                </div>
            ))}
        </div>
    );
};

function formatWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export default SlantFinder;