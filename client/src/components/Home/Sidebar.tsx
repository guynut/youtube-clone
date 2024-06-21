import { HomeRounded, Theaters, AutoAwesomeMotion, LibraryMusic } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface SidebarProps{
  expanded?:boolean
}

const Sidebar:React.FC<SidebarProps>=({expanded})=> {
  return (
    <div className={`w-[16vw] relative h-full flex bg-transparent z-50`}>
      <div className={`w-[16vw] absolute left-0 h-full flex flex-col items-center overflow-scroll transition-all bg-transparent`}>
        <SidebarItem text={"Home"} link={"123456"} icon={HomeRounded} expanded={expanded}/>
        <SidebarItem text={"Shorts"} link={"123456"} icon={Theaters} expanded={expanded}/>
        <SidebarItem text={"Subscribe"} link={"123456"} icon={AutoAwesomeMotion} expanded={expanded}/>
        <SidebarItem text={"Youtube Music"} link={"123456"} icon={LibraryMusic} expanded={expanded}/>
        <hr className={`my-2 ${expanded?"w-[90%]":"w-[4vw] ml-2 self-start"} border-neutral-700`}/>
        {expanded &&
          <p className={`ml-3 my-2 self-start`}>you {">"} </p>
        }
        <SidebarItem text={"Home"} link={"123456"} icon={HomeRounded} expanded={expanded}/>
        <SidebarItem text={"Home"} link={"123456"} icon={HomeRounded} expanded={expanded}/>
        <SidebarItem text={"Home"} link={"123456"} icon={HomeRounded} expanded={expanded}/>
        <SidebarItem text={"Home"} link={"123456"} icon={HomeRounded} expanded={expanded}/>
        <SidebarItem text={"Home"} link={"123456"} icon={HomeRounded} expanded={expanded}/>
        <SidebarItem text={"Home"} link={"123456"} icon={HomeRounded} expanded={expanded}/>
        <SidebarItem text={"Home"} link={"123456"} icon={HomeRounded} expanded={expanded}/>
        <SidebarItem text={"Home"} link={"123456"} icon={HomeRounded} expanded={expanded}/>
        <hr className={`my-2 ${expanded?"w-[90%]":"w-[4vw] ml-2 self-start"} border-neutral-700`}/>
        {expanded &&
          <p className={`ml-3 my-2 self-start`}>การติดตาม </p>
        }
        <SidebarItem text={"Home"} link={"123456"} icon={HomeRounded}  expanded={expanded}/>
        <SidebarItem text={"Home"} link={"123456"} icon={HomeRounded} expanded={expanded}/>
        <SidebarItem text={"Home"} link={"123456"} icon={HomeRounded} expanded={expanded}/>
        <SidebarItem text={"Home"} link={"123456"} icon={HomeRounded} expanded={expanded}/>
        <SidebarItem text={"Home"} link={"123456"} icon={HomeRounded} expanded={expanded}/>
        <SidebarItem text={"Home"} link={"123456"} icon={HomeRounded} expanded={expanded}/>
        <SidebarItem text={"Home"} link={"123456"} icon={HomeRounded} expanded={expanded}/>
        <SidebarItem text={"Home"} link={"123456"} icon={HomeRounded} expanded={expanded}/>
      </div>
    </div>
  )
}

interface SidebarItemProps{
  text:string;
  link:string | '';
  icon: React.ElementType;
  expanded?:boolean
}

export const SidebarItem: React.FC<SidebarItemProps> = ({text, link, icon: Icon, expanded}) =>{
  const navigate = useNavigate()
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
      if (!expanded) {
          setIsHovered(true);
      }
  };
  const handleMouseLeave = () => {
      setIsHovered(false);
  };
  return(
  <div className={`relative z-0 flex ${expanded? "w-full justify-center ml-0" :"w-full justify-start ml-6 z-10"} `}>
    <button className={`p-2 relative ${expanded? "w-[92%]" :"w-fit"} rounded-lg flex items-center justify-start gap-3 transition-all hover:bg-neutral-700 `}
      onClick={()=>navigate(`/${link}`)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className={`w-fit h-full flex justify-center items-center`}>
        <Icon sx={{ fontSize: 32 }} />
      </div>
      <p className={`text-base ${expanded?"block":"hidden"}`}>{text}</p>
    {!expanded && isHovered &&
      <div className='w-fit h-full absolute top-0 left-16 flex justify-center items-center'>
        <p className='w-fit h-fit p-2 rounded-md bg-red-500 line-clamp-1 text-nowrap'>{text}</p>
      </div>
    }
    </button>
  </div>
  )
}

export default Sidebar
