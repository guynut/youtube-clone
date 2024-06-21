import { useState, useContext, SetStateAction } from 'react';
import { AuthContext, signInFirebase } from '../Auth/firebaseAuth';
import { auth } from '../Auth/FirebaseConfig';
import { signOut } from 'firebase/auth';
import { Menu, AccountCircle, Search, Close, KeyboardVoiceRounded } from '@mui/icons-material';
import { pageProps } from '../data/types';


const Navbar:React.FC<pageProps>=({setExpanded, expanded})=> {
    const { currentUser } = useContext(AuthContext);
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const inputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setInputValue(event.target.value);
    };

    const clearInput = () => {
        setInputValue('');
    };

    const handleSetExpanded = () => {
        if (setExpanded) {expanded? setExpanded(false):setExpanded(true)}
    };
    return (
        <div className='w-[100vw] h-[7vh] bg-neutral-950 flex'>
            <div className='w-[16vw] h-full flex justify-center items-center gap-2'>
                <button onClick={handleSetExpanded} className='rounded-full p-1 transition-all hover:bg-neutral-600 active:bg-neutral-500'>
                    <Menu sx={{ fontSize: 32 }} className='text-white'/>
                </button>
                <div className='h-10'>
                    <img src="/public/icons/icon-Ghouse.png" alt="" className='w-full h-full object-contain'/>
                </div>
            </div>
            <div className='w-[73vw] h-full flex gap-4 justify-center items-center'>
                <div className={`w-[60%] relative h-fit bg-neutral-900 flex justify-center items-center rounded-full ring-1 ${isFocused ? 'ring-blue-600' : 'ring-neutral-700'}`}>
                    <input type="text" className='w-[90%] px-4 py-1 bg-transparent outline-none text-lg placeholder:text-neutral-400'
                        placeholder='Search..'
                        value={inputValue}
                        onChange={inputChange}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                    {inputValue && (
                        <button
                            className="bg-neutral-700 bg-opacity-30 backdrop-blur-sm text-neutral-300 m-1 rounded-full p-1 absolute right-[10%] hover:text-neutral-100 hover:bg-neutral-600"
                            onClick={clearInput}
                        >
                            <Close fontSize="large" />
                        </button>
                    )}
                    <button className='w-[10%] bg-neutral-800 py-1 rounded-r-full hover:bg-neutral-700 active:bg-neutral-600'>
                        <Search fontSize="large"/>
                    </button>
                </div>
                <button className='w-11 h-11 bg-neutral-800 rounded-full flex justify-center items-center hover:bg-neutral-700 active:bg-neutral-600'>
                    <KeyboardVoiceRounded sx={{ fontSize: 25 }} className=''/>
                </button>
            </div>
            <div className='w-[11vw] h-full flex justify-end items-center pr-3 '>
                {currentUser?
                    <div onClick={()=>signOut(auth)} className='w-12 h-12 rounded-full overflow-hidden'>
                        <img src="/public/images/userProfile.jpg" alt="" className='h-full object-cover'/>
                    </div>
                :
                    <button onClick={()=>signInFirebase()} className='w-fit h-fit flex items-center gap-1 bg-neutral-950 rounded-full p-1 px-3 border border-neutral-600 hover:bg-opacity-30 hover:ring-blue-700 hover:bg-blue-700'>
                        <AccountCircle className='text-sky-500' />
                        <p className='text-xl font-normal text-sky-500'> login </p>
                    </button>
                }
            </div>
        </div>
    )
}

export default Navbar;