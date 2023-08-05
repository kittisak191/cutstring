import Wordtext from "./Wordtext";
function App() {
  const inputString = "fruit";
  const dictionary = ["apple", "fruit", "orange", "pie"];

  return (
    <div>
      <Wordtext inputString={inputString} dictionary={dictionary} />
    </div>
  );
}

export default App;
