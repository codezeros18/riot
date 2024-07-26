// import React from 'react';
// import eldenring from './assets/eldenring.jpg';
// import lol1 from './assets/lol.jpeg';
import lol3 from './assets/lol3.png';
import lol4 from './assets/lol4.jpg';
import viego from './assets/viego.jpg';
import valo from './assets/valo1.png';
import devs from './assets/devs.jpg';

function News(){
    return (
        <div className="relative isolate bg-herobackg"> 
            <div className="mx-auto max-w-1xl pb-10 lg:pb-14 sm:pb-10 lg:py-2 lg:px-0 lg:mx-30 md:mx-20 md:py-60 sm:mx-0">
                <div className="relative z-10 lg:z-auto p-6 md:p-0">
                    <div className='my-20'>
                        <h1 className='text-[40px] lg:text-[48px] leading[72px] font-[700] text-navgrays tracking-wide'>What's happening?</h1>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-7 grid-rows-1 gap-x-0 lg:gap-x-10 ">
                        <div className="col-span-4 cursor-pointer">
                            <img src={lol3} className='h-auto w-auto rounded-[10px] transform transition duration-200 hover:scale-120 hover:translate-y-[-5px]' alt="" />
                            <h1 className='text-[20px] lg:text-[31px] leading-[24px] llg:eading-[37px] text-navgrays font-[700] py-1 lg:py-4'>Swarm, Arena, and the value of Game Modes</h1>
                            <p className='text-[15px] leading-[22px] text-navgrays text-opacity-20 font-[800] tracking-wide pt-3 pb-6 lg:pt-0 lg:pb-0'>INSIDE RIOT</p>
                        </div>
                        <div className="col-span-3">
                            <div className='grid grid-cols-9 grid-rows-1 bg-blacktheme bg-opacity-30 rounded-[10px] transform transition duration-200 hover:scale-120 hover:translate-y-[-5px] cursor-pointer h-[160px] lg:h-[140px]'>
                                <div className='col-span-4 lg:col-span-5 px-4 lg:px-6 flex flex-col justify-center'>
                                    <h1 className='text-[18px] leading-[25px] text-navgrays font-[700] tracking-normal pb-4 pt-4 lg:pt-0 lg:pb-4'>SUPERPOWER ft. KISS OF LIFE and MARK TUAN</h1>
                                    <p className='text-[15px] leading-[22px] text-navgrays text-opacity-20 tracking-wide font-[800] pb-4 lg:pb-0 '>NEWS</p>
                                </div>
                                <div className='col-span-5 lg:col-span-4'>
                                    <img src={valo} className='h-full w-full object-cover rounded-[10px]' alt="" />
                                </div>
                            </div>       
                            <div className='grid grid-cols-9 grid-rows-1 bg-blacktheme bg-opacity-30 rounded-[10px] transform transition duration-200 hover:scale-120 hover:translate-y-[-5px] cursor-pointer h-[160px] lg:h-[140px] my-6'>
                                <div className='col-span-4 lg:col-span-5 px-4 lg:px-6 flex flex-col justify-center'>
                                    <h1 className='text-[18px] leading-[25px] text-navgrays font-[700] tracking-normal pb-4 pt-4 lg:pt-0 lg:pb-4'>Key Learnings from Beyond Ruination</h1>
                                    <p className='text-[15px] leading-[22px] text-navgrays text-opacity-20 tracking-wide font-[800] pb-4 lg:pb-0 '>INSIDE RIOT</p>
                                </div>
                                <div className='col-span-5 lg:col-span-4'>
                                    <img src={viego} className='h-full w-full object-cover rounded-[10px]' alt="" />
                                </div>
                            </div>      
                            <div className='grid grid-cols-9 grid-rows-1 bg-blacktheme bg-opacity-30 rounded-[10px] transform transition duration-200 hover:scale-120 hover:translate-y-[-5px] cursor-pointer h-[160px] lg:h-[140px] my-6'>
                                <div className='col-span-4 lg:col-span-5 px-4 lg:px-6 flex flex-col justify-center'>
                                    <h1 className='text-[18px] leading-[25px] text-navgrays font-[700] tracking-normal pb-4 pt-4 lg:pt-0 lg:pb-4'>Dev Update: Heightened Hexperience</h1>
                                    <p className='text-[15px] leading-[22px] text-navgrays text-opacity-20 tracking-wide font-[800] pb-4 lg:pb-0 '>NEWS</p>
                                </div>
                                <div className='col-span-5 lg:col-span-4'>
                                    <img src={devs} className='h-full w-full object-cover rounded-[10px]' alt="" />
                                </div>
                            </div>     
                            <div className='grid grid-cols-9 grid-rows-1 bg-blacktheme bg-opacity-30 rounded-[10px] transform transition duration-200 hover:scale-120 hover:translate-y-[-5px] cursor-pointer h-[160px] lg:h-[140px] my-6'>
                                <div className='col-span-4 lg:col-span-5 px-4 lg:px-6 flex flex-col justify-center'>
                                    <h1 className='text-[18px] leading-[25px] text-navgrays font-[700] tracking-normal pb-4 pt-4 lg:pt-0 lg:pb-4'>The Hexolution is coming to Wild Rift!</h1>
                                    <p className='text-[15px] leading-[22px] text-navgrays text-opacity-20 tracking-wide font-[800] pb-4 lg:pb-0 '>NEWS</p>
                                </div>
                                <div className='col-span-5 lg:col-span-4'>
                                    <img src={lol4} className='h-full w-full object-cover rounded-[10px]' alt="" />
                                </div>
                            </div>               
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News;