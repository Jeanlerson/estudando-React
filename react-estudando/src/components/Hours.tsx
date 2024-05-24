const getHours = new Intl.DateTimeFormat("pt-BR", {timeStyle: "short", hour12: false}).format()

export const Hours = () => {

    const hour = new Date().getHours()
    let greenting = ""

    if(hour >= 0 && hour < 12) {
        greenting = "Bom Dia! 😁"
    } else if(hour >= 12 && hour < 18) {
        greenting = "Boa Tarde! 😎"
    } else if(hour >= 18 && hour < 23) {
        greenting = "Boa Noite! 😴"
    }

    return (
        <div className="text-center">
            <h1 className="text-9xl">{getHours}</h1>
            <h2 className="text-5xl">{greenting}</h2>
        </div>
    )
}