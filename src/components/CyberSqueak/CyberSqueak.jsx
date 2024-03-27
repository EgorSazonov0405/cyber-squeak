import React, { useState, useRef, useEffect } from 'react';
import cyberImg from "../../assets/cyber-squeak.png"
import Message from '../Message/Message';


const phrases = [
  "Всё плохо, переделывай",
  "Супер, молодец!",
  "Не огорчайся, у тебя всё получится!",
  "Выкинь комп",
  "Давай я помогу!"
];

const initialMessages = [
  {msg:"Привет, я Мышь-Предсказатель!", origin: "squeak"},
  {msg:"Я помогу тебе оценить код :) Ты готов?", origin: "squeak"},
]

//основной элемент (мышь)
const CyberSqueak = () => {
  const [randomPhrase, setRandomPhrase] = useState("");
  const [messages, setMessages] = useState(initialMessages);
  const [haveAnswer, setHaveAnswer] = useState(false);
  const inputRef = useRef();

  //генерация рандомного ответа
  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setRandomPhrase(phrases[randomIndex]);
  };

  const handleSubmitResponse = () =>{
    console.log(inputRef.current);
    setMessages(prevMsg => {
      return [...prevMsg, {msg:inputRef.current.value, origin: "user"}];
    });


    setHaveAnswer(true);
  }

  useEffect(()=>{
    if(haveAnswer){
      setMessages(prevMsg => {
        return [...prevMsg, {msg:"Поняла, покажи тогда код!", origin:"squeak"}];
      });
      setHaveAnswer(false);
    }
  }, [haveAnswer]);

  //блок страницы
  return (

    <div>
      <div className='message-list'>
        {messages.map((item, i) =>{
          return(
          <Message key={i} text="aa" origin = {item.origin} msg = {item.msg }>{item.msg} &mdash; {item.msg.length}</Message>
          )
        })}

        <input type="text" ref={inputRef}/>
        <button onClick={handleSubmitResponse}>Ответить</button>

        <button onClick={getRandomPhrase}>Проверь мой код</button>
      </div>
      
      <div>
        <img
          src={cyberImg}
          alt="CyberSqueak"
        />
      </div>
      
      {randomPhrase && <p>{randomPhrase}</p>}
      {/* {randomPhrase} */}

    </div>
  );
};

export default CyberSqueak;