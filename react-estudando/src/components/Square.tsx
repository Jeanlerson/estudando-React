import { useEffect } from "react"

export const Square = () => {
    useEffect(() => {
        console.log("RODOU O EFFECT DO QUADRADO");

        return () => {
            console.log("RODOU O CLEANUP...")
        }
    })

    return(
        <div className="w-52 h-52 bg-orange-700 text-white text-center">...</div>
    )
}