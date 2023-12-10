import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { GrClose } from "react-icons/gr";
import { motion, AnimatePresence } from "framer-motion";
import { UseInfoModalVariants } from "../framerVariants/infoModal/useInfoModalVariants";

interface Props {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const InfoModal: React.FC<Props> = ({ show, setShow }): JSX.Element => {
    const framerVariants = UseInfoModalVariants();

    const closeModalHandler = () => {
        setShow(false);
    }

    return (
        <>
            {
                createPortal(
                    <>
                        <AnimatePresence mode='wait'>
                            {show && (
                                <motion.div
                                    className="modal-bg"
                                    onClick={closeModalHandler}
                                    variants={framerVariants.overlyVariants}
                                    initial='initial'
                                    animate='animate'
                                    exit='exit'
                                >
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <AnimatePresence mode='wait'>
                            {show && (
                                <motion.div className="modal" variants={framerVariants.modalVariants} initial='initial' animate='animate' exit='exit'>
                                    <div className="icon-wrapper" onClick={closeModalHandler}>
                                        <GrClose size={20} color="#fff" />
                                    </div>
                                    <div className="overview">
                                        <h2>Overview</h2>
                                        <p>Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.</p>
                                    </div>
                                    <div className="techstack">
                                        <h2>Tech Stack</h2>
                                        <div className="inner">
                                            <span>Laravel</span>
                                            <span>React</span>
                                            <span>Framer motion</span>
                                            <span>Laravel</span>
                                            <span>React</span>
                                            <span>Framer motion</span>
                                            <span>Laravel</span>
                                            <span>React</span>
                                            <span>Framer motion</span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </>
                    ,
                    document.body
                )
            }
        </>
    );
}