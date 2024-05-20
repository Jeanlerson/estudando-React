import Circle, { Square, Page } from "@/components/Geo"


const Log = () => {
  return(
    <div>
      <Page/><br/>

      <ul>
        <li>1 Item</li>
        <li>2 Item</li>
        <li>3 Item</li>
        <li>4 Item</li>
        <li>5 Item</li>
      </ul>
      <br/>

      <Square/>
      <Circle/>
    </div>
  )
}

export default Log

//npm run dev