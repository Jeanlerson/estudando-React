"use client"
import { FullName } from "@/types/FullName";
import { TodoItem } from "@/types/TodoItem";
import { FormEvent, useState } from "react";

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

  const [fullName, setFullName] = useState<FullName>({ name: '', lastName: '' })

  const handleClearButtonName = () => {
    setFullName({ ...fullName, name: '' })
  }
  const handleClearButtonLastName = () => {
    const fullNameClone = { ...fullName }
    fullNameClone.lastName = ''

    setFullName(fullNameClone)
  }

  const [list, setList] = useState<TodoItem[]>([
    {label: 'Fazer trabalho escolar', checked: false},
    {label: 'Estudar', checked: true},
    {label: 'Fazer compras', checked: false}
  ]);

  return (

    <div className="w-screen h-screen flex flex-col justify-center
    items-center text-white bg-gradient-to-r from-sky-500 to-indigo-500">
      <h1 className="text-4xl mt-5">Lista Tarefa</h1>

      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-grayt-700">
        <input 
          type="text"
          placeholder="O que deseja fazer?"
          className="felx-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
        />

        <button>Adicionar</button>
      </div>

      <ul className="w-full max-w-lg list-disc pl-5">
        {list.map(item => (
          <li>{item.label} - <button className="hover:underline text-red-700 font-bold">[ deletar ]</button></li>
        ))}
      </ul>
    </div>

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