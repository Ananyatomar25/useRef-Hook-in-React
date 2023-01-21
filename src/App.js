import { useState, useRef } from "react";

function App() {
  const [randomInput, setRandomInput] = useState("");
  const [seconds, setSeconds] = useState(0);

  const renders = useRef(0);
  const inputRef = useRef();
  const timerId = useRef();

  const handleChange = (e) => {
    setRandomInput(e.target.value);
    renders.current++;
  };

  const focusOnInput = () => {
    inputRef.current.focus();
  };

  const handleColor = () => {
    inputRef.current.style.color = "red";
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
        <button data-cy="colorButton" onClick={handleColor}>Change Color</button>
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
