import {ReactNode} from "react"

type Props = {
    phrase?: string
    author?: string
}

export const Card = ({phrase, author}: Props) => {
    return (
        <div className="w-96 border-2 border-white-600 p-3 text-3xl text-center">
            <h3 className="text-3xl font-bold italic">{phrase ?? "Não tem frase!"}</h3>
            {author &&
                <p className="text-right text-sm">- {author}</p>
            }
        </div>
    )
}