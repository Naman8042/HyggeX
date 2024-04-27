import React,{useState} from 'react'
import { GoHome } from "react-icons/go"
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import { PiArrowClockwiseBold } from "react-icons/pi";
import { MdFullscreen } from "react-icons/md";
import { FaCirclePlus } from "react-icons/fa6";
import { AiOutlineBulb } from "react-icons/ai";
import { AiOutlineSound } from "react-icons/ai";
import Photo from '../assets/relation.png'
import ReactCardFlip from 'react-card-flip'

const Relation = () => {
    const[card,setCard] = useState(true)
  return (
    <div className=' overflow-x-hidden'>
      <div className='flex items-center gap-1 text-lg ml-[8%]'>
        <GoHome size={30}/>
        <FaChevronRight />
        <p>Flashcard</p>
        <FaChevronRight/>
        <p>Mathematics</p>
        <FaChevronRight/>
        <p className='text-sky-900 font-semibold'>Relation and Function</p>
      </div>
      <h1 className='ml-[8%] my-[2%] bg-gradient-to-b from-[#06286E] to-[#164EC0] inline-block text-transparent bg-clip-text text-4xl font-bold'>Relations And Functions ( Mathematics )</h1>
      
        <ul className='flex gap-10 text-xl justify-center'>
            <li className='text-sky-900 border-b-2 border-indigo-800 p-[0.5%] font-semibold'>Study</li>
            <li className='p-[0.5%] text-gray-500'>Quiz</li>
            <li className='p-[0.5%] text-gray-500'>Test</li>
            <li className='p-[0.5%] text-gray-500'>Game</li>
            <li className='p-[0.5%] text-gray-500'>Others</li>
        </ul>
       
        <ReactCardFlip isFlipped={card} flipDirection='horizontal'>
        
            <div className='w-screen flex justify-center my-[2%]'>
            <div className=' w-[45%] items-center h-96 flex flex-col  bg-gradient-to-l from-[#06286E] to-[#164EC0] rounded-3xl ' onClick={()=>setCard(!card)}>
            <div className='flex justify-between w-full p-[4%] h-[45%]'>
            <AiOutlineBulb color='white' size={40}/>    
            <AiOutlineSound color='white' size={40}/>    
        
            </div>
            <div className=' flex justify-center  h-[55%] text-4xl font-semibold text-white text-center'>
                <p>9 + 6 + 7x - 2x - 3</p>
            </div>
            </div>
        
            </div>
            <div className='w-screen flex justify-center my-[2%]'>
            <div className='transition-colors duration-300 w-[45%] h-96 flex flex-col  bg-gradient-to-r from-[#3c7bab] to-[#173461] rounded-3xl' onClick={()=>setCard(!card)}>
            <div className='flex justify-between w-full p-[4%] h-[45%]'>
            <AiOutlineBulb color='white' size={40}/>    
            <AiOutlineSound color='white' size={40}/>    
            </div>
            <div className='flex justify-center  h-[55%] text-4xl font-semibold text-white text-center'>
                <p>5x + 12</p>
            </div>
        </div>
            </div>
   
        </ReactCardFlip>
        
        <ul className='flex justify-center gap-16 items-center '>
            <li className='pr-[6%]'>
              <PiArrowClockwiseBold color="#06286E" size={50}/>  
            </li>
            <li>
                <FaChevronCircleLeft color="#06286E" size={60}/>
            </li>
            <li className='text-3xl font-semibold'>01/10</li>
            <li>
                <FaChevronCircleRight color="#06286E" size={60}/>
            </li>
            <li className='pl-[5%]'>
            <MdFullscreen color="#06286E" size={50}/>
            </li>
            
        </ul>
        
        <div className='flex justify-between mx-[5%] mb-[10%] mt-[2%]'>
            <img src={Photo} alt="" className='w-64'/>
            <section className='flex gap-4 items-center'>
              <FaCirclePlus size={60} color='#06286E'/>
              <p className='text-3xl bg-gradient-to-b from-[#06286E] to-[#164EC0] inline-block text-transparent bg-clip-text font-semibold'>Create Flashcard</p>
            </section>
        </div>
    </div>
  )
}

export default Relation
