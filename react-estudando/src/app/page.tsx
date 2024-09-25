"use client"
import { FormEvent, useState } from "react";
import { CustomButton } from "@/components/CunstomButton";

const Page = () => {
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

  const handleButton1 = () => changeBackground("bg-red-500");
  const handleButton2 = () => changeBackground("bg-green-500");
  const handleButton3 = () => changeBackground("bg-yellow-500");

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Mandando")
  }
  return (
   <div className={`w-screen h-screen flex flex-col justify-center
   items-center text-white ${backgroundColor}`}> 
      <h1 className="text-5xl mb-3">Form de Login</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" />
        <input className="ml-3" type="submit" value="Enviar"/>
      </form>
   </div>
  );
  
};

export default Page;

//npm run dev
//shift + tab -voltar linha