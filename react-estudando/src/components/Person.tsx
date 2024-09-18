type Props = {
    name: string
    avatar?: string
    roles: string[]
};

export const Person = ({
    name, 
    avatar = "https://www.plurisports.com.br/wp-content/uploads/2023/10/soccer-sociedade-esportiva-palmeiras-logo-wallpaper-preview.jpg",
    roles
}: Props) => {

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
    );
};