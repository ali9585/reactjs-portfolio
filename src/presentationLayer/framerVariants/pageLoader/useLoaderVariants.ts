import { Variants } from "framer-motion";

interface FramerVariants {
    loaderVariants: Variants
}

export const UsePageLoaderVariants = (): FramerVariants => {
    const loaderVariants = {
        initial: {
            opacity: 1,
        },
        exit: {
            opacity: 0,
            transition: {
                type: 'tween',
                duration: 1.5,
                ease: 'ease'
            }
        }
    };

    return {
        loaderVariants
    };
}