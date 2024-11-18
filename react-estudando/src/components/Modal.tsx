type Props = {
    image: string
    closeModal: () => void
}

export const Modal = ({image, closeModal}: Props) => {
    return(
        <>
            <div className="fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/90">

            </div>
            <div>x</div>
        </>
    )
}