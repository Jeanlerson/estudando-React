import { Card } from "@/components/Card"
import { GeoForm } from "@/components/GeoForm"
import { Person } from "@/components/Person"
import { url } from "inspector"
import { peopleList } from "@/data/peopleList"
import { Hours } from "@/components/Hours"
import { NotaAle } from "@/components/Nota"

const Page = () => {

  const ubers = peopleList.filter(person => person.profession === "uber")

  return(
    <div className="w-screen h-screen flex flex-col justify-center items-center
    bg-gradient-to-r from-sky-500 to-indigo-500">
      <NotaAle 
      nota= {3}
      />
    </div>
  )
  
}

export default Page

//npm run dev
//shift + tab -voltar linha