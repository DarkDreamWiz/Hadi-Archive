import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import MagneticButton from './MagneticButton';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const container = React.useRef();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useGSAP(() => {
        if (isOpen) {
            gsap.to(".menu-overlay", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 0.8,
                ease: "power4.inOut"
            });
            gsap.fromTo(".menu-link",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.4 }
            );
        } else {
            gsap.to(".menu-overlay", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                duration: 0.8,
                ease: "power4.inOut"
            });
        }
    }, { scope: container, dependencies: [isOpen] });

    return (
        <div ref={container} className="fixed top-0 left-0 w-full z-50 pointer-events-none">
            <div className="absolute top-8 right-8 pointer-events-auto">
                <MagneticButton onClick={toggleMenu}>
                    <div className="w-14 h-14 bg-stark-white text-obsidian rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-110">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </div>
                </MagneticButton>
            </div>

            <div className="menu-overlay fixed inset-0 bg-obsidian/95 backdrop-blur-md flex items-center justify-center pointer-events-auto" style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}>
                <nav className="flex flex-col items-center gap-8">
                    {['Biography', 'Timeline', 'Legacy', 'Martyrdom'].map((item, index) => (
                        <a
                            key={index}
                            href={`#${item.toLowerCase()}`}
                            className="menu-link text-5xl md:text-7xl font-serif text-stark-white hover:text-revolutionary-red transition-colors hover-trigger"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default Navigation;
