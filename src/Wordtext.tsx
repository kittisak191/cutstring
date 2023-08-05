function WordCutter({ inputString, dictionary }) {
  const cutWords = () => {
    const result = [];
    let currentIndex = 0;

    while (currentIndex < inputString.length) {
      let found = false;

      for (const word of dictionary) {
        if (inputString.startsWith(word, currentIndex)) {
          result.push(word);
          currentIndex += word.length;
          found = true;
          break;
        }
      }

      if (!found) {
        result.push(inputString[currentIndex]);
        currentIndex += 1;
      }
    }

    return result;
  };

  const resultArray = cutWords();

  return (
    <div>
      <p>Input: {inputString}</p>
      <p>Dictionary: {dictionary.join(", ")}</p>
      <p>Output: [{resultArray.join(", ")}]</p>
    </div>
  );
}

export default WordCutter;
