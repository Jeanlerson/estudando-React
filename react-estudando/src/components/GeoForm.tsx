import { Circle } from "./Circle"
import { Square } from "./Square"

export const GeoForm = () => {
  return(
    <div>
      <h1 className="text-2xl font-bold">
        Formas Geométricas 2.0
      </h1>
      <div className="flex gap-2 border-2 p-3">
        <Square/>
        <Circle/>
      </div>
    </div>
  )
}