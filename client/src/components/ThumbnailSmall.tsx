import React from 'react'
import { MoreVertOutlined } from '@mui/icons-material';

interface ThumbnailProps {
    title: string;
    thumbnailPic: string;
    chanel: string;
    videoLink: string;
    views:number
}
const ThumbnailSmall:React.FC<ThumbnailProps> = (props) => {
    return (
        <div className='my-1 flex gap-2 w-[98%] hover:bg-neutral-900 p-2 rounded-md'>
            <div className='w-[40%] rounded-md overflow-hidden'>
                <img src={props.thumbnailPic} alt="" className='h-full w-full object-cover'/>
            </div>
            <div className='w-[60%] flex flex-col'>
                <h3 className='text-base font-medium line-clamp-2'> {props.title} </h3>
                <h2 className='text-sm font-normal text-neutral-400'> {props.chanel} </h2>
                <p className='text-sm font-normal text-neutral-400'>{props.views} views</p>
            </div>
            <button className='w-fit h-fit rounded-full'><MoreVertOutlined fontSize='small'/></button>
        </div>
    )
}
export default ThumbnailSmall
