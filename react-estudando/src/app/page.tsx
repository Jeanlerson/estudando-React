"use client"
import { useState } from "react";
import { CustomButton } from "@/components/CunstomButton";

const Page = () => {
  function handleClick() {
    alert("Funcionou!")
  }
  const avisar = (msg: string) => {
    alert(msg)
  }

  const [backgroundColor, setBackgroundColor] = useState("bg-gradient-to-r from-sky-500 to-indigo-500");
  const changeBackground = (colorClass: string) => {
    setBackgroundColor(colorClass)
  }

  const handleButton1 = () => changeBackground("bg-red-500")
  const handleButton2 = () => changeBackground("bg-green-500")
  const handleButton3 = () => changeBackground("bg-yellow-500")

  return (
   <div className={`w-screen h-screen flex flex-col justify-center
   items-center text-white ${backgroundColor}`}> 
      <div className="bg-red-700 p-5 flex flex-col">
        <button onClick={handleClick} className="p-3 bg-blue-700 rounded-md mb-3">Clique Aqui</button>
        <button onClick={() => alert("Funcionou 2.0!")} className="p-3 bg-blue-700 rounded-md">Clique Aqui 2.0</button>
        <button onClick={() => avisar('Mensagem Inserida')} className="p-3 bg-blue-700 rounded-md mt-3">Clique Aqui 3</button>
      </div>

      <CustomButton label="Clique Aqui Diferenciado 1" onClick={handleButton1}/>
      <CustomButton label="Clique Aqui Diferenciado 2" onClick={handleButton2}/>
      <CustomButton label="Clique Aqui Diferenciado 3" onClick={handleButton3}/>
   </div>
  )
  
};

export default Page;

//npm run dev
//shift + tab -voltar linha