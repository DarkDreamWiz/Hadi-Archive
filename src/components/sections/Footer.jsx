import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Footer = () => {
    const signatureRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(signatureRef.current, {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: signatureRef.current,
                start: "top bottom-=20px"
            }
        });
    }, { scope: signatureRef });

    return (
        <footer className="bg-obsidian py-12 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-stark-white/40 text-sm font-sans tracking-wide">
                    &copy; 2026 The Hadi Archive. All Rights Reserved.
                </div>

                <div ref={signatureRef} className="flex items-center gap-4 group cursor-default">
                    <span className="text-xs uppercase tracking-[0.2em] text-stark-white/30 group-hover:text-revolutionary-red/70 transition-colors">
                        Designed & Built by
                    </span>
                    <span className="text-xl font-serif font-bold text-stark-white group-hover:text-revolutionary-red transition-colors duration-500">
                        AKASH
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
