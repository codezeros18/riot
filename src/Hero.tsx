import loltext from './assets/loltext.png';
// import { ArrowRightIcon } from '@heroicons/react/solid';

function Hero(){
    return (
        // min-h-screen
        <div className="relative isolate"> 
            <div className="mx-auto max-w-1xl pb-10 lg:pb-14 sm:pb-10 lg:py-2 lg:px-0 lg:mx-10 md:mx-20 md:py-60 sm:mx-0">
                <div className="relative z-10 lg:z-auto p-6 md:p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 ">
                        <div className='text-center flex flex-col items-center'>
                            <img src={loltext} className='h-auto w-auto lg:w-[500px]' alt="" />
                            <h1 className='text-headgrey text-[31px] font-[700] leading-[37px] tracking-normal pb-14 lg:pb-4'>Conquer the Rift through Hextech <br /> in patch 5.2</h1>
                            <p className='max-w-7xl tracking-tight font-[400] text-navgrays text-opacity-70 text-[20px] leading-[24px] pb-10 hidden md:block'>Fresh out of the forges come the technology and champions <br /> that will revolutionize your battles!</p>
                            <button className="button bg-gradient-to-r from-rightblue to-leftblue text-white text-[24px] lg:text-[31px] py-3 px-3 lg:py-4 lg:px-6 rounded-[20px] tracking-widest font-poppins font-[700] leading-[31px] transition ease-in-out duration-300 hover:shadow-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-leftblue hover:from-rightblueHover hover:via-leftblueHover hover:to-whiteHover">
                                <a href="" className="relative inline-flex items-center space-x-3">
                                <span className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 bg-black rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-black" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                    </svg>

                                </span>
                                <span className="relative z-10 tracking-wide">Innovate now!</span>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;