import { Card } from "@/components/Card"
import { GeoForm } from "@/components/GeoForm"
import { Person } from "@/components/Person"
import { url } from "inspector"
import { peopleList } from "@/data/peopleList"

const Page = () => {

  const ubers = peopleList.filter(person => person.profession === "uber")

  return(
    <div className="text-3xl">
      {ubers.length > 0 &&
        <>
          <h3>Lista de Uber:</h3>
          <ul>
            {ubers.map(person =>
              <li> {person.name} </li>
            )}
          </ul>
        </> 
      }
    </div>
  )

}

export default Page

//npm run dev
//shift + tab -voltar linha