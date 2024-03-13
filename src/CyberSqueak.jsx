import React, { useState } from 'react';
import cyberImg from "./assets/cyber-squeak.png"
import Message from './components/Message/Message';

const phrases = [
  "Всё плохо, переделывай",
  "Супер, молодец!",
  "Не огорчайся, у тебя всё получится!",
  "Попробуй ещё раз"
];

const messages = [
  "Привет! Я мышь-предсказательница.",
  "Покажи мне свой код!"
]

const CyberSqueak = () => {
  const [randomPhrase, setRandomPhrase] = useState("");

  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setRandomPhrase(phrases[randomIndex]);
  };

  return (
    <div>
      <div className='message-list'>
        {messages.map((item, i)=>{
          return (<Message text={item} key={i}/>)
        })}
        <button onClick={getRandomPhrase}>Проверь мой код</button>
      </div>
      <div>
        <img
          src={cyberImg}
          alt="CyberSqueak"
          onClick={getRandomPhrase}
          style={{ cursor: 'pointer' }}
        />
      </div>
      {randomPhrase && <p>{randomPhrase}</p>}
    </div>
  );
};

export default CyberSqueak;