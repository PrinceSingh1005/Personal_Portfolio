import React from 'react';
import NumberBorderDiv from './NumberBorderDiv';

const Skill = () => {
  const skills = [
    {
      percentage: 90,
      Skill: "HTML"
    },
    {
      percentage: 70,
      Skill: "Javascript"
    },
    {
      percentage: 90,
      Skill: "CSS"
    },
    {
      percentage: 80,
      Skill: "React Js"
    },
    {
      percentage: 80,
      Skill: "Node Js"
    },
    {
      percentage: 80,
      Skill: "C++"
    },
    {
      percentage: 60,
      Skill: "Java"
    },
    {
      percentage: 80,
      Skill: "Python"
    },
  ];

  return (
    <div className='lg:pl-24 lg:py-16 lg:w-2/3 text-center mx-auto'>
      <h1 className='text-3xl font-semibold my-5'>My Skills</h1>
      <div className='flex w-1/2 mx-auto my-10 gap-x-8 gap-y-5 flex-wrap'>
        {skills.map((ele, index) => (
          <div key={index} className='w-fit flex flex-col items-center my-3'>
            <NumberBorderDiv percentage={ele.percentage} />
            <h3>{ele.Skill}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
