import { NotaAle } from "@/components/Nota"
import { ProductTable } from "@/components/ProductTable";
import { StudentTable } from "@/components/StudentTable";
import { productList } from "@/data/productList";
import { students } from "@/data/students";

const Page = () => {

  return (
   <div className="w-screen h-screen flex flex-col justify-center
   items-center text-white bg-gradient-to-r from-sky-500 to-indigo-500">
      <h1 className="text-5xl font-bold">Lista de Produtos</h1>    
      <ProductTable product={productList} /> 
   </div>
  )
  
};

export default Page;

//npm run dev
//shift + tab -voltar linha