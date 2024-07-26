
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
    // State to track which dropdown is open. `null` means no dropdown is open.
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // Handle opening a specific dropdown
    const toggleDropdown = (dropdown: string) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const handleSearch = () => {
        // Implement search functionality here
        console.log('Searching for:', searchTerm);
    };

    return (
        <header className={`font-montserrat sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-scrollnav shadow-lg' : 'bg-transparent'}`}>
            <nav className='mx-0 lg:mx-2 flex max-w-8xl items-center justify-between p-6'>
                <div className='flex items-center'>
                    <a href="" className='-m-1.5 p-1.5'>
                        <span className='sr-only'>Company</span>
                        <img src={logo} className='h-8' alt="" />
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
                        className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700' 
                        onClick={toggleMobileMenu} 
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span className='sr-only'>Open Main Menu</span>
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
                    <div className='relative'>
                        <input 
                            type='text' 
                            value={searchTerm} 
                            onChange={(e) => setSearchTerm(e.target.value)} 
                            placeholder='SEARCH' 
                            className='border border-white bg-transparent rounded-[50px] text-[12px] py-2 px-4 pr-14 mr-2 font-[700] text-white placeholder-gray-100'
                        />
                        <button 
                            type='button' 
                            onClick={handleSearch} 
                            className='absolute inset-y-0 right-2 flex items-center justify-center w-10  rounded-full pr-4'
                        >
                            <svg className="h-10 w-10 text-white " fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 5a6 6 0 106 6 6 6 0 00-6-6z" />
                            </svg>
                        </button>
                    </div>
                    <a href="" className='text-[13px] font-[600] leading-[15.6px] tracking-wide bg-signred border-2 border-signred text-navgrays rounded-[50px] py-2 px-6 hover:bg-transparent hover:text-navgrays hover:border-signred focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-300 ease-in-out '>SIGN IN</a>
                </div>
            </nav>
            {isMobileMenuOpen && (
                <div className='lg:hidden' role='dialog' aria-modal='true'>
                    <div className='fixed inset-0 z-10'></div>
                    <div className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-herobackg px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10'>
                        <div className='flex items-center justify-between'>
                            <a href="" className='-m-1.5 p-1.5'>
                                <span className='sr-only'>Your Company</span>
                                <img src={logo} className='h-8 w-auto' alt="" />
                            </a>
                            <button type='button' className='-m-2.5 rounded-md p-2.5 text-gray-700' onClick={toggleMobileMenu}>
                                <span className='sr-only'>Close Menu</span>
                                <svg className="h-6 w-6 text-greenbar" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className='mt-10 flow-root'>
                            <div className='-my-6 divide-y divide-gray-500/10'>
                                <div className='space-y-2 py-6'>
                                    <a href="#" className="-mx-3 block rounded-lg py-2 px-3 font-[600] leading-[24px] text-[16px] text-gray-300 hover:bg-gray-400/10">WHO WE ARE</a>
                                    <a href="#" className="-mx-3 block rounded-lg py-2 px-3 font-[600] leading-[24px] text-[16px] text-gray-300 hover:bg-gray-400/10">WORK WITH US</a>
                                    <a href="#" className="-mx-3 block rounded-lg py-2 px-3 font-[600] leading-[24px] text-[16px] text-gray-300 hover:bg-gray-400/10">NEWS</a>
                                </div>
                                <div className='py-6  text-center'>
                                    <div className='relative'>
                                        <input 
                                            type='text' 
                                            value={searchTerm} 
                                            onChange={(e) => setSearchTerm(e.target.value)} 
                                            placeholder='SEARCH' 
                                            className=' bg-dropdownbackg rounded-[50px] text-[12px] py-2 px-4 pr-14 mr-2 font-[700] text-white placeholder-gray-100'
                                        />
                                        <button 
                                            type='button' 
                                            onClick={handleSearch} 
                                            className='absolute inset-y-0 right-2 flex items-center justify-center w-10  rounded-full pr-4'
                                        >
                                            <svg className="h-10 w-10 text-white " fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 5a6 6 0 106 6 6 6 0 00-6-6z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className='mt-10'>
                                         <a href="" className='block w-full text-[13px] font-[700] leading-[15.6px] tracking-wide bg-signred border-2 border-signred text-scrollnav rounded-[50px] py-2 px-6 hover:bg-transparent hover:text-navgrays hover:border-signred focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-300 ease-in-out '>SIGN IN</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;
