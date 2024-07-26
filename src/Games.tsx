import lol from './assets/lol5.jpg';
import wildrift from './assets/wildrift.jpg';
import valo from './assets/valo2.jpg';
import lor from './assets/lor.jpg';
import teamfight from './assets/teamfight.jpg';
import esport from './assets/esport1.jpg';
import vct from './assets/vct2.jpg';
import movie from './assets/movie2.jpg';
import music from './assets/music1.jpg';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type ImageCarouselProps = {
    images: string[];
};

const Games: React.FC<ImageCarouselProps> = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false, 
                },
            },
        ],
    };
    return (
        <div className="relative isolate bg-scrollnav">
            <div className="mx-auto max-w-1xl pb-10 lg:pb-14 sm:pb-10 lg:py-2 lg:px-0 lg:mx-30 md:mx-20 md:py-60 sm:mx-0">
                <div className="relative z-10 lg:z-auto px-6 pt-1">
                    <div className='my-20'>
                        <h1 className='text-[40px] lg:text-[48px] leading[72px] font-[700] text-navgrays tracking-wide text-center lg:text-left'>Games</h1>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-x-0 lg:gap-x-6 gap-y-8 lg:gap-y-14 lg:-pt-0">
                        <div className='relative cursor-pointer h-[180px] lg:h-[310px] overflow-hidden rounded-[10px] hover:ring-2 hover:ring-navgrey'>
                            <img src={lol} className='h-full w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105' alt="halo" />
                        </div>
                        <div className='relative cursor-pointer h-[180px] lg:h-[310px] overflow-hidden rounded-[10px] hover:ring-2 hover:ring-navgrey'>
                            <img src={valo} className='h-full w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105' alt="halo" />
                        </div>
                        <div className='relative cursor-pointer h-[180px] lg:h-[310px] overflow-hidden rounded-[10px] hover:ring-2 hover:ring-navgrey'>
                            <img src={teamfight} className='h-full w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105' alt="halo" />
                        </div>
                        <div className='relative cursor-pointer h-[180px] lg:h-[310px] overflow-hidden rounded-[10px] hover:ring-2 hover:ring-navgrey'>
                            <img src={wildrift} className='h-full w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105' alt="halo" />
                        </div>
                        <div className='relative cursor-pointer h-[180px] lg:h-[310px] overflow-hidden rounded-[10px] hover:ring-2 hover:ring-navgrey'>
                            <img src={lor} className='h-full w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105' alt="halo" />
                        </div>
                    </div>
                </div> 
                <div className="relative z-10 lg:z-auto px-6">
                    <div className='my-10 lg:my-20'>
                        <h1 className='text-[40px] lg:text-[48px] leading[72px] font-[700] text-navgrays tracking-wide text-center lg:text-left'>Esports</h1>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-x-0 lg:gap-x-6 gap-y-8 lg:gap-y-14">
                        <div className='relative cursor-pointer h-[180px] lg:h-[310px] overflow-hidden rounded-[10px] hover:ring-2 hover:ring-navgrey'>
                            <img src={esport} className='h-full w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105' alt="halo" />
                        </div>
                        <div className='relative cursor-pointer h-[180px] lg:h-[310px] overflow-hidden rounded-[10px] hover:ring-2 hover:ring-navgrey'>
                            <img src={vct} className='h-full w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105' alt="halo" />
                        </div>
                    </div>
                </div> 
                <div className="relative z-10 lg:z-auto px-6">
                    <div className='my-10 lg:my-20'>
                        <h1 className='text-[40px] lg:text-[48px] leading[72px] font-[700] text-navgrays tracking-wide text-center lg:text-left'>Entertainment</h1>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-x-0 lg:gap-x-6 gap-y-8 lg:gap-y-14">
                        <div className='relative cursor-pointer h-[180px] lg:h-[310px] overflow-hidden rounded-[10px] hover:ring-2 hover:ring-navgrey'>
                            <img src={movie} className='h-full w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105' alt="halo" />
                        </div>
                        <div className='relative cursor-pointer h-[180px] lg:h-[310px] overflow-hidden rounded-[10px] hover:ring-2 hover:ring-navgrey'>
                            <img src={music} className='h-full w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105' alt="halo" />
                        </div>
                    </div>
                </div> 
                <div className="relative z-10 lg:z-auto px-6">
                    <div className="my-10 lg:my-20">
                        <h1 className="text-[40px] lg:text-[48px] leading-[72px] font-[700] text-navgrays tracking-wide text-center lg:text-left">Riot Forge</h1>
                    </div>
                    <Slider {...settings} className="lg:pt-0">
                        {images.map((image, index) => (
                            <div key={index} className="px-2 relative h-[180px] lg:h-[220px] rounded-lg">
                                {/* <img src={image} className="h-full w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-lg cursor-pointer" alt={`carousel-image-${index}`} /> */}
                                <img src={image} className="h-full w-full object-cover duration-300 rounded-lg cursor-pointer" alt={`carousel-image-${index}`} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            {/* <div className='absolute inset-0 rounded-[10px] border-4 border-transparent transition-all duration-300 ease-in-out hover:border-blue-500'></div> */}
        </div>
    )
}

export default Games;