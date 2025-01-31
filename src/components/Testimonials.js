import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
    const testimonialsData = [
        {
            content: "First testimonial: As someone who mainly designs in the browser, I've been a casual user of Figma.",
            author: "Srinivas",
            work: "Developer",
            image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png",
        },
        {
            content: "Second testimonial: I've been a casual user of Figma, but as soon as I saw and started playing with FlowBite, my mind was blown and became so productive.",
            author: "Darshan",
            work: "CTO at Microsoft",
            image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
        },
        {
            content: "Third testimonial: As someone who mainly designs in the browser, I've been a casual user of Figma.",
            author: "Shetty",
            work: "Worker",
            image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
        },
        {
            content: "Fourth testimonial: As soon as I saw and started playing with FlowBite, my mind was blown and became so productive.",
            author: "Bonnie Green",
            work: "CTO at Microsoft",
            image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false); // For transition effect

    // Move to the next testimonial
    const handleNext = () => {
        setFade(true); 
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
            setFade(false); 
        }, 300);
    };

    // Move to the previous testimonial
    const handlePrev = () => {
        setFade(true); 
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
            );
            setFade(false); 
        }, 300);
    };

    // Auto-scroll functionality
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         handleNext();
    //     }, 3000); 
    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div className="my-10 text-center bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIS6hfIuViVT1CS4zuf-NIwaJCx5z3mKJa7A&s')] bg-cover bg-center">
            <h2 className="text-2xl font-bold dark:text-white text-white pt-6">Testimonials</h2>
            <p className="text-xl text-white mt-2">
                Explore the whole collection of open-source web components and elements built
                with the utility classes from Tailwind.
            </p>
            
            <div className="flex justify-center items-center w-full">
                <div className="w-2/3 dark:bg-gray-800 p-6 h-60 flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out"
                    style={{ opacity: fade ? 0 : 1 }}>
                    
                    {/* Testimonial Content */}
                    <p className="text-lg text-white">{`"${testimonialsData[currentIndex].content}"`}</p> 
                    
                    <div className="flex items-center justify-center mt-4">
                        <img
                            className="w-12 h-12 rounded-full mr-4"
                            src={testimonialsData[currentIndex].image}
                            alt={testimonialsData[currentIndex].author}
                        />
                        <div>
                            <p className="text-white font-semibold capitalize">
                                {testimonialsData[currentIndex].author}
                            </p>
                        </div>
                        <div>
                            <p className="px-2 text-white font-bold">|</p>
                        </div>
                        <div>
                            <p className="text-white capitalize">{testimonialsData[currentIndex].work}</p>
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="mt-4 flex gap-4">
                        <button className="p-2 text-white" onClick={handlePrev}>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <button className="p-2 text-white" onClick={handleNext}>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
