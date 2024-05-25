const getHours = new Intl.DateTimeFormat("pt-BR", {timeStyle: "short", hour12: false}).format()

export const Hours = () => {

    const hour = new Date().getHours()

    return (
        <div className="text-center">
            <h1 className="text-9xl">{getHours}</h1>
            <div className="text-5xl font-bold">
                {hour >= 0 && hour < 12 && "Bom Dia 😁"}
                {hour >= 12 && hour < 18 && "Boa Tarde 😎"}
                {hour >= 18 && hour <= 23 && "Boa Noite 😴"}
            </div>
        </div>
    )
}