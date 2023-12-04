import { Variants } from "framer-motion";

interface FramerVariants {
    spinnerVariants: Variants,
    sectionVariants: Variants
}

export const UseIntroductionVariants = (): FramerVariants => {
    const spinnerVariants = {
        initial: {
            rotate: 0
        },
        rotate: {
            rotate: 360,
            transition: {
                type: 'tweem',
                duration: 5,
                repeat: Infinity,
                ease: 'linear'
            }
        }
    };

    const sectionVariants = {
        initial: {
            y: 70,
            opacity: 0
        },
        slideUp: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 0.8,
                ease: 'easeOut',
            }
        }
    }

    return {
        spinnerVariants,
        sectionVariants
    }
}