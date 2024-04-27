import React,{useState} from 'react'
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const Card = ({props}) => {
  const[answere,setAnswere] = useState(false)  
  return (
    <div>
      <section className='w-[60%] border-2 rounded-xl p-[1%]  my-[2%]'>
        <div className='flex justify-between text-lg items-center font-semibold '>
            <p>{props.question}</p>
            {
                answere?(
                    <button onClick={()=>setAnswere(false)}
                    >
                    < FaChevronUp/>
                    </button>
                ):(
                    <button onClick={()=>setAnswere(true)}
                    >
                        <FaChevronDown/>
                    </button>
                )
            }
            
        </div>
        <div className='w-[97%] mt-[1%]'>
            {answere && <p>
                {props.answer}
            </p>}
        </div>
      </section>
    </div>
  )
}

export default Card
