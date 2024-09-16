import { Card } from "@/components/Card"
import { GeoForm } from "@/components/GeoForm"
import { Person } from "@/components/Person"
import { url } from "inspector"
import { peopleList } from "@/data/peopleList"
import { Hours } from "@/components/Hours"
import { NotaAle } from "@/components/Nota"
import { students } from "@/data/students"
import { StudentTable } from "@/components/StudentTable"
import img from "@/img/img1.jpg"

const Page = () => {

  const ubers = peopleList.filter(person => person.profession === "uber")

  //const list = students.map(student => <li>{student.name}</li>)

  return(
    /*
    <div className="container mx-auto">
      <StudentTable students={students}/>
    </div>
    */
   <div>
    <h1 className="text-6xl ">Hello World!!</h1>
    <Hours/>
    
   </div>
  )
  
}

export default Page

//npm run dev
//shift + tab -voltar linha