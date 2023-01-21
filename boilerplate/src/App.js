import { useState, useRef } from "react";

function App() {
  const [randomInput, setRandomInput] = useState("");

  //TODO: Set the default initial value of timer to '0'
  const [seconds, setSeconds] = useState(null);

  //TODO: Set the default initial value of render variable to '0'
  const renders = useRef();
  const inputRef = useRef();
  const timerId = useRef();

  const handleChange = (e) => {
    setRandomInput(e.target.value);
    renders.current++;
  };

  const focusOnInput = () => {
    //TODO: get hold of the input text box using useRef hook to focus on it when focus button is clicked
  };

  const handleColor = () => {
    //TODO: get hold of the input text box using useRef hook to change color of input text to "RED" when Change Color button is clicked
  };

  const startTimer = () => {
    timerId.current = setInterval(() => {
      renders.current++;
      setSeconds((prev) => prev + 1);
    }, 1000);
    inputRef.current.focus();
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
    inputRef.current.focus();
  };

  const resetTimer = () => {
    stopTimer();
    if (seconds) {
      renders.current++;
      setSeconds(0);
    }
    inputRef.current.focus();
  };

  return (
    <main className="App">
      <input
        ref={inputRef}
        type="text"
        data-cy="input"
        value={randomInput}
        placeholder="Random Input"
        onChange={handleChange}
      />
      <p data-cy="render">Renders: {renders.current}</p>
      <br />
      <section>
        <button data-cy="focusButton" onClick={focusOnInput}>
          Focus
        </button>
        <button data-cy="colorButton" onClick={handleColor}>
          Change Color
        </button>
      </section>

      <br />
      <section>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button data-cy="resetTime" onClick={resetTimer}>
          Reset
        </button>
      </section>
      <br />
      <br />
      <p data-cy="timer">Seconds: {seconds}</p>
      <br />
      <br />
    </main>
  );
}

export default App;
