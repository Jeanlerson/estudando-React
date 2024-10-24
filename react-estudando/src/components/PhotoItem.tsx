import { Photo } from "@/types/Photo";

type Props = {
    photo: Photo;
    onClick: () => void;
}

export const PhotoItem = ({photo, onClick}: Props) => {
    return (
        <div onClick={onClick} className="cursor-pointer hover:opacity-80">
            <img src={`/assets/img/${photo.url}`} alt="" className="w-full" />
        </div>
    );
}