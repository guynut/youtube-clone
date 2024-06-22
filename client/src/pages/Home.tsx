import React from 'react'
import { pageProps } from '../data/types'
import Sidebar from '../components/home/Sidebar'
import Landing from '../components/home/Landing'

const Home:React.FC<pageProps> = ({expanded, setExpanded}) => {
  return (
    <div className='h-[93vh] w-full flex'>
      <Sidebar expanded={expanded} />
      <Landing expanded={expanded} setExpanded={setExpanded}/>
    </div>
  )
}

export default Home