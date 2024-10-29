type Props = {
    image: string
    closeModal: () => void
}

export const Modal = ({image, closeModal}: Props) => {
    return(
        <div onClick={closeModal}>
            <div>
                {image}
            </div>
        </div>
    )
}