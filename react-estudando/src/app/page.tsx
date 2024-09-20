import { NotaAle } from "@/components/Nota"
import { StudentTable } from "@/components/StudentTable";
import { students } from "@/data/students";

const Page = () => {

  return (
   <div className="w-screen h-screen flex flex-col justify-center
   items-center text-white bg-gradient-to-r from-sky-500 to-indigo-500">
      <StudentTable
        students={students}
      />  
   </div>
  )
  
};

export default Page;

//npm run dev
//shift + tab -voltar linha