import React from 'react'
import eventg from '../assets/event.jpg'
import down from '../assets/Down.jpg'
import shirt from '../assets/shirt.jpg'
import colon  from '../assets/colon.jpg'
import books  from '../assets/books.jpg'
import spark  from '../assets/sprk.jpg'
import laptop  from '../assets/laptop.jpg'
import twomop  from '../assets/two-mob.jpg'
import bigimg  from '../assets/big-img.webp'
import coin  from '../assets/coin.svg'
import bigtext  from '../assets/big-text.png'

const Page2 = () => {
  return (
    <div className='h-full w-full  flex justify-center items-center pt-20 flex-col bg-[#E4E4E4] '>
        <div className=' w-[92%]  bg-[#E4E4E4]'>
                    <div className='flex justify-center items-center flex-col gap-[60px] mb-[60px] '>
                            <p className='font-bold'>Case</p>
                            <h1 className='text-[130px] text-center font-bold leading-[120px] w-[1000px] relative'>HEAD TURNING
                             PROJECTS</h1>
                            <p className='bg-yellow-400 px-6 py-5 font-bold rounded-3xl absolute top-[2030px] left-[880px] rotate-[-10deg]'>Gotta see 'm all</p>
                    </div>

                     <div className='bg-white border-2 w-[200px] px-3 py-4 flex gap-7 rounded-2xl ml-[1100px] '>
                     <button className='font-bold'>Alle projecten</button>
                     <i className='font-bold' class="ri-arrow-right-line"></i>
                    </div>


                    <div className='w-full h-full mt-8 relative '>
                        <div className='group hover:rounded-[80px] w-full h-[530px] rounded-3xl duration-200 ease-in overflow-hidden'>
                               <img className='group-hover:scale-[1.1] duration-300 ease-in    greenimg w-full h-full '  src="patti.jpg" alt="" />
                               <img className=' group-hover:opacity-100 greencard w-[350px] h-[350px] rounded-[50px] absolute top-[15%] left-[38%] opacity-0 duration-200 ease-linear   ' src="NS-bird.jpg " alt="" />
                        </div>
                        <h5 className='text-xl font-serif opacity-[0.5]'>Nieuw Schaijk</h5>
                        <h4 className='text-xl font-bold'> De smaak van thuis</h4>
                        <div className='flex gap-3 mt-3'>
                            <button className='text-xs border-2 px-3 py-1 rounded-lg border-black'>BRAND STORY</button>
                            <button className='text-xs border-2 px-3 py-1 rounded-lg border-black'>MERKIDENTITEIT</button>
                        </div>
                    </div>


                    <div className='w-[100%] h-[100%]  flex mt-10 justify-between '>
                        <div className='w-[49%] relative '>
                                    <div className=' group  '>
                                            <img className='group-hover:rounded-[50px]  hover:scale-110 duration-300 '  src={eventg} />
                                            <img className='group-hover:opacity-100 absolute top-[10%] opacity-0 left-[30%] h-[300px] w-[300px] rounded-[50px] duration-200 ease-linear' src={down} alt="" />
                                    </div>

                                    <h5 className='text-xl font-serif opacity-[0.5] mt-5'>Gaaf Creaties</h5>
                                    <h4 className='text-xl font-bold'> Creating mood-boosting experiences</h4>
                                 <div className='flex gap-3 mt-3'>
                                        <button className='text-xs border-2 px-3 py-1 rounded-lg border-black'>BRAND STORY</button>
                                        <button className='text-xs border-2 px-3 py-1 rounded-lg border-black'>MERKIDENTITEIT</button>
                                        <button className='text-xs border-2 px-3 py-1 rounded-lg border-black'>WEBDESIGN</button>
                                 </div>
                        </div>
                        <div className=' w-[48%] h-[600px] relative hover:rounded-[80px] '> 
                            <div className='group '>
                            <img className='group-hover:rounded-[40px] h-[500px] duration-300 ease-linear hover:scale-[1.1]  ' src={shirt} alt="" />
                            <img className='group-hover:opacity-100 absolute top-[15%] opacity-0 left-[30%] h-[300px] w-[300px] rounded-[50px] duration-200 ease-linear' src={colon} alt="" />

                        </div>


                            <h5 className='text-xl font-serif opacity-[0.5] mt-5'>Don't Mind</h5>
                                    <h4 className='text-xl font-bold'> Creating mood-boosting experiences</h4>
                                 <div className='flex gap-3 mt-3'>
                                        <button className='text-xs border-2 px-3 py-1 rounded-lg border-black'>BRAND STORY</button>
                                        <button className='text-xs border-2 px-3 py-1 rounded-lg border-black'>MERKIDENTITEIT</button>
                                        <button className='text-xs border-2 px-3 py-1 rounded-lg border-black'>WEBDESIGN</button>
                                 </div>
                        </div>
                    </div>

                    <div className='flex gap-[100px]  w-[540px] px-5 py-4 rounded-2xl justify-center items-center bg-white '>
                        <p className='font-bold'>Ook aan de slag met jouw merk?</p>

                        <div className='flex gap-2 border-2 broder-black px-4 py-4 rounded-2xl '>
                            <p className='font-bold'>Let's Meet </p>
                            <i className='font-bold' class="ri-arrow-right-line"></i>
                        </div>
                    </div>


                    


        </div>



        <div className='w-full px-[60px] pt-[100px] bg-[#F4F4F1] flex flex-col'>
            <div className='w-[260px] ' >
                <p className='font-bold'>Services</p>
                <h3 className='text-xl font-bold leading-[22px]'>Zo onderscheiden we je van de norm</h3>
            </div>



{/* cards ++++++++++++++++++++++++++++++++cards */}
        <div className='flex gap-3'>
                  <div className='group w-[350px] rounded-[40px] bg-green  flex-col overflow-hidden mt-10 flex'>
                <div className='group'>
                        <img className='h-[250px] w-full group-hover:rounded-[80px] duration-200 ease-linear ' src={books} alt="" />
                </div>
                <div className='bg-[#AA81B7] flex flex-col gap-7 px-5 py-4 group-hover:rounded-[50px] duration-200 ease-linear'>
                    <h2 className='text-xl font-bold text-white'>Brand Story </h2>
                    <p className='text-white'>   Samen creëren we een sterk fundament voor een onweerstaanbaar design </p>
                </div>
                  </div>

            {/* 2 card */}

                 <div className='group w-[350px] rounded-[40px] bg-green flex flex-col overflow-hidden mt-10'>
                <div className='group'>
                        <img className='h-[250px] w-full group-hover:rounded-[80px] duration-200 ease-linear ' src={spark} alt="" />
                </div>

                <div className='bg-[#10100F] flex flex-col gap-7 px-5 py-4 group-hover:rounded-[50px] duration-200 ease-linear'>
                    <h2 className='text-xl font-bold text-white'>Brand Story </h2>
                    <p className='text-white'>   Samen creëren we een sterk fundament voor een onweerstaanbaar design </p>
                </div>
                 </div>
    {/* 3 card */}

                 <div className='group w-[350px] rounded-[40px] bg-green flex flex-col overflow-hidden mt-10'>
                <div className='group'>
                        <img className='h-[250px] w-full group-hover:rounded-[80px] duration-200 ease-linear ' src={laptop} alt="" />
                </div>
                <div className='bg-[#36A96A] flex flex-col gap-7 px-5 py-4 group-hover:rounded-[50px] duration-200 ease-linear'>
                    <h2 className='text-xl font-bold text-white'>Brand Story </h2>
                    <p className='text-white'>   Samen creëren we een sterk fundament voor een onweerstaanbaar design </p>
                </div>
                 </div>

{/* 4 card */}

                 <div className='group w-[350px] rounded-[40px] bg-green flex flex-col overflow-hidden mt-10'>

                <div className='group'>
                        <img className='h-[250px] w-full group-hover:rounded-[80px] duration-200 ease-linear ' src={twomop} alt="" />
                </div>
                <div className='bg-[#FA8A58] flex flex-col gap-7 px-5 py-4 group-hover:rounded-[50px] duration-200 ease-linear'>
                    <h2 className='text-xl font-bold text-white'>Brand Story </h2>
                    <p className='text-white'>   Samen creëren we een sterk fundament voor een onweerstaanbaar design </p>
                </div>
        
                </div>





       </div>
        

        <div className='w-full h-full  flex flex-col mt-10 '>
            <div className='flex flex-col  w-full  pb-8'>
                <p className='w-[600px] text-xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae architecto optio voluptates tempore, ducimus perferendis ipsum maxime quisquam eligendi, praesentium fugiat itaque non consequatur exercitationem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati facilis repellat, provident eius atque porro Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae reiciendis corporis minima nisi iste quisquam!.</p>
            </div>

            <div className='bg-black text-white w-[120px] px-2 py-2 flex gap-5 justify-center rounded-xl '> 
                <button className='text-sm'>Contact </button>
                <i className='font-bold' class="ri-arrow-right-line"></i>
            </div>
            <div></div>
        </div>


        <div className='w-full flex justify-center items-center flex-col mt-10 gap-8 pb-14'>
            <p className='font-bold text-xm'>Our belief</p>
            <h1 className='text-[119px] font-bold uppercase leading-[110px] text-center w-[1200px]'>Brands just want
            To have fun</h1>
        </div>



        <div>
            <img className='rounded-[100px] h-full' src={bigimg} alt="" />

            <div className='w-[500px] gap-5 flex mt-6'>
                <button className='bg-zinc-400 text-white px-2 py-1 rounded-2xl text-ms'>Brands Story sessies</button>
                <h2 className='opacity-[0.6]'>Samen ontdekken we jouw merkverhaal</h2>
            </div>
        </div>

        <div className='border-b-2 border-zinc-800 leading-[60px] mt-[120px] '>Did some cool stuff for</div>
        <div className='flex justify-start gap-[200px] uppercase mt-[20px]'>
             
             <div className='text-xl font-mono opacity-[0.5]'> 
                     <h1>Bewakingsdienst van MOOK</h1>
                     <h1>Van der Heijden bouw</h1>
                     <h1>Speyz</h1>
                     <h1>Zeth</h1>
            </div>

            <div className='text-xl font-mono opacity-[0.5]'> 
                     <h1>Bewakingsdienst van MOOK</h1>
                     <h1>Van der Heijden bouw</h1>
                     <h1>Speyz</h1>
                     <h1>Zeth</h1>
            </div>

            <div className='text-xl font-mono opacity-[0.5]'> 
                     <h1>Bewakingsdienst van MOOK</h1>
                     <h1>Van der Heijden bouw</h1>
                     <h1>Speyz</h1>
                     <h1>Zeth</h1>
            </div>
        </div>


        <div className='mt-[30px] '>
            <img className='animate w-[150px] ml-[90%] ' src={coin} alt="" />
        </div>


        

        
</div>


        <div className='w-full flex justify-between bg-black px-[80px] '>
            <div className='mt-[35px] flex-flex-col'>
                <h1 className='text-[50px] font-bold text-white'>Let's turn some heads!</h1>
                <div className='flex gap-5 border-2 border-white rounded-2xl w-[130px] text-white px-4 py-3 mt-5'>
                      <h1 className=' text-white '>Contact</h1>
                      <i  class="ri-arrow-right-line"></i>
                </div>
            </div>



            <div className='flex text-white gap-10 mt-[40px]'>
                <div className='flex gap-4 flex-col'>
                    <h1 className='text-ms'>Social</h1>
                    <h1 className='text-xs'>INSTAGRAM</h1>
                    <h1 className='text-xs'>LINKDIN</h1>
                </div>

                <div className='flex gap-4 flex-col'>
                    <h1 className='text-ms'>Sitmep</h1>
                    <h1 className='text-xs'>HOME</h1>
                    <h1 className='text-xs'>PROJECTEN</h1>
                    <h1 className='text-xs'>OVER</h1>
                    <h1 className='text-xs'>CONTECT</h1>
                </div>

                <div className='flex gap-4 flex-col'>
                    <h1 className='text-ms'>Info</h1>
                    <h1 className='text-xs'>Algemene voorwaarden</h1>
                    <h1 className='text-xs'>Privacybeleid</h1>
                    <h1 className='text-xs'>Cookiebeleid</h1>
                </div>
            </div>


            
        </div>



        <div className='w-full   '> 
                <img className='w-full bg-black' src={bigtext} alt="" />
            </div>

    </div>
  )
}

export default Page2