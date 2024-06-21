import { useNavigate } from 'react-router-dom';

interface ThumbnailProps {
    title: string;
    thumbnailPic: string;
    chanel: string;
    chanelLogo: string;
    videoLink: string;
    expanded?:boolean
    setExpanded?: (expanded: true) => void;
}

export const Thumbnail: React.FC<ThumbnailProps> = ({ title, thumbnailPic, chanel, chanelLogo, videoLink, expanded, setExpanded }) => {
    const navigate = useNavigate();
    const handleSetExpanded = () => {
        if (setExpanded) {expanded? setExpanded(false):setExpanded(true)}
    };

    return (
        <div className="w-full h-72 flex flex-col gap-2 text-white p-2 rounded-2xl transition-all hover:bg-neutral-800 hover:cursor-pointer">
        </div>
    );
};
