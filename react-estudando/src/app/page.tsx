import { Card } from "@/components/Card"
import { GeoForm } from "@/components/GeoForm"
import { Person } from "@/components/Person"
import { url } from "inspector"

const Page = () => {
  return(
    <div>
      <Card>
        <>
          <h3 className="text-3xl font-bold italic">Frase de Efeito</h3>
          <p className="text-right text-sm">- Autor desconhecido</p>
          <Person
            name="Palmeiras"
            roles={["Grande", "Gigante"]}
          />
        </>
      </Card>
    </div>
  )
}

export default Page

//npm run dev