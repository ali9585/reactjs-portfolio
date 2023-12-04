import { useState } from "react";
import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineContainer,
    AiOutlineAlignRight,
    AiOutlineMan,
    AiOutlineLaptop,
    AiOutlineMail
} from "react-icons/ai";
import { LiaCommentSolid } from "react-icons/lia";

export const RightMenu: React.FC = (): JSX.Element => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return (
        <>
            <div className="right-menu">
                <div className="icon">
                    <div></div>
                    <div></div>
                </div>
                {isVisible &&
                    (
                        <>
                            <div className="menu-wrapper">
                                <div className="menu">
                                    <p>Menu</p>
                                    <ul>
                                        <li>
                                            <AiOutlineHome size={19} color='#999999' />
                                            <span style={{ color: '#999999' }}>Home</span>
                                        </li>
                                        <li>
                                            <AiOutlineUser size={19} color='#999999' />
                                            <span style={{ color: '#999999' }}>About</span>
                                        </li>
                                        <li>
                                            <AiOutlineContainer size={18} color='#999999' />
                                            <span style={{ color: '#999999' }}>Resume</span>
                                        </li>
                                        <li>
                                            <AiOutlineAlignRight size={18} color='#999999' />
                                            <span style={{ color: '#999999' }}>Services</span>
                                        </li>
                                        <li>
                                            <AiOutlineMan size={18} color='#999999' />
                                            <span style={{ color: '#999999' }}>Skills</span>
                                        </li>
                                        <li>
                                            <AiOutlineLaptop size={18} color='#999999' />
                                            <span style={{ color: '#999999' }}>Portfolio</span>
                                        </li>
                                        <li>
                                            <LiaCommentSolid size={18} color='#999999' />
                                            <span style={{ color: '#999999' }}>Testimonial</span>
                                        </li>
                                        <li>
                                            <AiOutlineMail size={18} color='#999999' />
                                            <span style={{ color: '#999999' }}>Contact</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="overly" />
                        </>
                    )
                }
            </div>
        </>
    );
}