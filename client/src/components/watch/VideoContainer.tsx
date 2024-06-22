import { useEffect, useState } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
import { ThumbDownAltOutlined, ThumbUpOutlined, ReplyOutlined, FileDownloadOutlined, MoreHorizOutlined, NotificationsNoneOutlined, KeyboardArrowDownOutlined, SortOutlined, VideoLibraryOutlined, PermContactCalendarOutlined } from '@mui/icons-material';

interface VideoContainerProps {
    link:string;
}
const VideoContainer:React.FC<VideoContainerProps> = ({link}) => {
    const DummyData = {title:`'슈퍼노바' 데뷔 성공 마친 MY, '아마겟돈' 컴백 준비하셔야 합니다☄️ | aespa 에스파 ‘Armageddon’ 응원법 (Cheering Guide)'`, thumbnailPic:'/public/images/Thumbnail1.jpeg', chanel:'Guynut', chanelLogo:'/public/images/userProfile.jpg', videoLink:'bhjVUYS438bv43UVb',
        description:`LDF interview \nwith aespa(@aespa)\n\n화보 촬영을 통해 인생 드라마를 만난 것 같은\n러블리한 에스파의 TMI 인터뷰 최/초/공/개 💬\n\n- 에스파가 추천하는 면세쇼핑 필수 아이템은?\n- 에스파가 소개하는 해외여행 꿀팁은?
        \n에스파에 대해 좀 더 자세히 알고 싶은 MY분들 💙\n지금 바로 에스파의 TMI 인터뷰를 확인하세요 💨\n\n-\n
        LDF interview \nwith aespa
        \n\nLovely aespa's TMI interview that feels like\nmeeting the drama of life through a photo shoot 💬
        \n
        - What duty-free shopping items does aespa recommend?\n- What are the overseas travel tips introduced by aespa?
        \n
        People who want to know more about aespa 💙\nCheck out aespa’s TMI interview right now 💨
        \n
        #롯데면세점 #LOTTEDUTYFREE #LDF #DutyFree #면세점 #인터넷면세점 #롯데면세권 \n#인터뷰 #TMI인터뷰 #Interview #에스파 #aespa #카리나 #윈터 #지젤 #닝닝 #KARINA #WINTER #GISELLE #NINGNING
        \n-
        Facebook:  https://www.facebook.com/LOTTEDFS/
        Instagram: https://www.instagram.com/lottedutyfree/
        Twitter:      https://twitter.com/lottedfs_global
        `}
    const markers =[{time:120,label:"Point 1"},{time:248,label:"Point 2"},]
    const [showDescription, setShowDescription] = useState(false)

    return (
        <div className='h-[93vh] w-[70vw] overflow-y-scroll'>
            <div className="h-auto w-[70vw] bg-neutral-950 flex flex-col items-center justify-start py-2 pb-32">
                <div className={`w-[96%] flex justify-center items-center rounded-md overflow-hidden bg-neutral-900`}>
                    <VideoPlayer link={"/public/videos/2024-05-30 01-04-23.mp4"} Thumbnail={"/public/images/Thumbnail2.webp"} markers={markers} />
                </div>
                <div className='w-[96%] h-auto flex flex-col mt-3'>
                    <h1 className='text-[1.3rem] font-bold'>{DummyData.title}</h1>
                    <div className='w-full h-16  flex justify-center items-center'>
                        <div className='h-full flex gap-3 justify-start items-center'>
                            <div className='h-11 w-11 rounded-full overflow-hidden'>
                                <img src={DummyData.chanelLogo} alt="" className='h-full w-full object-cover'/>
                            </div>
                            <div>
                                <p className='font-semibold text-lg'>{DummyData.chanel}</p>
                                <p className='text-sm text-neutral-300'>1.5M subscribers</p>
                            </div>
                            <button className='flex justify-center items-center bg-neutral-800 rounded-full p-2 px-4 hover:bg-neutral-700'>
                                <NotificationsNoneOutlined/>
                                <p>Subscribed</p>
                                <KeyboardArrowDownOutlined/>
                            </button>
                        </div>
                        <div className='grow'></div>
                        <div className='flex gap-2 h-full items-center'>
                            <div className='flex'>
                                <button className='flex gap-2 bg-neutral-800 p-2 pl-5 rounded-l-full hover:bg-neutral-700 border-r border-neutral-500'>
                                    <ThumbUpOutlined/><p>4.3k</p>
                                </button>
                                <button className='bg-neutral-800 p-2 pr-5 rounded-r-full hover:bg-neutral-700'>
                                    <ThumbDownAltOutlined/>
                                </button>
                            </div>
                            <button className='flex gap-1 justify-center items-center bg-neutral-800 p-2 px-4 rounded-full hover:bg-neutral-700'>
                                <ReplyOutlined/>
                                <p>Share</p>
                            </button>
                            <button className='flex gap-1 justify-center items-center bg-neutral-800 p-2 px-4 rounded-full hover:bg-neutral-700'>
                                <FileDownloadOutlined/>
                                <p>Download</p>
                            </button>
                            <button className='flex gap-1 justify-center items-center bg-neutral-800 p-2 px-2 rounded-full hover:bg-neutral-700'>
                                <MoreHorizOutlined/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`${showDescription?"":"hover:bg-neutral-700"} h-auto w-[96%] mt-2 bg-neutral-800 rounded-lg overflow-hidden p-3`}
                    onClick={()=>{!showDescription && setShowDescription(true)}}
                >
                    <div className='flex gap-3 text-base'>
                        <p>1,234,123 views</p>
                        <p>Jun 23, 2024</p>
                        <p className={`flex gap-1 font-semibold ${showDescription? "text-blue-500":"text-neutral-500"}`}>
                            <a href="">#f2fwom</a>
                            <a href="">#f2fwom</a>
                        </p>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: `${DummyData.description}`.replace(/\n/g, '<br>') }} className={`font-light text-base ${showDescription? "" : "line-clamp-2"} `}></div>
                    {showDescription &&
                        <div className='flex flex-col gap-5 my-5'>
                            <div className='flex gap-2'>
                                <div className='h-11 w-11 rounded-full overflow-hidden'>
                                    <img src={DummyData.chanelLogo} alt="" className='h-full w-full object-cover'/>
                                </div>
                                <div>
                                    <p className='font-semibold text-lg'>{DummyData.chanel}</p>
                                    <p className='text-sm text-neutral-300'>1.5M subscribers</p>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <button className='flex justify-center items-center gap-2 p-1 px-3 rounded-full font-medium ring-1 ring-neutral-600 hover:bg-neutral-600'><VideoLibraryOutlined/><p>Videos</p></button>
                                <button className='flex justify-center items-center gap-2 p-1 px-3 rounded-full font-medium ring-1 ring-neutral-600 hover:bg-neutral-600'><PermContactCalendarOutlined/><p>About</p></button>
                                <button className='flex justify-center items-center gap-2 p-1 px-3 rounded-full font-medium ring-1 ring-neutral-600 hover:bg-neutral-600'>
                                    <div className='w-7 h-7 rounded-full overflow-hidden'>
                                        <img src="/public/icons/ig.png" alt="" className='w-full h-full object-cover' />
                                    </div>
                                    <p>Instagram</p>
                                </button>
                                <button className='flex justify-center items-center gap-2 p-1 px-3 rounded-full font-medium ring-1 ring-neutral-600 hover:bg-neutral-600'>
                                    <div className='w-7 h-7 rounded-full overflow-hidden'>
                                        <img src="/public/icons/x.avif" alt="" className='w-full h-full object-cover' />
                                    </div>
                                    <p>Twitter</p>
                                </button>
                                <button className='flex justify-center items-center gap-2 p-1 px-3 rounded-full font-medium ring-1 ring-neutral-600 hover:bg-neutral-600'>
                                    <div className='w-7 h-7 rounded-full overflow-hidden'>
                                        <img src="/public/icons/facebook.png" alt="" className='w-full h-full object-cover' />
                                    </div>
                                    <p>Facebook</p>
                                </button>
                                <button className='flex justify-center items-center gap-2 p-1 px-3 rounded-full font-medium ring-1 ring-neutral-600 hover:bg-neutral-600'>
                                    <div className='w-7 h-7 rounded-full overflow-hidden'>
                                        <img src="/public/icons/tiktok.png" alt="" className='w-full h-full object-cover' />
                                    </div>
                                    <p>TikTok</p>
                                </button>
                            </div>
                        </div>
                    }
                    {showDescription?(
                        <button onClick={()=>{showDescription && setShowDescription(false)}}>show less</button>
                    ):(
                        <button onClick={()=>{!showDescription && setShowDescription(true)}}>...more</button>
                    )
                    }
                </div>
                <div className='w-[96%] mt-5'>
                    <div className='flex gap-2 justify-start items-center'>
                        <h4 className='text-xl'>ความคิดเห็น 204 รายการ</h4>
                        <button className='flex'><SortOutlined/> Order By</button>
                    </div>
                    <div className='w-full mt-4 flex gap-4'>
                        <div className="h-11 w-11 rounded-full overflow-hidden">
                            <img src="/public/images/userProfile.jpg" alt="" />
                        </div>
                        <div className='flex flex-col gap-2 grow'>
                            <textarea name="" id=""className='bg-transparent border-b outline-none text-lg' placeholder='Add comment....'></textarea>
                            {/* <input className='bg-transparent border-b outline-none text-lg'
                                type="text"
                                placeholder='Add comment....'
                            /> */}
                            <div className='flex gap-3 self-end'>
                                <button className=' p-1 px-4 rounded-full text-lg hover:bg-neutral-700'>cancel</button>
                                <button className='p-1 px-4 rounded-full text-lg bg-blue-600'>Send Comment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


type Marker = {
    time: number;
    label: string;
}
type videoPlayerProps = {
    link:string;
    Thumbnail:string;
    markers?:Marker[]
}
export const VideoPlayer:React.FC<videoPlayerProps> = ({link, Thumbnail, markers = []}) =>{
    const [aspectClass, setAspectClass] = useState<string>('');

    useEffect(() => {
        const videoElement = document.getElementById('player') as HTMLVideoElement | null;
        if (!videoElement) {
            return;
        }

        const handleLoadedMetadata = () => {
            const { videoWidth, videoHeight } = videoElement;
            if (videoWidth > videoHeight) {
                setAspectClass('max-h-[45vw]');
            } else {
                setAspectClass('max-w-[26vw]');
            }
        };
        videoElement.addEventListener('loadedmetadata', handleLoadedMetadata);

        const player = new Plyr('#player', {
            autoplay: true,
            clickToPlay: true,
            keyboard: { focused: true, global: true },
            invertTime: false,
            markers:{ enabled: true, points: markers },
            seekTime:5,
            controls: ['play', 'progress', 'current-time', 'mute', 'settings', 'pip', 'fullscreen'],
        });


        return () => {
            player.destroy();
            videoElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
    }, []);
    return (
        <div className={`w-auto ${aspectClass} bg-red-500`}>
            <video id="player" controls autoPlay playsInline data-poster={Thumbnail}>
                <source src={link} type="video/mp4" />
            </video>
        </div>
    )
}
export default VideoContainer
