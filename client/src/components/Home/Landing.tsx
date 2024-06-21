import { useRef, useState } from 'react';
import { NavigateBeforeRounded, NavigateNextRounded } from '@mui/icons-material';
import { Thumbnail } from '../Thumbnail';

interface LandingProps{
    expanded?:boolean;
    setExpanded?: (expanded: true) => void;
}

const Landing:React.FC<LandingProps> = ({expanded, setExpanded}) => {
    const FilterList = ["All","Newest","Song","Cooking","Football","Watched","Game","New","Live","New for you","Avengers Game","Red","Green","Blue","Orange","Football","Watched","Game","New","End"]
    const scrollRef = useRef<HTMLDivElement>(null);
    const [btnScroll, setBtnScroll] = useState(false)

    const scrollLeft = () => {
        if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: -1000, behavior: 'smooth' });
        setBtnScroll(false)
        }
    };
    const scrollRight = () => {
        if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 1000, behavior: 'smooth' });
        setBtnScroll(true)
        }
    };
    return (
        <div className={`h-full ${expanded? "w-[84vw]":"w-[95vw]"} flex flex-col transition-all z-10`}>
            <div className="w-full h-[6vh] relative flex gap-3 items-center justify-start">
                {btnScroll &&
                    <div className='h-full w-fit flex justify-center items-center  absolute left-0'>
                        <div className='h-full w-full flex justify-center items-center bg-neutral-950'>
                            <button onClick={scrollLeft} className='hover:bg-neutral-700 p-1 rounded-full flex justify-center items-center'>
                                <NavigateBeforeRounded sx={{ fontSize: 32 }} className='z-10'/>
                            </button>
                        </div>
                        <div className='w-10 h-[6vh] bg-gradient-to-r from-neutral-950 from-40% to-transparent'></div>
                    </div>
                }
                <div className='w-full overflow-scroll no-scrollbar mx-2' ref={scrollRef} onWheel={(e) => e.preventDefault()} onTouchMove={(e) => e.preventDefault()}>
                    <div className='w-full flex gap-2 items-center justify-start'>
                        {FilterList.map((list ,index)=>(
                            <FilterBtn key={index} text={list}/>
                        ))}
                    </div>
                </div>
                {!btnScroll &&
                    <div className='h-full w-fit flex justify-center items-center  absolute right-0'>
                        <div className='w-10 h-[6vh] bg-gradient-to-l from-neutral-950 from-50% to-transparent'></div>
                        <div className='h-full w-full flex justify-center items-center bg-neutral-950'>
                            <button onClick={scrollRight} className='hover:bg-neutral-700 p-1 rounded-full flex justify-center items-center'>
                                <NavigateNextRounded sx={{ fontSize: 32 }} className='w-z-10'/>
                            </button>
                        </div>
                    </div>
                }
            </div>
            <div className='w-full h-[87vh] bg-neutral-600 grid grid-cols-3'>
                <Thumbnail title={'Lenovo Legion5 16IRX9 โน้ตบุ๊ค Gaming ระดับไฮเอนด์ เล่นเกมหรืองานหนักๆ ก็ชิล'} thumbnailPic={''} chanel={''} chanelLogo={''} videoLink={''}/>
            </div>




        </div>
    )
}

type FilterBtnProps ={
    text:string
}
const FilterBtn:React.FC<FilterBtnProps> =(props)=>{
    return(
        <button className="w-max h-fit px-3 py-1 mx-1 rounded-md bg-neutral-800 text-lg hover:bg-neutral-700 text-nowrap">{props.text}</button>
    )
}

export default Landing;