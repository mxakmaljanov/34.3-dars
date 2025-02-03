import { useState } from "react";

function App() {
  // 1-masala
  const [numbers, setNumbers] = useState([]);

  const addNumber = () => {
    setNumbers([...numbers, Math.floor(Math.random() * 100) + 1]);
  };
  const removeLastNumber = () => {
    setNumbers(numbers.slice(0, -1));
  };
  const clearNumbers = () => {
    setNumbers([]);
  };
  // 2-masala
  const [color, setColor] = useState("#000000");
  const changeColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };
  // 3-masala
  const [text, setText] = useState("Salom");
  const changeText = (newText) => {
    setText(newText);
  };
  // 4-masala
  const [visible, setVisible] = useState(true);
  const toggleVisibility = () => {
    setVisible(!visible);
  };

  // 5-masala
  const [randomNumber, setRandomNumber] = useState(null);
  const [history, setHistory] = useState([]);
  const generateNumber = () => {
    const newNumber = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newNumber);
    setHistory([...history, newNumber]);
  };
  // 6-masala
  const [value, setValue] = useState(1);
  const [logs, setLogs] = useState([]);
  const multiply = () => {
    setValue(value * 2);
    setLogs([...logs, `Qiymat ${value} dan ${value * 2} ga ko'paydi`]);
  };
  const divide = () => {
    setValue(value / 2);
    setLogs([...logs, `Qiymat ${value} dan ${value / 2} ga bo'lindi`]);
  };

  // 7-masala
  const [clicks, setClicks] = useState({ button1: 0, button2: 0, button3: 0 });
  const incrementClick = (button) => {
    setClicks({ ...clicks, [button]: clicks[button] + 1 });
  }
  const resetClicks = () => {
    setClicks({ button1: 0, button2: 0, button3: 0 });
  };
  return (
    <div>
      /* 1-masala */
      <h3> Massivdagi raqamlarni boshqarish</h3>
      <button onClick={addNumber}>Qo'shish</button>
      <button onClick={removeLastNumber}>O‘chirish</button>
      <button onClick={clearNumbers}>Tozalash</button>
      <p>{numbers.join(", ")}</p>

      /* 2-masala */
      <h3> Rang almashtiruvchi</h3>
      <div style={{ width: "100px", height: "100px", backgroundColor: color }}></div>
      <p>Hozirgi rang: {color}</p>
      <button onClick={changeColor}>Rangni o'zgartirish</button>

      /* 3-masala */
      <h3> Matn uzunligini hisoblash</h3>
      <p>Matn: {text} (Uzunligi: {text.length})</p>
      <button onClick={() => changeText("Dunyo")}>Dunyo</button>
      <button onClick={() => changeText("React")}>React</button>

      /* 4-masala */
      <h3> Elementlarni yashirish/ko‘rsatish</h3>
      {visible && <p>React-ni o‘rganish juda qiziqarli!</p>}
      <button onClick={toggleVisibility}>
        {visible ? "Yashirish" : "Ko‘rsatish"}
      </button>

      /* 5-masala */
      <h3>Tasodifiy raqam generatori</h3>
      <button onClick={generateNumber}>Generatsiya qilish</button>
      {randomNumber !== null && <p>Hozirgi son: {randomNumber}</p>}
      <p>Avvalgi sonlar: {history.join(", ")}</p>

      /* 6-masala */
      <h3> Oddiy hisob-kitob</h3>
      <p>Qiymat: {value}</p>
      <button onClick={multiply}>2 ga ko'paytirish</button>
      <button onClick={divide}>2 ga bo'lish</button>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>

      /* 7-masala */
      <h3>Tugmalarni bosish hisoblagichi</h3>
      <button onClick={() => incrementClick("button1")}>Tugma 1 ({clicks.button1})</button>
      <button onClick={() => incrementClick("button2")}>Tugma 2 ({clicks.button2})</button>
      <button onClick={() => incrementClick("button3")}>Tugma 3 ({clicks.button3})</button>
      <button onClick={resetClicks}>Reset</button>
    </div>
  );
}

export default App;
