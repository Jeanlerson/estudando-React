type Props = {
    nota: number
}

export const NotaAle = ({nota}: Props) => {
    if(nota > 5) nota = 5
    if(nota < 0) nota = 0

    const notaInt = Math.floor(nota)

    const stars = "😁".repeat(notaInt) + "😣".repeat(5 - notaInt)

    return (
        <div className="w-96 border-2 border-white-600 p-3 text-3xl text-center">
            <div className="text-9xl">{nota.toFixed(1)}</div>
            <div className="text-5xl">
                {stars}
            </div>
        </div>
    )
}