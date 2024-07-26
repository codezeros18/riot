import { useState, useEffect } from 'react';
import logo from './assets/riotlogo.png';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleDropdown = (dropdown: string) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleSearch = () => {
        console.log('Searching for:', searchTerm);
    };

    return (
        <header className={`font-montserrat sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-scrollnav shadow-lg' : 'bg-transparent'}`}>
            <nav className='mx-0 lg:mx-2 flex max-w-8xl items-center justify-between p-6'>
                <div className='flex items-center'>
                    <a href="" className='-m-1.5 p-1.5'>
                        <span className='sr-only'>Company</span>
                        <img src={logo} className='h-8' alt="Company Logo" />
                    </a>
                    <div className='hidden lg:flex lg:gap-x-4 lg:justify-start lg:ml-14'>
                        <div className='relative'>
                            <button 
                                type='button' 
                                className='flex items-center gap-x-1 text-[13px] font-[600] leading-[15.6px] tracking-wide text-navgrays hover:bg-navgrey hover:bg-opacity-30 py-2 px-4 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-300 ease-in-out' 
                                aria-expanded={openDropdown === 'whoWeAre'} 
                                onClick={() => toggleDropdown('whoWeAre')}
                            >
                                WHO WE ARE
                                <svg className="h-4 w-4 flex-none text-navgrays hover:text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </button>
                            {openDropdown === 'whoWeAre' && (
                                <div className='absolute -left-4 top-full z-10 mt-3 w-screen max-w-[250px] overflow-hidden rounded-[8px] bg-dropdownbackg shadow-lg ring-1 ring-gray-900/5 border-t-4 border-signred'>
                                    <div className='p-4'>
                                        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-navgrey hover:bg-opacity-30">
                                            <div className="flex-auto">
                                                <a href="#" className="block font-[600] text-navgrey tracking-wide hover:text-dropnav leading-[16px] text-[12px]">
                                                    About Riot
                                                    <span className="absolute inset-0"></span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-navgrey hover:bg-opacity-30">
                                            <div className="flex-auto">
                                                <a href="#" className="block font-[600] text-navgrey tracking-wide hover:text-dropnav leading-[16px] text-[12px]">
                                                    Diversity & Inclusion
                                                    <span className="absolute inset-0"></span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-navgrey hover:bg-opacity-30">
                                            <div className="flex-auto">
                                                <a href="#" className="block font-[600] text-navgrey tracking-wide hover:text-dropnav leading-[16px] text-[12px]">
                                                    Social Impact
                                                    <span className="absolute inset-0"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className='relative'>
                            <button 
                                type='button' 
                                className='flex items-center gap-x-1 text-[13px] font-[600] leading-[15.6px] tracking-wide text-navgrays hover:bg-navgrey hover:bg-opacity-30 py-2 px-4 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-300 ease-in-out' 
                                aria-expanded={openDropdown === 'workWithUs'} 
                                onClick={() => toggleDropdown('workWithUs')}
                            >
                                WORK WITH US
                                <svg className="h-4 w-4 flex-none text-navgrays hover:text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </button>
                            {openDropdown === 'workWithUs' && (
                                <div className='absolute -left-4 top-full z-10 mt-3 w-screen max-w-[250px] overflow-hidden rounded-[8px] bg-dropdownbackg shadow-lg ring-1 ring-gray-900/5 border-t-4 border-signred'>
                                    <div className='p-4'>
                                        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-navgrey hover:bg-opacity-30 ">
                                            <div className="flex-auto">
                                                <a href="#" className="block font-[600] text-navgrey tracking-wide hover:text-dropnav leading-[16px] text-[12px]">
                                                    Jobs
                                                    <span className="absolute inset-0"></span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-navgrey hover:bg-opacity-30">
                                            <div className="flex-auto">
                                                <a href="#" className="block font-[600] text-navgrey tracking-wide hover:text-dropnav leading-[16px] text-[12px]">
                                                    Benefit
                                                    <span className="absolute inset-0"></span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-navgrey hover:bg-opacity-30">
                                            <div className="flex-auto">
                                                <a href="#" className="block font-[600] text-navgrey tracking-wide hover:text-dropnav leading-[16px] text-[12px]">
                                                    Offices
                                                    <span className="absolute inset-0"></span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-navgrey hover:bg-opacity-30">
                                            <div className="flex-auto">
                                                <a href="#" className="block font-[600] text-navgrey tracking-wide hover:text-dropnav leading-[16px] text-[12px]">
                                                    Life At Riot
                                                    <span className="absolute inset-0"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <a href="" className='text-[13px] font-[600] leading-[15.6px] tracking-wide text-navgrays hover:bg-navgrey hover:bg-opacity-30 py-2 px-4 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-300 ease-in-out'>NEWS</a>
                    </div>
                </div>
                <div className='flex lg:hidden'>
                    <button 
                        type='button' 
                        className='inline-flex items-center justify-center rounded-md p-2 text-navgrays hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' 
                        onClick={toggleMobileMenu}
                    >
                        <span className='sr-only'>Open main menu</span>
                        {!isMobileMenuOpen ? (
                            <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
                            </svg>
                        ) : (
                            <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                            </svg>
                        )}
                    </button>
                </div>
                <div className='hidden lg:flex lg:gap-x-4 lg:justify-end lg:ml-14'>
                    <div className='relative'>
                        <input
                            type='text'
                            className='w-full py-2 px-4 rounded-[8px] bg-gray-100 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                            placeholder='Search...'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button
                            type='button'
                            className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500'
                            onClick={handleSearch}
                        >
                            <svg
                                className='h-4 w-4'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                aria-hidden='true'
                            >
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-4.35-4.35m-3.3 0A7.5 7.5 0 1117.5 10.5 7.5 7.5 0 0113.35 16.65z' />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
