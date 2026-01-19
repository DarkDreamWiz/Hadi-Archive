import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
    const container = useRef();
    const quoteRef = useRef();

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.fromTo(".hero-image",
            { scale: 1.2, opacity: 0 },
            { scale: 1, opacity: 0.4, duration: 2, ease: "power2.out" }
        )
            .fromTo(".hero-title",
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
                "-=1"
            )
            .fromTo(".hero-quote",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "-=0.5"
            );

        gsap.to(".hero-image", {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

    }, { scope: container });

    return (
        <section ref={container} className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-obsidian">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-10" />
                <img
                    src="/assets/jul_rev_bg.jpg"
                    alt="Sharif Osman Hadi"
                    className="hero-image w-full h-full object-cover grayscale opacity-40"
                />
                {/* If the graffiti image is better suited for hero, we can switch. Let's use graffiti for now as it's more striking? Or bio_text is likely text.
            Let's swap to graffiti based on user description "grainy black-and-white portrait" - the graffiti might be the best visual asset we have right now.
        */}
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-4">
                <h1 className="hero-title text-6xl md:text-9xl font-serif font-bold text-stark-white mb-6 mix-blend-difference">
                    Sharif Osman Hadi
                </h1>
                <div ref={quoteRef} className="hero-quote flex flex-col items-center gap-4">
                    <p className="text-2xl md:text-4xl font-bengali font-bold tracking-wide text-stark-white/90">
                        "বল বীর – বল উন্নত মম শির!"
                    </p>
                    <div className="w-px h-16 bg-revolutionary-red mt-4" />
                </div>            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 opacity-50 animate-bounce">
                <p className="text-xs uppercase tracking-widest">Scroll</p>
                <div className="w-1 h-1 bg-stark-white rounded-full" />
            </div>
        </section>
    );
};

export default Hero;
