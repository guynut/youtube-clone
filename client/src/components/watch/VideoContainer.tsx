import { useEffect, useState, useRef, ChangeEvent } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
import { ThumbDownAltOutlined,
    ThumbUpOutlined,
    ReplyOutlined,
    FileDownloadOutlined,
    MoreHorizOutlined,
    MoreVertOutlined,
    NotificationsNoneOutlined,
    KeyboardArrowDownOutlined,
    KeyboardArrowUpOutlined,
    SortOutlined,
    VideoLibraryOutlined,
    PermContactCalendarOutlined } from '@mui/icons-material';
import { DummyData, DummyComment, markers} from '../../data/StaticData';

interface VideoContainerProps {
    link:string;
}

const VideoContainer:React.FC<VideoContainerProps> = ({link}) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [newMessage, setNewMessage] = useState<string>('');
    const [isFocused, setIsFocused] = useState(false);
    const autoExpand = () => {
        if (textareaRef.current) {
            const textarea = textareaRef.current;
            textarea.style.height = '1.75rem';
            textarea.style.height = Math.min(textarea.scrollHeight) + 'px';
        }
    };
    const handleFocus = () => {
        setIsFocused(true);
    };
    const handleBlur = () => {
        if (!newMessage) {
            setIsFocused(false);
        }
    };
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewMessage(e.target.value);
        autoExpand();
    };

    return (
        <div className='h-[93vh] w-[70vw]'>
            <div className="h-auto w-[70vw] bg-neutral-950 flex flex-col items-center justify-start py-2 ">
                <div className={`w-[98%] flex justify-center items-center rounded-md overflow-hidden bg-neutral-900`}>
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
                <DescriptionContainer/>
                <div className='w-[96%] mt-5'>
                    <div className='flex gap-2 justify-start items-center'>
                        <h4 className='text-xl font-bold'>{DummyComment.length} Comments</h4>
                        <button className='flex'><SortOutlined/> Sort By</button>
                    </div>
                    <AddComment />
                    {DummyComment.length > 0 && (
                        <>
                            {DummyComment.map((comment,index)=>(
                                <CommentView key={index} name={comment.user} userPic={comment.userPic} text={comment.text} like={comment.like} reply={comment.reply}/>
                            ))}
                        </>
                    )}
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

function DescriptionContainer(){
    const [showDescription, setShowDescription] = useState(false)
    return(
        <div className={`${showDescription?"":"hover:bg-neutral-700"} h-auto w-[96%] mt-2 bg-neutral-800 rounded-lg overflow-hidden p-3`}
            onClick={()=>{!showDescription && setShowDescription(true)}}
        >
            <div className='flex gap-2 text-base'>
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
    )
}








type Reply = {
    user: string;
    text: string;
    userPic:string;
    like:number
};
type CommentViewProps = {
    name:string;
    userPic:string;
    text:string;
    like:number;
    reply:Reply[];
}
const CommentView:React.FC<CommentViewProps> = (props) =>{
    const [showReply, SetShowReply] = useState(false)
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [newMessage, setNewMessage] = useState<string>('');
    const [replyComment, setReplyComment] = useState(false);
    const autoExpand = () => {
        if (textareaRef.current) {
            const textarea = textareaRef.current;
            textarea.style.height = '1.75rem';
            textarea.style.height = Math.min(textarea.scrollHeight) + 'px';
        }
    };
    const handleFocus = () => {
        setReplyComment(true);
    };
    const handleBlur = () => {
        if (!newMessage) {
            setReplyComment(false);
        }
    };
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewMessage(e.target.value);
        autoExpand();
    };
    return(
        <div className='flex gap-2 mt-6'>
            <div className='w-12 h-11 rounded-full overflow-hidden'>
                <img src={props.userPic} alt="" className='w-full h-full object-cover'/>
            </div>
            <div className='flex flex-col w-full'>
                <div className='flex gap-1 justify-start items-end'>
                    <p>{props.name}</p>
                    <p className='text-sm text-neutral-500'>25 minute ago</p>
                </div>
                <div dangerouslySetInnerHTML={{ __html: `${props.text}`.replace(/\n/g, '<br>') }} className={`font-light text-base w-full mt-1`}></div>
                <div className='flex mt-2 items-center'>
                    <button className='flex gap-1 hover:bg-neutral-700 p-2 rounded-full'>
                        <ThumbUpOutlined fontSize='small'/>
                    </button>
                    <p className='text-sm ml-1'>{props.like}</p>
                    <button className='flex gap-1 mx-2 hover:bg-neutral-700 p-2 rounded-full'>
                        <ThumbDownAltOutlined fontSize='small'/>
                    </button>
                    <button onClick={()=>setReplyComment(true)} className='flex gap-1 hover:bg-neutral-700 p-2 px-3 rounded-full text-sm'>Reply</button>
                </div>
                {replyComment &&
                    <div className='w-full mt-4 flex gap-4'>
                        <div className="h-8 w-8 rounded-full overflow-hidden">
                            <img src={DummyData.chanelLogo} alt="" />
                        </div>
                        <div className='flex flex-col gap-2 grow'>
                            <textarea id=""className='bg-transparent border-b outline-none text-lg h-[1.75em] resize-none' placeholder='Add comment....'
                                name="userComment"
                                ref={textareaRef}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                value={newMessage}
                            ></textarea>
                            <div className='flex gap-3 self-end'>
                                <button onClick={()=>{setNewMessage(''); setReplyComment(false)}} className=' p-1 px-4 rounded-full text-base hover:bg-neutral-700'>cancel</button>
                                <button className={`p-1 px-4 rounded-full text-base  ${newMessage? "bg-blue-600 text-neutral-100" : "bg-neutral-800 text-neutral-500" }`}>Comment</button>
                            </div>
                        </div>
                    </div>
                }
                {props.reply.length > 0 &&
                    <div className=''>
                        <button onClick={()=>{(showReply? SetShowReply(false) : SetShowReply(true))}} className='text-blue-400 w-fit flex hover:bg-sky-900 p-1 px-2 rounded-full'>
                            {showReply? (
                                <KeyboardArrowUpOutlined/>
                                ):(
                                    <KeyboardArrowDownOutlined/>
                            )}
                            {props.reply.length}
                            {props.reply.length == 1? <p className='ml-1'>reply</p> : <p className='ml-1'>replies</p> }
                        </button>
                        {showReply &&
                            <div className='flex flex-col gap-1 mt-2'>
                                {props.reply.map((reply,index)=>(
                                    <ReplyView key={index} user={reply.user} text={reply.text} userPic={reply.userPic} like={reply.like}/>
                                ))}
                            </div>
                        }
                    </div>
                }
            </div>
            <div className='w-fit'>
                <button className='hover:bg-neutral-700 rounded-full p-1 w-8 h-8 flex justify-center items-center'><MoreVertOutlined/></button>
            </div>
        </div>
    )
}
const ReplyView:React.FC<Reply> = (props) =>{
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [newMessage, setNewMessage] = useState<string>('');
    const [replyComment, setReplyComment] = useState(false);
    const autoExpand = () => {
        if (textareaRef.current) {
            const textarea = textareaRef.current;
            textarea.style.height = '1.75rem';
            textarea.style.height = Math.min(textarea.scrollHeight) + 'px';
        }
    };
    const handleFocus = () => {
        setReplyComment(true);
    };
    const handleBlur = () => {
        if (!newMessage) {
            setReplyComment(false);
        }
    };
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewMessage(e.target.value);
        autoExpand();
    };
    return(
        <div className='flex gap-3 mt-2'>
            <div className='w-8 h-8 rounded-full overflow-hidden'>
                <img src={props.userPic} alt="" className='w-full h-full object-cover'/>
            </div>
            <div className='flex flex-col w-full'>
                <div className='flex gap-1 justify-start items-end'>
                    <p>{props.user}</p>
                    <p className='text-sm text-neutral-500'>25 minute ago</p>
                </div>
                <div dangerouslySetInnerHTML={{ __html: `${props.text}`.replace(/\n/g, '<br>') }} className={`font-light text-base w-full mt-1`}></div>
                <div className='flex mt-2 items-center'>
                    <button className='flex gap-1 hover:bg-neutral-700 p-2 rounded-full'>
                        <ThumbUpOutlined fontSize='small'/>
                    </button>
                    <p className='text-sm ml-1'>{props.like}</p>
                    <button className='flex gap-1 mx-2 hover:bg-neutral-700 p-2 rounded-full'>
                        <ThumbDownAltOutlined fontSize='small'/>
                    </button>
                    <button onClick={()=>setReplyComment(true)} className='flex gap-1 hover:bg-neutral-700 p-2 px-3 rounded-full text-sm'>Reply</button>
                </div>
                {replyComment &&
                    <div className='w-full mt-4 flex gap-4'>
                        <div className="h-8 w-8 rounded-full overflow-hidden">
                            <img src={DummyData.chanelLogo} alt="" />
                        </div>
                        <div className='flex flex-col gap-2 grow'>
                            <textarea id=""className='bg-transparent border-b outline-none text-lg h-[1.75em] resize-none' placeholder='Add comment....'
                                name="userComment"
                                ref={textareaRef}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                value={newMessage}
                            ></textarea>
                            <div className='flex gap-3 self-end'>
                                <button onClick={()=>{setNewMessage(''); setReplyComment(false)}} className=' p-1 px-4 rounded-full text-base hover:bg-neutral-700'>cancel</button>
                                <button className={`p-1 px-4 rounded-full text-base  ${newMessage? "bg-blue-600 text-neutral-100" : "bg-neutral-800 text-neutral-500" }`}>Comment</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

function AddComment(){
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [newMessage, setNewMessage] = useState<string>('');
    const [isFocused, setIsFocused] = useState(false);
    const autoExpand = () => {
        if (textareaRef.current) {
            const textarea = textareaRef.current;
            textarea.style.height = '1.75rem';
            textarea.style.height = Math.min(textarea.scrollHeight) + 'px';
        }
    };
    const handleFocus = () => {
        setIsFocused(true);
    };
    const handleBlur = () => {
        if (!newMessage) {
            setIsFocused(false);
        }
    };
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewMessage(e.target.value);
        autoExpand();
    };
    return(
        <div className='w-full mt-4 flex gap-4'>
            <div className="h-11 w-11 rounded-full overflow-hidden">
                <img src={DummyData.chanelLogo} alt="" />
            </div>
            <div className='flex flex-col gap-2 grow'>
                <textarea id=""className='bg-transparent border-b outline-none text-lg h-[1.75em] resize-none' placeholder='Add comment....'
                    name="userComment"
                    ref={textareaRef}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={newMessage}
                ></textarea>
                {isFocused &&
                    <div className='flex gap-3 self-end'>
                        <button onClick={()=>{setNewMessage(''); setIsFocused(false)}} className=' p-1 px-4 rounded-full text-base hover:bg-neutral-700'>cancel</button>
                        <button className={`p-1 px-4 rounded-full text-base  ${newMessage? "bg-blue-600 text-neutral-100" : "bg-neutral-800 text-neutral-500" }`}>Comment</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default VideoContainer
