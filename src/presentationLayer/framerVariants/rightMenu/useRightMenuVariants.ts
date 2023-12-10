import { Variants } from "framer-motion";

interface FramerVariants {
    menuVariants: Variants,
    overlyVariants: Variants
}

export const UseRightMenuVariants = (): FramerVariants => {
    const menuVariants = {
        initial: {
            x: 500,
        },
        animate: {
            x: 0,
            transition: {
                type: "tween",
                duration: 0.18,
                ease: "backOut"
            }
        },
        exit: {
            x: 700,
            transition: {
                type: 'tween',
                duration: 0.16,
                ease: "backOut"
            }
        }
    };

    const overlyVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 0.2,
                ease: "easeOut",
                delay: 0.2
            }
        },
        exit: {
            opacity: 0,
            transition: {
                type: 'tween',
                duration: 0.2,
                delay: 0.17
            }
        }
    }

    return {
        menuVariants,
        overlyVariants
    };
}
