import React, { useState, useEffect, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const NumberBorderDiv = ({ percentage }) => {
    const [currentPercentage, setCurrentPercentage] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        let interval;
        
        const startAnimation = () => {
            setCurrentPercentage(0);  // Reset the percentage
            let start = 0;
            interval = setInterval(() => {
                start += 1;
                setCurrentPercentage((prev) => {
                    if (prev + 1 >= percentage) {
                        clearInterval(interval);
                        return percentage;
                    }
                    return prev + 1;
                });
            }, 10); // Adjust the speed of the increment as needed
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startAnimation();
                } else {
                    clearInterval(interval);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            clearInterval(interval);
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [percentage]);

    return (
        <div ref={ref} className='border-blue-900 h-10 w-10 md:h-20 md:w-20 transition-all duration-700 ease-in-out'>
            <CircularProgressbar
                value={currentPercentage}
                text={`${currentPercentage}%`}
                styles={buildStyles({
                    rotation: 0,
                    strokeLinecap: 'round',
                    textSize: '24px',
                    pathTransitionDuration: 0.5,
                    pathColor: `rgba(30,144,255, ${currentPercentage / 100})`,
                    textColor: '#fff',
                    trailColor: '#fff',
                    backgroundColor: '#fff',
                })}
            />
        </div>
    );
};

export default NumberBorderDiv;
