import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // Initial cleanup to ensure elements are hidden until moved
        gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });
        gsap.set(followerRef.current, { xPercent: -50, yPercent: -50 });

        const moveCursor = (e) => {
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0,
            });
            gsap.to(followerRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1, // Slight delay for "follower" feel
            });
        };

        const handleHoverStart = () => setIsHovering(true);
        const handleHoverEnd = () => setIsHovering(false);

        window.addEventListener('mousemove', moveCursor);

        // Add event listeners for hoverable elements
        const hoverables = document.querySelectorAll('button, a, .hover-trigger');
        hoverables.forEach((el) => {
            el.addEventListener('mouseenter', handleHoverStart);
            el.addEventListener('mouseleave', handleHoverEnd);
        });

        // Clean up
        return () => {
            window.removeEventListener('mousemove', moveCursor);
            hoverables.forEach((el) => {
                el.removeEventListener('mouseenter', handleHoverStart);
                el.removeEventListener('mouseleave', handleHoverEnd);
            });
        };
    }, []);

    useEffect(() => {
        if (isHovering) {
            gsap.to(cursorRef.current, { scale: 0, duration: 0.2 });
            gsap.to(followerRef.current, { scale: 3, backgroundColor: 'rgba(217, 4, 43, 0.2)', borderColor: 'transparent', duration: 0.2 });
        } else {
            gsap.to(cursorRef.current, { scale: 1, duration: 0.2 });
            gsap.to(followerRef.current, { scale: 1, backgroundColor: 'transparent', borderColor: '#D9042B', duration: 0.2 });
        }
    }, [isHovering]);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2 h-2 bg-revolutionary-red rounded-full pointer-events-none z-[9999] mix-blend-difference"
            />
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-8 h-8 border border-revolutionary-red rounded-full pointer-events-none z-[9998] mix-blend-difference"
            />
        </>
    );
};

export default CustomCursor;
