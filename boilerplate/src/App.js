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
    inputRef.current.focus();
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
        value={randomInput}
        data-cy="input"
        placeholder="Random Input"
        onChange={handleChange}
      />
      <p data-cy="render">Renders: {renders.current}</p>
      <br />
      <br />
      <button onClick={focusOnInput}>Focus</button>
      <br />
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
      <p>{randomInput}</p>
    </main>
  );
}

export default App;
