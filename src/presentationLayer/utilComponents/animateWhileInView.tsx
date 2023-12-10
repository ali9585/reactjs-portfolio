import React from 'react';
import { motion } from 'framer-motion';

interface Props {
    children: React.ReactNode,
    horizontal?: boolean,
}

export const AnimateWhileInView: React.FC<Props> = ({ children, horizontal = false }): JSX.Element => {

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: !horizontal ? 35 : 0, x: horizontal ? 35 : 0 }}
                whileInView={{ opacity: 1, y: 0, x: 0, transition: { type: 'spring', mass: 0.7, stiffness: 150 } }}
                viewport={{ once: true }}
            >
                {children}
            </motion.div>
        </>
    );
};