import React from 'react'
import green from '../assets/green.webp'
import yellow from '../assets/yellow.webp'
import red from '../assets/red.webp'
import roman from '../assets/roman.webp'
import teen from '../assets/teenmobile.webp'
import redweb from '../assets/red.webp'

const Middle = () => {
  return (
    
    <div className='w-full h-full   flex items-center justify-center pt-12 flex-col bg-[#E4E4E4]'>
            <div className='w-[90%]  h-full mt-10   flex justify-between'>
                   <div>
                          <h1 className='text-black  text-[110px] font-serif leading-[110px]'>Turning <br /> heads and <br /> conquering </h1>
                          <h1 className='flex items-center justify-start gap-5 font-serif'>
                          <h1 className='text-[110px] mt-[-30px]' >hearts </h1>
                          <img className='animate w-20' src="scroll.webp" alt="" />
                          </h1>
                   </div>
                   <div className=' w-80 flex flex-col justify-end h-[420px]' >
                          <p className='w-[290px] text-lg'>NiceAtNoon is een boutique design studio gespecialiseerd in branding en webdesign.</p>
                               <div className='flex gap-6 bg-white px-4 py-4 mt-5 w-52 rounded-xl'>
                                    <button className='font-bold'>Bekijk projecten </button>
                                    <i className='font-bold' class="ri-arrow-right-line"></i>
                               </div>
                   </div>
            </div>


            <div className='scrollimg flex gap-8  mt-20 '>
                <img className='w-[500px] h-[600px] rounded-[120px]' src={green} alt="" />
                <img className='w-[500px] h-[600px] rounded-[120px]' src={yellow} alt="" />
                <img className='w-[500px] h-[600px] rounded-[120px]' src={red} alt="" />
                <img className='w-[500px] h-[600px] rounded-[120px]' src={roman} alt="" />
                <img className='w-[500px] h-[600px] rounded-[120px]' src={teen} alt="" />
                <img className='w-[500px] h-[600px] rounded-[120px]' src={redweb} alt="" />
            </div>




            <div className='w-[95%] h-[40%]  mt-10'>
                <p className='w-[650px] text-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores,Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quas reiciendis corrupti. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, delectus. Cum quaerat distinctio similique excepturi. adipisicing elit. Quod odit dolorum ea dolorem tenetur, molestias rerum odio omnis error nostrum.</p>
                <div className='bg-white w-[200px] px-2 py-3 flex gap-3 rounded-2xl mt-4 hover:scale-[1.01]'>
                        <button className='font-bold ' > Leer ons Kennen</button>
                        <i className='font-bold' class="ri-arrow-right-line"></i>
                </div>
            </div>



    
    </div>
    
  )
}

export default Middle