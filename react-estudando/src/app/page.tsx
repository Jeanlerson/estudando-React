import { Card } from "@/components/Card"
import { GeoForm } from "@/components/GeoForm"
import { Person } from "@/components/Person"
import { url } from "inspector"
import { peopleList } from "@/data/peopleList"

const Page = () => {

  return(
    <div className="text-3xl">
      {peopleList.length > 0 &&
        <ul>
        {peopleList.map(person => 
          <li key={person.id}>{person.name} - {person.profession}</li>
        )}
      </ul>
      }
    </div>
  )

}

export default Page

//npm run dev
//shift + tab -voltar linha