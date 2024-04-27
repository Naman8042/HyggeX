import React, { useRef } from 'react'
import Logo from '../assets/nav.png'


const Navbar = () => {
  const faq = useRef()
  const scrollHandler=(eleRef)=>{
   console.log(eleRef)
   window.scrollTo({top:2000,behavior:"smooth"})
  } 
  const scrollToflashCard=()=>{
    window.scrollTo({top:850,behavior:"smooth"})
  } 
  return (
    <div className=' flex px-[5%] py-[1%] justify-between items-center mb-[3%]'>
     <div className='h-[100%] flex items-center justify-start pl-8'>
        <img src={Logo} alt=""
        className='object-cover  w-[50%]'
        />
     </div>
     <ul className='flex items-center space-x-12'>
        <li className='text-lg'>Home</li>
        <li className='text-lg' onClick={()=>scrollToflashCard()}>Flashcard</li>
        <li className='text-lg'>Contact</li>
        <li className='text-lg' onClick={()=>scrollHandler(faq)}>FAQ</li>
        <button class="bg-gradient-to-b from-[#06286E] to-[#164EC0] text-white font-bold py-2 px-8 text-lg rounded-full">
        Login
        </button>
     </ul>
    </div>
  )
}

export default Navbar
