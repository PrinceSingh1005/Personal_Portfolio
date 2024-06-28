import React from 'react'

const ExperienceCard = () => {

    const data = [
        {
            job: "Web Developer",
            position: "HackShlash . Member",
            date: "2022 - 2024",
            info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur libero rerum, illum ad quas sed ex autem. Voluptatum,.",
            pos: 70
        },
        {
            job: "National Institute Of Technology Patna, Bihar",
            position: "Somophore",
            date: "2022 - Present",
            info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur libero rerum, illum ad quas sed ex autem. Voluptatum,.",
            pos: 704
        },
        {
            job: "Sacred Hearts Senior Secondary Public School, U.P.",
            position: "High School/ Intermediate",
            date: "XII: 97.4%          X : 96.2%",
            info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur libero rerum, illum ad quas sed ex autem. Voluptatum,.",
            pos: 70
        },
        {
            job: "Web Developer",
            position: "",
            date: 2013,
            info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur libero rerum, illum ad quas sed ex autem. Voluptatum,.",
            pos: 704
        }
    ]
    return (
        <div className='px-10 lg:pl-24 py-10 flex flex-col justify-center items-center text-white'>
            <h1 className='text-3xl font-semibold my-10'>Experience & Education</h1>
            <div className='flex gap-20 flex-wrap'>
                { data.map((exp) => (
                    <div className='flex gap-4 lg:w-2/5'>
                        <div className={`rounded-full h-8 w-12 bg-blue-800 flex justify-center items-center absolute left-[${exp.pos-40}px] lg:left-[${exp.pos}px]`}>
                            <div className='h-3 w-3 bg-white'></div>
                        </div>
                        <div className='pl-10 ml-6 border-l border-white'>
                            <h1>{exp.job}</h1>
                            <h4>{exp.position}</h4>
                            <h4 className='text-sky-500'>{exp.date}</h4>
                            <p>{exp.info}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExperienceCard