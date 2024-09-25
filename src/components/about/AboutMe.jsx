import React from "react";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
    // Set up the Intersection Observer
    const { ref, inView } = useInView({
        threshold: 0.1, // Trigger when 10% of the section is in view
        triggerOnce: false, // Only trigger once for the effect
    });

    return (
        <section className="text-white">
            <div
                ref={ref}
                className={`transition-all duration-1500 ${inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
            >
                <p className={`text-sm leading-relaxed text-gray-400 mb-4 w-[600px] transition-opacity duration-1000 delay-300 ${inView ? 'opacity-100' : 'opacity-0'}`}>
                    Hi, I am Talha, a recent graduate with a BS in Software Engineering
                    from Lahore Garrison University. I’m passionate about full-stack web
                    development and skilled in using Next.js for both front-end and
                    back-end solutions. My expertise extends to Node.js and Express.js for
                    robust server-side development, with MongoDB and PostgreSQL handling
                    diverse data needs. I focus on creating dynamic, responsive, and
                    visually engaging web applications, and am proficient in JavaScript
                    (ES6), CSS3, and Tailwind CSS. Additionally, I leverage Firebase for
                    real-time functionalities and Git for effective project management and
                    collaboration.
                </p>

                <p className={`text-sm font-semibold mb-2 text-gray-400 transition-opacity duration-1000 delay-600 ${inView ? 'opacity-100' : 'opacity-0'}`}>
                    Here are a few technologies I’ve been working with recently:
                </p>

                <ul className="grid grid-cols-2 gap-2 text-gray-300 text-sm list-disc pl-5">
                    {['Next.js / TypeScript', 'React.js', 'Tailwind CSS', 'PostgreSQL', 'Node.js', 'Express.js', 'MongoDB'].map((tech, index) => (
                        <li
                            key={tech}
                            className={`transition-opacity duration-1000 delay-[${(index + 1) * 100}] ${inView ? 'opacity-100' : 'opacity-0'}`}
                        >
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default AboutMe;
