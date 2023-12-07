import { Variants } from "framer-motion";

interface FramerVariants {
    menuVariants: Variants
}

export const UseRightMenuVariants = (): FramerVariants => {
    const menuVariants = {
        initial: {
            x: 0,
        },
        exit: {
            x: 800,
            transition: {
                type: 'tween',
                duration: 0.3,
                ease: 'easeIn'
            }
        }
    };

    return {
        menuVariants
    };
}