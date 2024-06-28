import { useState } from 'react'
import { Link } from 'react-scroll'
import { Squash as Hamburger } from 'hamburger-react'

const Navbar = () => {
    const link = ['Home', 'About Me', 'Contact', 'Resume'];
    const [isOpen, setOpen] = useState(false)

    return (
        <div className='lg:fixed absolute lg:top-0 lg:left-0 flex z-10 justify-center h-full w-full lg:h-14 text-3xl lg:text-sm font-bold overflow-x-hidden '>
            <div className={`bg-slate-800 flex flex-col lg:flex-row justify-center items-center text-white transition-transform duration-500 ease-linear ${isOpen ? 'translate-x-0 h-full w-full' : 'translate-x-[100vw] lg:translate-x-0 h-full w-full'}`}>
                <img className='h-24 lg:ml-64 lg:h-10 rounded-full shadow-white shadow-md' src="Logo.jpg" alt="logo" />
                <ul className={`flex lg:flex-row flex-col gap-10 py-16 lg:py-0 mx-auto lg:px-3`}>
                    {link.map((li) => (
                        <li className='cursor-pointer hover:text-blue-300 text-md' key={li}>
                            <Link
                                activeClass='active'
                                to={li}
                                spy={true}
                                smooth={true}
                                offset={-1}
                                duration={500}
                                onClick={() => setOpen(false)}
                            >
                                {li}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='absolute z-20 right-1 lg:hidden'>
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
        </div>
    )
}

export default Navbar
