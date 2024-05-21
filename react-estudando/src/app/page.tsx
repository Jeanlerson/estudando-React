import { GeoForm } from "@/components/GeoForm"
import { Person } from "@/components/Person"

const Page = () => {
  return(
    <div>
      <ul>
        <li>1 Item</li>
        <li>2 Item</li>
        <li>3 Item</li>
        <li>4 Item</li>
        <li>5 Item</li>
      </ul>
      <br/>

      <GeoForm/>
      <Person/>
    </div>
  )
}

export default Page

//npm run dev