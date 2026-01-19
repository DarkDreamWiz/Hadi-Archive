import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Martyrdom = () => {
    const container = useRef();

    useGSAP(() => {
        gsap.to(".martyrdom-bg", {
            scale: 1.1,
            scrollTrigger: {
                trigger: container.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    }, { scope: container });

    return (
        <section id="martyrdom" ref={container} className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-obsidian py-20">
            {/* Background Image (Parallax) */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/graffiti.png"
                    alt="Martyrdom Graffiti"
                    className="martyrdom-bg w-full h-full object-cover grayscale opacity-30"
                />
                <div className="absolute inset-0 bg-obsidian/80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <div className="mb-12">
                    <span className="block text-revolutionary-red font-bold tracking-[0.3em] uppercase mb-4">
                        Dec 18, 2025
                    </span>
                    <h2 className="text-5xl md:text-8xl font-serif text-stark-white font-bold mb-8">
                        The Final Farewell
                    </h2>
                    <p className="text-xl md:text-2xl text-stark-white/80 font-serif leading-relaxed italic">
                        "His death triggered the largest spontaneous funeral in modern Bangladeshi history."
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mt-20">
                    <div className="border-l border-revolutionary-red pl-6">
                        <h3 className="text-2xl font-bold text-stark-white mb-2">The Assassination</h3>
                        <p className="text-stark-white/60 mb-2">Location: In front of DR Tower, Bijoynagar</p>
                        <p className="text-stark-white/60">Time: 2:25 PM</p>
                        <p className="text-stark-white/60 mt-4">
                            Shot in the head after Friday prayers. A calculated act to silence a voice of the people.
                        </p>
                    </div>

                    <div className="border-l border-white/20 pl-6">
                        <h3 className="text-2xl font-bold text-stark-white mb-2">Posthumous Honors</h3>
                        <ul className="space-y-2 text-stark-white/60">
                            <li>• Buried next to National Poet Kazi Nazrul Islam</li>
                            <li>• "Shaheed Osman Hadi Memorial Book Fair" established</li>
                            <li>• "Hadi Road" named in Kishoreganj</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Martyrdom;
