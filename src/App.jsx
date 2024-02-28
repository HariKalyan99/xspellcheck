import { useEffect, useState } from "react";
import "./App.css";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

function App() {
  const [suggestedWord, setSuggestedWord] = useState("");
  const [inputText, setInputText] = useState("");



  useEffect(() => {
    const words = inputText.split(" ");
    const findWords = words.map((ele) => {
      const foundCorrectedWord = customDictionary[ele.toLocaleLowerCase()];
      return foundCorrectedWord || ele;
    });


    const firstCorrection = findWords.find((word, idx) => word !== words[idx]);
    setSuggestedWord(firstCorrection || "");
  }, [inputText])

  const handleChange = (e) => {
    setInputText(e.target.value);
  };



  return (
    <div>
      <div>
        <h1>Spell Check and Auto-Correction</h1>
        <textarea
          value={inputText}
          onChange={handleChange}
          placeholder="Enter text..."
          rows={5}
          cols={40}
        />
        {suggestedWord && (
          <p>
            Did you mean: <strong>{suggestedWord}</strong>?
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
