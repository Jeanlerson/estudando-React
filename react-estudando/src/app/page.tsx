"use client"
import { Modal } from "@/components/Modal";
import { PhotoItem } from "@/components/PhotoItem";
import { QuestionItem } from "@/components/QuestionItem";
import { ResultsQuiz } from "@/components/ResultsQuiz";
import { VideoPlayer } from "@/components/VideoPlayer";
import { photoList } from "@/data/photoList";
import { questionsList } from "@/data/questionsList";
import { FullName } from "@/types/FullName";
import { TodoItem } from "@/types/TodoItem";
import { Square } from "@/components/Square";
import { FormEvent, useEffect, useState } from "react";
import { Item } from "@/types/Item";

const Page = () => {

  /*
  function handleClick() {
    alert("Funcionou!")
  };
  const avisar = (msg: string) => {
    alert(msg)
  };

  const [backgroundColor, setBackgroundColor] = useState("bg-gradient-to-r from-sky-500 to-indigo-500");
  const changeBackground = (colorClass: string) => {
    setBackgroundColor(colorClass)
  };

  //Função que armazena cor de fundo
  const handleButton1 = () => changeBackground("bg-red-500");
  const handleButton2 = () => changeBackground("bg-green-500");
  const handleButton3 = () => changeBackground("bg-yellow-500");

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Mandando")
  }

  const [count, setCount] = useState(0);
  const handleClickButton = () => {
    setCount(count + 3);
    setCount(c => c + 2)
  }
  const handleClickButton2 = () => {
    setCount(count + 2);
  }
  const handleClickButton3 = () => {
    setCount(count + 4);
  }
  const handleClickButton4 = () => {
    setCount(count - 1);
  }
  
  */ 

  /*

  const [showModal, setShowModal] = useState(false);
  const [imageOfModal, setImageOfModal] = useState('');

  const openModal = (id: number) => {
    const photo = photoList.find(item => item.id === id)

    if(photo) {
      setImageOfModal(photo.url);
      setShowModal(true);
    }
  }

  const closeModal = () => {
    setShowModal(false);
  }

  */

  /* --------------------PROJETO QUIZ-----------------

  const [answers, setAnswers] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const loadNextQuestion = () => {
    if(questionsList[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  }

  const handleAnswer = (answer: number) => {
    setAnswers([ ...answers, answer ]);
    loadNextQuestion();
  }

  const handleRestartButton = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setShowResult(false);
  }
    */

//  const [playing, setPlaying] = useState(false);


//  const [show, setShow] = useState(false);

  const [list, setList] = useState<Item[]>([]);

  const addNewItem = (text: string) => {
    setList([ ...list, { id: list.length, text, done: false}]);
  }

  const editItemText = (id: number, newText: string) => {
    setList(
      list.map((item) => {
        if (item.id === id) item.text = newText;
        return item;
      })
    )
  }

  const toggleItem = (id: number) => {
    setList(
      list.map((item) => {
        if (item.id === id) item.done = !item.done;
        return item;
      })
    )
  }

  const removeItem = (id: number) => {
    setList( list.filter(item => item.id !== id) );
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-blue-600">
      ...
    </div>
    /* ------------------- USE EFFECT----------------------

    <div className="">
      <button onClick={() => setShow(!show)}>Mostrar/Ocultar</button>
      {show && <Square/>}
    </div>

    <div className="w-full h-screen flex flex-col justify-center items-center bg-blue-600">
      <div className="border border-white p-3 mb-4">
        <p className="text-2xl mb-3">{playing ? 'RODANDO' : 'PAUSADO'}</p>
        <button className="px-3 py2 rounded-md bg-blue-800 text-white" onClick={() => setPlaying(!playing)}>Play/Pause</button>
      </div>

      <VideoPlayer
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        isPlaying={playing}
      />
    </div>
    */
    
    /* QUIZ--------------------------
S
    <div className="w-full h-screen flex flex-col justify-center items-center bg-blue-600">
      <h1 className="text-center text-3xl font-bold my-10"> Quiz de Futebol ⚽</h1>
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5">
          {!showResult &&
            <QuestionItem
              question={questionsList[currentQuestion]}
              count={currentQuestion + 1}
              onAnswer={handleAnswer}
            />
          }
          {showResult && <ResultsQuiz questions={questionsList} answers={answers} />}
        </div>
        <div className="p-5 text-center border-t border-gray-300">
          {!showResult && `${currentQuestion + 1} de ${questionsList.length} perguntas.`}
          {showResult && <button onClick={handleRestartButton} className="px-3 py2 rounded-md bg-blue-800 text-white">Reiniciar Quiz</button>}
        </div>
      </div>
    </div>

    */

    /*   GALERIA DE FOTOS 


    <div className="text-white bg-gradient-to-r from-sky-500 to-indigo-500 p-5">
      <h1 className="text-center text-3xl font-bold my-10">Fotos Intergalactios</h1>

      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {photoList.map(item => (
          <PhotoItem
            key={item.id}
            photo={item}
            onClick={() => openModal(item.id)}
          />
        ))}
      </section>
      {showModal &&
        <Modal image={imageOfModal} closeModal={closeModal}/>
      }

      
    </div>

    */


    /*
   <div className={`w-screen h-screen flex flex-col justify-center
   items-center text-white ${backgroundColor}`}> 
      <p className="text-5xl">{count}</p>
      <div>
        <button className="text-2xl bg-black p-3 m-3" onClick={handleClickButton}>+5</button>
        <button className="text-2xl bg-black p-3 m-3" onClick={handleClickButton2}>+2</button>
        <button className="text-2xl bg-black p-3 m-3" onClick={handleClickButton3}>+4</button>
        <button className="text-2xl bg-black p-3 m-3" onClick={handleClickButton4}>-1</button>
      </div>
   </div>
   */ 

   /*
    <div className="w-screen h-screen flex flex-col justify-center
    items-center text-white bg-gradient-to-r from-sky-500 to-indigo-500">
        
        <input 
          type="text"
          placeholder="Nome"
          className="border border-black p-3 text-2xl text-black rounded-md mb-3"
          value={fullName.name}
          onChange={e => setFullName({ ...fullName, name: e.target.value })} />

        <input 
          type="text"
          placeholder="Sobrenome"
          className="border border-black p-3 text-2xl text-black rounded-md mb-3"
          value={fullName.lastName}
          onChange={e => setFullName({ ...fullName, lastName: e.target.value })} />

        <p>Meu nome completo é:</p>
        <p>{fullName.name} {fullName.lastName}</p>

        <button className="bg-black p-3 m-3" onClick={handleClearButtonName}>Limpar Nome</button>
        <button className="bg-black p-3 m-3" onClick={handleClearButtonLastName}>Limpar Sobrenome</button>
    </div>
    */ 
  );
  
};

export default Page;

//npm run dev
//shift + tab -voltar linha