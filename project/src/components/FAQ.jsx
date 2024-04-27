import React,{useRef} from 'react'
import Card from './Card'

const FAQ = () => {
   const faq = useRef()
    const faqs = [
        {
          question: 'Can education flashcards be used for all age groups?',
          answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis voluptates, hic voluptate quae porro dignissimos laborum sed facilis. Dolores nam nihil ducimus excepturi ab quaerat dolorem dicta magnam tempore.',
        },
        {
          question: 'How do education flashcards work?',
          answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis voluptates, hic voluptate quae porro dignissimos laborum sed facilis. Dolores nam nihil ducimus excepturi ab quaerat dolorem dicta magnam tempore.',
        },
        {
          question: 'Can education flashcards be used for test preparation?',
          answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis voluptates, hic voluptate quae porro dignissimos laborum sed facilis. Dolores nam nihil ducimus excepturi ab quaerat dolorem dicta magnam tempore.',
        },
        
      ];
  return (
    <div className='ml-[8%] mb-[20%]' ref={faq}>
      <h1 class="bg-gradient-to-b from-[#06286E] to-[#164EC0] inline-block text-transparent bg-clip-text text-5xl font-bold">FAQ</h1>
      {
        faqs.map((faq)=>(
            <Card props={faq}/>
        ))
      }
    </div>
  )
}

export default FAQ
