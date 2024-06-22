import { useNavigate } from 'react-router-dom';

interface ThumbnailProps {
    title: string;
    thumbnailPic: string;
    chanel: string;
    chanelLogo: string;
    videoLink: string;
    expanded?:boolean
    setExpanded?: (expanded: boolean) => void;
}

export const Thumbnail: React.FC<ThumbnailProps> = ({ title, thumbnailPic, chanel, chanelLogo, videoLink, expanded, setExpanded }) => {
    const navigate = useNavigate();
    const handleSetExpanded = () => {
        if (setExpanded) {expanded? setExpanded(false):setExpanded(true)}
    };

    return (
        <div className={`w-full ${expanded? "h-[22rem]":"h-[20rem]"} flex flex-col gap-2 text-white p-2 rounded-2xl transition-all hover:bg-neutral-700 hover:cursor-pointer`}>
            <div onClick={()=>(navigate(`watch/${videoLink}`), handleSetExpanded())} className='h-[70%] rounded-md overflow-hidden'>
                <img src={thumbnailPic} alt="" className='w-full h-full object-cover'/>
            </div>
            <div className='w-full h-[30%] flex gap-2'>
                <div className='w-[10%] h-full'>
                    <div className='w-10 h-10 rounded-full overflow-hidden'>
                        <img src={chanelLogo} alt="" className='w-full h-full object-cover'/>
                    </div>
                </div>
                <div onClick={()=>(navigate(`watch/${videoLink}`), handleSetExpanded())} className='w-[90%] flex flex-col'>
                    <h2 className={`${expanded? "text-base":"text-base"} line-clamp-2 `}>{title}</h2>
                    <p className={`${expanded? "text-sm":"text-sm"} w-fit text-neutral-400 hover:text-neutral-200`}>{chanel}</p>
                    {/* <p className='text-sm'>{videoLink}</p> */}
                    <div className='flex text-neutral-400 text-sm'>
                        <p> 34k views </p>
                        <p>·</p>
                        <p>2 month ago</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
