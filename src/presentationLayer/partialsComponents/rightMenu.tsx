import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineContainer,
    AiOutlineAlignRight,
    AiOutlineMan,
    AiOutlineLaptop,
    AiOutlineMail
} from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { UseRightMenuVariants } from "../framerVariants/rightMenu/useRightMenuVariants";
import { LiaCommentSolid } from "react-icons/lia";
import { motion, AnimatePresence } from "framer-motion";
import { usePageSectionController } from "../utils/usePageSectionController";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";

export const RightMenu: React.FC = (): JSX.Element => {
    const pageSectionController = usePageSectionController();
    const framerVariants = UseRightMenuVariants();

    const pageSection = useSelector((state: RootState) => state.pageSection.current);


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
                                <motion.div className="menu-wrapper" variants={framerVariants.menuVariants} initial='initial' animate='animate' exit='exit'>
                                    <div className="menu">
                                        <p>Menu</p>
                                        <ul>
                                            {links.map((link, index) => (
                                                <li className={`${pageSection === index ? 'active' : ''}`} onClick={() => pageSectionController.updateSection(index)} key={index}>
                                                    {link.icon}
                                                    <span style={{ color: '#999999' }}>{link.label}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="social">
                                            <p>Social</p>
                                            <div className="flex gap-[15px]">
                                                <Link className='link' to=''>
                                                    <FaXTwitter size={12} color="#999999" />
                                                </Link>
                                                <Link className='link' to=''>
                                                    <FaLinkedinIn size={13} color="#999999" />
                                                </Link>
                                                <Link className='link' to=''>
                                                    <FaGithub size={13} color="#999999" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div className="overly" variants={framerVariants.overlyVariants} initial='initial' animate='animate' exit='exit' onClick={handleVisibility} />
                            </>
                        )
                    }
                </AnimatePresence>
            </div>
        </>
    );
}