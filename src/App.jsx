import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CustomCursor from './components/ui/CustomCursor';
import Navigation from './components/ui/Navigation';
import Hero from './components/sections/Hero';
import Timeline from './components/sections/Timeline';
import Legacy from './components/sections/Legacy';
import Martyrdom from './components/sections/Martyrdom';
import Footer from './components/sections/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Integrate Lenis with GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            gsap.ticker.remove(lenis.raf);
        };
    }, []);

    return (
        <div className="bg-obsidian min-h-screen text-stark-white font-sans selection:bg-revolutionary-red selection:text-stark-white cursor-none overflow-x-hidden">
            <CustomCursor />
            <Navigation />

            <main className="w-full">
                <Hero />
                <Timeline />
                <Legacy />
                <Martyrdom />
            </main>

            <Footer />
        </div>
    );
}

export default App;
