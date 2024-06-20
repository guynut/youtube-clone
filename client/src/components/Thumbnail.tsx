import { useNavigate } from 'react-router-dom';

interface ThumbnailProps {
    link: string;
    picture: string;
    ActressPic: string;
    title: string;
    Actress: string;
    setExpanded?: (expanded: true) => void;
}

export const Thumbnail: React.FC<ThumbnailProps> = ({ link, picture, ActressPic, title, Actress, setExpanded }) => {
    const navigate = useNavigate();

    const handleSetExpanded = () => {
        if (setExpanded) {
        setExpanded(true);
        }
    };

    return (
        <div className="w-full h-72 flex flex-col gap-2 text-white p-2 rounded-2xl transition-all hover:bg-neutral-800 hover:cursor-pointer">
        <div
            className="w-full h-56 rounded-xl bg-neutral-400 overflow-hidden"
            onClick={() => {
            handleSetExpanded();
            navigate(`/watch/${link}`);
            }}
        >
            <img src={picture} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-16 flex gap-1 relative">
            <div
            className="w-10 h-9 rounded-full bg-neutral-400 overflow-hidden transition-all hover:scale-110 Actress"
            onClick={() => {
                handleSetExpanded();
                navigate(`/actress/${Actress}`);
            }}
            >
            <img src={ActressPic} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="hide absolute top-10 -translate-x-2 bg-neutral-700 bg-opacity-70 backdrop-blur-sm px-2 py-1 rounded-lg">
            <p className="transition-opacity">{Actress}</p>
            </div>
            <p
            className="w-11/12 text-lg text-pretty truncate line-clamp-2"
            onClick={() => {
                handleSetExpanded();
                navigate(`/watch/${link}`);
            }}
            >
            {title}
            </p>
        </div>
        </div>
    );
};
