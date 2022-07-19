import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [rhymeWords, setRhymeWords] = useState();
  const searchWords = (e) => {
    e.preventDefault();
    fetch("https://api.datamuse.com/words?rel_rhy=" + searchValue.current.value)
      .then((res) => res.json())
      .then((data) => {
        setRhymeWords(data);
      });
  };

  const searchValue = useRef(null);
  return (
    <div className="">
      <form
        onSubmit={(e) => searchWords(e)}
        className="bg-blue-500 p-4 rounded-md w-[32%] text-[14.5px] text-white h-fit m-auto mt-10 space-y-5"
      >
        <div className="flex flex-row space-x-5">
          <input
            ref={searchValue}
            type="text"
            className="mt-1 p-1 bg-transparent outline-none border-white border w-full"
          />
          <button
            type="submit"
            className="bg-black text-white  w-fit px-2 h-10 rounded-sm"
          >
            Search
          </button>
        </div>
      </form>
      {rhymeWords ? (
        <div>
          <h1 className="text-center mt-6">
            Words that rhyme like: {searchValue.current.value}
          </h1>
          <div className="flex flex-row space-x-3 space-y-3 mb-5 flex-wrap borde m-auto h-56  w-[70%]">
            {rhymeWords.map((word) => (
              <span className="p-3 border rounde-sm">{word.word}</span>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
