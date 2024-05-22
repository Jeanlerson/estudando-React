type Props = {
    name: string
    avatar: string
    roles: string[]
}

export const Person = ({name, avatar,roles}: Props) => {

    return(
        <div className="p-3">
            <h1 style={{fontSize: "30px"}}>Time: {name}</h1>
            <img 
            src={avatar} 
            alt={name}
            />
            <ul>
                <li>{roles[0]}</li>
                <li>{roles[1]}</li>
            </ul>
        </div>
    )
}