const today = () => {
    return new Intl.DateTimeFormat("pt-BR", {weekday: "long"}).format(new Date())
}

export const Person = () => {
    const name: string = "Palmeiras"
    const logo: string = "data:image/jpeg;base64,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"

    const teste = {
        neme: "Fortaleza",
        logo2: "data:image/jpeg;base64,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",
        roles: ["Maior do Nordeste", "É o Laion!!"]
    }

    return(
        <>
            <h1 style={{fontSize: "30px"}}>Time: {name}</h1>
            <h2 style={{fontSize: "20px"}}>Hoje é {today()}</h2>
            <img 
            src={logo} 
            alt={name}
            />
            <br/>

            <h1 style={{fontSize: "30px"}}>Time: {teste.neme}</h1>
            <img 
            src={teste.logo2} 
            alt={teste.neme}
            />
            <ul>
                <li>{teste.roles[0]}</li>
                <li>{teste.roles[1]}</li>
            </ul>
        </>
    )
}