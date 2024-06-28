import React from 'react'
import Navbar from './Navbar'

const Home = () => {

    const scrollToAboutMe = () => {
        const aboutMeSection = document.getElementById('About Me');
        aboutMeSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (

        <div id='Home' className='flex flex-col h-screen bg-gradient-to-b from-black to-slate-950'>
            <Navbar />
            <div className='flex flex-col-reverse lg:flex-row py-32 gap-10 lg:gap-32 justify-center items-center'>
                <div className='flex-col my-4 md:my-0 lg:my-32 mx-auto lg:mx-20'>
                    <span className='text-lg md:text-2xl font-semibold text-white'>HI THERE!</span><br />
                    <p className='text-3xl md:text-5xl md:mt-4 lg:text-7xl font-bold text-white'>I'M <span className='text-blue-500'>PRINCE SINGH</span></p><br />
                    <p className=' text-slate-200 text-xl lg:text-2xl font-semibold'>FULL STACK WEB DEVELOPER</p>
                    <button onClick={scrollToAboutMe} className='p-3 text-white border-2 border-cyan-400 mt-10 rounded-xl font-medium shadow-lg hover:bg-gradient-to-r from-blue-300 to-blue-400 inset-44'>
                        More About Me
                    </button>
                </div>
                <div className="flex justify-center items-center rounded-full h-44 w-44 md:h-72 md:w-72 lg:h-96 lg:w-96 bg-white overflow-hidden">
                    <img className=' w-fit mx-16 scale-90 hover:scale-110 transition-all' src="pic.png" alt="photo" />
                </div>
            </div>
        </div>
    )
}

export default Home