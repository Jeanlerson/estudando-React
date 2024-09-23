type Props = {
    label: string
    onClick: () => void
}

export const CustomButton = ({label, onClick}: Props) => {
    return (
        <button onClick={onClick} className="p-3 bg-black mt-10">{label}</button>
    )
}