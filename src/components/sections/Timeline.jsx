import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { biographyData } from '../../data/biography';

const TimelineItem = ({ date, title, description, size = "md", className = "" }) => {
    const itemRef = useRef(null);

    // Bento Sizes
    const sizeClasses = {
        sm: "col-span-1 row-span-1",
        md: "col-span-1 md:col-span-2 row-span-1",
        lg: "col-span-1 md:col-span-2 row-span-2",
        xl: "col-span-1 md:col-span-3 lg:col-span-4 row-span-2",
    };

    return (
        <div
            ref={itemRef}
            className={`bg-white/5 border border-white/10 p-6 md:p-8 rounded-lg backdrop-blur-sm hover:border-revolutionary-red/50 transition-colors duration-500 group ${sizeClasses[size]} ${className}`}
        >
            <span className="text-revolutionary-red font-bold text-sm md:text-base tracking-widest uppercase mb-2 block">
                {date}
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-stark-white mb-4 group-hover:text-revolutionary-red transition-colors">
                {title}
            </h3>
            <p className="text-stark-white/70 font-sans leading-relaxed text-sm md:text-base">
                {description}
            </p>
        </div>
    );
};

const Timeline = () => {
    const container = useRef();

    useGSAP(() => {
        const items = gsap.utils.toArray('.bento-item');

        items.forEach((item, i) => {
            gsap.fromTo(item,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }, { scope: container });

    // Extracting specific highlights for the Bento Grid based on user request
    // 1993 Birth, 2024 Revolution, 2025 Inqilab Moncho + others to fill grid

    return (
        <section id="timeline" ref={container} className="relative py-20 px-4 md:px-8 bg-obsidian z-10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 md:mb-24 border-b border-white/10 pb-8">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-stark-white">The Timeline</h2>
                    <p className="mt-4 text-stark-white/60 font-sans max-w-xl">
                        A chronological mapping of a revolutionary life, from theological roots to political martyrdom.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(200px,auto)]">
                    {/* 1993: Birth & Roots */}
                    <div className="bento-item col-span-1 md:col-span-2 row-span-2 bg-white/5 border border-white/10 p-8 rounded-lg">
                        <span className="text-revolutionary-red font-bold tracking-widest">1993</span>
                        <h3 className="text-4xl font-serif font-bold mt-2 mb-4">Origins</h3>
                        <p className="text-stark-white/70 mb-4">Born in Nalchity, Jhalokathi. Rooted in Islamic scholarship at Nesarabad Kamil Madrasa.</p>
                        <p className="text-stark-white/50 text-sm">"My security is in His hands."</p>
                    </div>

                    {/* 2012-2024: Formation */}
                    <div className="bento-item col-span-1 md:col-span-2 row-span-1 bg-white/5 border border-white/10 p-8 rounded-lg">
                        <span className="text-revolutionary-red font-bold tracking-widest">2012 — 2024</span>
                        <h3 className="text-2xl font-serif font-bold mt-1 mb-2">Intellectual Formation</h3>
                        <p className="text-stark-white/70 text-sm">Studied at Dhaka University. Became known as a "Protestant Poet" and advocate for an Insaf-based State.</p>
                    </div>

                    {/* 2024: Revolution */}
                    <div className="bento-item col-span-1 md:col-span-2 row-span-2 bg-gradient-to-br from-revolutionary-red/20 to-transparent border border-revolutionary-red/30 p-8 rounded-lg flex flex-col justify-end">
                        <span className="text-revolutionary-red font-bold tracking-widest text-lg">JULY — AUG 2024</span>
                        <h3 className="text-4xl font-serif font-bold mt-2 mb-4">The Revolution</h3>
                        <p className="text-stark-white/80">Coordinator for Rampura-Badda. Mobilized "non-traditional" protesters. Stormed the Ganabhaban.</p>
                    </div>

                    {/* 2024: Inqilab Moncho */}
                    <div className="bento-item col-span-1 md:col-span-1 row-span-1 bg-white/5 border border-white/10 p-6 rounded-lg">
                        <span className="text-revolutionary-red font-bold tracking-widest">AUG 13, 2024</span>
                        <h3 className="text-xl font-serif font-bold mt-1">Inqilab Moncho</h3>
                        <p className="text-stark-white/60 text-sm mt-2">A hybrid movement for political & cultural revival.</p>
                    </div>

                    {/* 2025: Campaigns */}
                    <div className="bento-item col-span-1 md:col-span-1 row-span-1 bg-white/5 border border-white/10 p-6 rounded-lg">
                        <span className="text-revolutionary-red font-bold tracking-widest">2025</span>
                        <h3 className="text-xl font-serif font-bold mt-1">The Van Rally</h3>
                        <p className="text-stark-white/60 text-sm mt-2">Campaigning on an open flatbed van against elite corruption.</p>
                    </div>

                    {/* 2025: Martyrdom */}
                    <div className="bento-item col-span-1 md:col-span-2 lg:col-span-2 row-span-1 bg-white/5 border border-white/10 p-8 rounded-lg flex flex-col justify-center">
                        <span className="text-revolutionary-red font-bold tracking-widest">DEC 18, 2025</span>
                        <h3 className="text-3xl font-serif font-bold mt-1">Martyrdom</h3>
                        <p className="text-stark-white/70">Largest spontaneous funeral in modern history.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
