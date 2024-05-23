import {ReactNode} from "react"

type Props = {
    children: ReactNode
}

export const Card = ({children}: Props) => {
    return (
        <div className="w-96 border-2 border-white-600 p-3 text-3xl text-center">
            {children}
        </div>
    )
}