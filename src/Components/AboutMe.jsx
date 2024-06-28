import React, { useState, useEffect } from 'react'
import ExperienceCard from './ExperienceCard'
import Skill from './Skills';

const AboutMe = () => {
    const info = [
        {
            Type: "Name",
            name: "Prince Singh",
        },
        {
            Type: "Email",
            name: "12prince345singh@gmail.com",
        },
        {
            Type: "Address",
            name: "Girdharipur Road, Nagariya Parikshit, Shanti Nagar colony, Bareilly, UP.",
        },
        {
            Type: "Date_of_Birth",
            name: "10-May-2003",
        },
        {
            Type: "Zip_Code",
            name: "243122",
        },
        {
            Type: "Phone",
            name: "6397823309",
        },
    ]

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const aboutMeSection = document.getElementById('About Me');
            if (aboutMeSection) {
                const topPosition = aboutMeSection.getBoundingClientRect().top;
                const bottomPosition = aboutMeSection.getBoundingClientRect().bottom;
                const screenHeight = window.innerHeight;

                // If the top of the section is visible and the bottom of the section is not
                if (topPosition < screenHeight && bottomPosition >= 0) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        // <div id='About Me' className={`h-fit bg-gradient-to-b from-slate-950 to-slate-800 ${isVisible ? 'translate-x-0' : 'translate-x-[990px]'}`}>
        <div id='About Me' className={`pt-10 h-fit bg-gradient-to-b from-slate-950 to-slate-800`}>
            <p className='text-5xl font-bold text-white text-center'>ABOUT <span className='text-blue-500'>ME</span></p>
            <div className="flex flex-col lg:flex-row text-white px-10">
                <div className="flex justify-center items-center h-44 w-44 md:h-72 md:w-72 lg:h-96 lg:w-96 overflow-hidden">
                    <img className=' w-fit mx-16 scale-120' src="pic2.png" alt="photo" />
                </div>
                <div className='lg:pl-20 py-0 flex flex-col justify-center items-center lg:w-3/5'>
                    <h1 className='text-3xl font-semibold my-5'>Personal Infos</h1>
                    <div className='flex gap-4'>
                        <ul>
                            {info.map((i, index) => (
                                <div key={index} className="flex flex-row">
                                    <ul className='flex w-4/5'>
                                        <li className='my-3 font-medium text-white w-1/4'>{i.Type}</li>
                                        <li className='my-3 font-medium text-white w-3/4'>{i.name}</li>
                                    </ul>
                                </div>
                            ))}
                        </ul>

                    </div>
                </div>

            </div>
            <ExperienceCard />
            <Skill />
        </div>
    )
}

export default AboutMe