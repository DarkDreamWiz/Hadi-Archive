import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Legacy = () => {
    const container = useRef();
    const scrollContainer = useRef();

    useGSAP(() => {
        const sections = gsap.utils.toArray('.legacy-card');

        // Calculate total width needed for scroll
        // Default horizontal scroll setup
        gsap.to(scrollContainer.current, {
            xPercent: -100 * (sections.length - 1) / sections.length * 1.1, // Adjust multiplier for spacing
            ease: "none",
            scrollTrigger: {
                trigger: container.current,
                pin: true,
                scrub: 1,
                // snap: 1 / (sections.length - 1), // Optional snapping
                end: () => "+=" + container.current.offsetWidth * 2 // Scroll distance
            }
        });

    }, { scope: container });

    const works = [
        {
            title: "Lava-y Lalshak",
            subtitle: "(Red Spinach in Lava)",
            type: "Poetry & Essays",
            desc: "A collection reflecting the fiery struggle of the oppressed.",
            image: "/assets/lava_book_cover.jpg" // Updated asset
        },
        {
            title: "Osman Hadi Bolchi",
            subtitle: "(This is Osman Hadi Speaking)",
            type: "Speeches",
            desc: "Revolutionary speeches and manifestos defining his vision.",
            image: "/assets/bolchi_bg.png", // Updated asset
            overlayText: "BIDROHI" // Requested overlay text
        },
        {
            title: "Resistance Art",
            subtitle: "Cultural Revival",
            type: "Movement",
            desc: "Leading the erasure of fascist symbols with revolutionary graffiti.",
            image: "/assets/graffiti.png" // Placeholder
        }
    ];

    return (
        <section id="legacy" ref={container} className="relative h-screen bg-obsidian overflow-hidden flex flex-col justify-center">
            <div className="absolute top-10 left-8 md:top-20 md:left-20 z-10">
                <h2 className="text-5xl md:text-8xl font-serif text-stark-white opacity-20 select-none">
                    LEGACY
                </h2>
            </div>

            <div ref={scrollContainer} className="flex gap-10 md:gap-20 px-8 md:px-20 w-fit">

                {/* Intro Card */}
                <div className="legacy-card w-[80vw] md:w-[40vw] flex-shrink-0 flex flex-col justify-center">
                    <h3 className="text-3xl md:text-5xl font-serif text-stark-white mb-6">
                        Words that<br />Ignited a Generation
                    </h3>
                    <p className="text-lg text-stark-white/70 max-w-md">
                        Sharif Osman Hadi was not just a leader of men, but a sculptor of ideas. His writings and speeches laid the intellectual foundation for the post-2024 state.
                    </p>
                    <div className="mt-8 flex items-center gap-4">
                        <span className="text-revolutionary-red">→</span>
                        <span className="uppercase tracking-widest text-sm">Scroll to explore</span>
                    </div>
                </div>

                {/* Work Cards */}
                {works.map((work, idx) => (
                    <div
                        key={idx}
                        className="legacy-card w-[85vw] md:w-[60vw] h-[60vh] md:h-[70vh] flex-shrink-0 relative group overflow-hidden border border-white/10 rounded-xl bg-white/5"
                    >
                        {/* Background Image / Overlay */}
                        <div className="absolute inset-0">
                            <img src={work.image} alt={work.title} className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700 grayscale" />
                            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />

                            {/* Custom Overlay Text for specific items */}
                            {work.overlayText && (
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none w-full text-center">
                                    <span className="text-[12vw] md:text-[8vw] font-serif font-black text-white/90 tracking-widest uppercase rotate-[-5deg] whitespace-nowrap block">
                                        {work.overlayText}
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full z-10">
                            <span className="text-revolutionary-red uppercase tracking-widest text-xs md:text-sm font-bold mb-2 block border-l-2 border-revolutionary-red pl-3">
                                {work.type}
                            </span>
                            <h4 className="text-4xl md:text-6xl font-serif font-bold text-stark-white mb-2 leading-tight">
                                {work.title}
                            </h4>
                            <p className="text-xl md:text-2xl font-serif italic text-stark-white/60 mb-6">
                                {work.subtitle}
                            </p>
                            <p className="text-stark-white/80 font-sans max-w-lg leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                {work.desc}
                            </p>
                        </div>
                    </div>
                ))}

                {/* End Spacer */}
                <div className="w-[10vw]"></div>

            </div>
        </section>
    );
};

export default Legacy;
