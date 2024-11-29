import { useState } from "react";
import "./App.css";

function App() {
  const [shape, setShape] = useState("");
  const [result, setResult] = useState("");
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [resultOfPass, setResultOfPass] = useState("");
  const [selectedFruits, setSelectedFruits] = useState([]);
  const [color, setColor] = useState("");
  const [email, setEmail] = useState("");
  const [emailResult, setEmailResult] = useState("");
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");

  const handleSwapValues = () => {
    const temp = inputOne;
    setInputOne(inputTwo);
    setInputTwo(temp);
  };

  const handleEmailCheck = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setEmailResult("Email to'g'ri");
    }
  };

  const handleShapeCheck = () => {
    switch (shape) {
      case "3":
        setResult("Uchburchak");
        break;
      case "4":
        setResult("To'rtburchak");
        break;
      case "5":
        setResult("Beshburchak");
        break;
      default:
        setResult("Bunday shakl mavjud emas");
    }
  };

  const handlePasswordConfirm = () => {
    if (firstPassword !== secondPassword) {
      setResultOfPass("Parol mos kelmadi");
    } else {
      setResultOfPass("Parol mos keldi");
    }
  };

  const handleFruitSelection = (fruit) => {
    setSelectedFruits((prev) =>
      prev.includes(fruit)
        ? prev.filter((item) => item !== fruit)
        : [...prev, fruit]
    );
  };
  function handleColorChange(el) {
    setColor(el.target.value);
  }

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="cards">
            <div className="card">
              <div className="title">
                <h2>1. Shaklni aniqlash</h2>
                <input
                  value={shape}
                  onChange={(e) => {
                    setShape(e.target.value);
                  }}
                  type="number"
                  placeholder="Son Kiriting"
                />
                <h3>Javob: {result}</h3>
              </div>
              <button className="btn" onClick={handleShapeCheck}>
                Tekshirish
              </button>
            </div>

            <div className="card">
              <div className="title">
                <h2>2. Parol tekshirish formasi</h2>
                <input
                  value={firstPassword}
                  onChange={(e) => {
                    setFirstPassword(e.target.value);
                  }}
                  type="password"
                  placeholder="Parol kiriting"
                />
                <input
                  type="password"
                  value={secondPassword}
                  placeholder="Uni takrorlang"
                  onChange={(e) => {
                    setSecondPassword(e.target.value);
                  }}
                />
                <h3>Javob: {resultOfPass}</h3>
              </div>
              <button className="btn-confirm" onClick={handlePasswordConfirm}>
                Tekshirish
              </button>
            </div>

            <div className="card">
              <div className="title">
                <h2>3. Chek qutisi bilan ro’yxat tuzish</h2>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => handleFruitSelection("Olma")}
                  />
                  Olma
                </label>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => handleFruitSelection("Banan")}
                  />
                  Banan
                </label>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => handleFruitSelection("Apelsin")}
                  />
                  Apelsin
                </label>
                <h3>
                  Javob:{" "}
                  {selectedFruits.length > 0 ? selectedFruits.join(", ") : ""}
                </h3>
              </div>
              <button className=" btn-fruits">Tekshirish</button>
            </div>
            <div className="card">
              <div className="title">
                <h2>4. Foydalanuvchining tanlovi boyicha rang ozgartirish</h2>
                <input
                  type="radio"
                  id="qizil"
                  name="color"
                  value="red"
                  className="w-1 h-1"
                  onChange={handleColorChange}
                />
                <label htmlFor="qizil">Qizil</label>
              </div>
              <div>
                <input
                  className="cursor-pointer"
                  type="radio"
                  id="yashil"
                  name="color"
                  value="green"
                  onChange={handleColorChange}
                />
                <label htmlFor="yashil">Yashil</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="kok"
                  name="color"
                  value="blue"
                  onChange={handleColorChange}
                />
                <label
                  htmlFor="kok"
                  className="text-lg font-semibold ml-2 cursor-pointer"
                >
                  Kok
                </label>
                <div
                  style={{ backgroundColor: color }}
                  className="w-full h-[100px] mt-5 text-center flex justify-center items-center"
                ></div>
              </div>
            </div>

            <div className="mt-9  card">
              <div className="title">
                <h2>5. To'g'ri email kiritish tekshiruvi</h2>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email manzil kiriting"
                  className="w-full px-4 py-2 mt-2 border rounded-md"
                />
                <h3 className="text-center mt-3">
                  Javob: <span>{emailResult}</span>
                </h3>
              </div>

              <button onClick={handleEmailCheck} className="btn-email">
                Tekshirish
              </button>
            </div>
            <div className="mt-8 card">
              <div className="title">
                <h2>6. Ikkita input qiymatini almashtirish</h2>
                <input
                  value={inputOne}
                  onChange={(e) => setInputOne(e.target.value)}
                  type="text"
                  placeholder="Birinchi qiymatni kiriting"
                />
                <input
                  value={inputTwo}
                  onChange={(e) => setInputTwo(e.target.value)}
                  type="text"
                  placeholder="Ikkinchi qiymatni kiriting"
                />
              </div>
              <button className="btn-email" onClick={handleSwapValues}>
                Tekshirish
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
