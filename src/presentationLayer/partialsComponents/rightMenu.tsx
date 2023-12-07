import React, { useState } from "react";
import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineContainer,
    AiOutlineAlignRight,
    AiOutlineMan,
    AiOutlineLaptop,
    AiOutlineMail
} from "react-icons/ai";
import { UseRightMenuVariants } from "../framerVariants/rightMenu/useRightMenuVariants";
import { LiaCommentSolid } from "react-icons/lia";
import { motion, AnimatePresence } from "framer-motion";

export const RightMenu: React.FC = (): JSX.Element => {
    const framerVariants = UseRightMenuVariants();

    const [isVisible, setIsVisible] = useState<boolean>(false);
    
    const links = [
        {
            label: 'Home',
            icon: <AiOutlineHome size={19} color='#999999' />
        },
        {
            label: 'About',
            icon: <AiOutlineUser size={19} color='#999999' />
        },
        {
            label: 'Resume',
            icon: <AiOutlineContainer size={18} color='#999999' />
        },
        {
            label: 'Services',
            icon: <AiOutlineAlignRight size={18} color='#999999' />
        },
        {
            label: 'Skills',
            icon: <AiOutlineMan size={18} color='#999999' />
        },
        {
            label: 'Portfolio',
            icon: <AiOutlineLaptop size={18} color='#999999' />
        },
        {
            label: 'Testimonial',
            icon: <LiaCommentSolid size={18} color='#999999' />
        },
        {
            label: 'Contact',
            icon: <AiOutlineMail size={18} color='#999999' />
        },
    ]

    const handleVisibility = () => {
        setIsVisible(!isVisible);
    }

    return (
        <>
            <div className="right-menu">
                <div className="icon" onClick={handleVisibility}>
                    <div></div>
                    <div></div>
                </div>
                <AnimatePresence mode="wait">
                    {isVisible &&
                        (
                            <>
                                <motion.div className="menu-wrapper" variants={framerVariants.menuVariants} animate='initial' exit='exit'>
                                    <div className="menu">
                                        <p>Menu</p>
                                        <ul>
                                            {links.map((link, index) => (
                                                <li key={index}>
                                                    {link.icon}
                                                    <span style={{ color: '#999999' }}>{link.label}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                                <motion.div className="overly" onClick={handleVisibility} />
                            </>
                        )
                    }
                </AnimatePresence>
            </div>
        </>
    );
}