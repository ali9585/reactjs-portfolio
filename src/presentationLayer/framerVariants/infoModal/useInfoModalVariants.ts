import { Variants } from "framer-motion";

interface FramerVariants {
    overlyVariants: Variants,
    modalVariants: Variants
}

export const UseInfoModalVariants = (): FramerVariants => {
    const overlyVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 0.2
            }
        },
        exit: {
            opacity: 0,
            transition: {
                type: 'tween',
                duration: 0.2,
                delay: 0.2
            }
        }
    };

    const modalVariants = {
        initial: {
            marginTop: 50,
            opacity: 0
        },
        animate: {
            marginTop: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 0.2,
                delay: 0.2
            }
        },
        exit: {
            marginTop: 50,
            opacity: 0,
            ease: 'easeInOut'
        }
    }

    return {
        overlyVariants,
        modalVariants
    }
}