import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { Link } from "react-router-dom";

export const LeftSidebar: React.FC = (): JSX.Element => {
    return (
        <>
            <div className='left-sidebar'>
                <div className='flex justify-between'>
                    <h2 className='logo'>Drake</h2>
                    <span className='title'>
                        Full Stacks
                        <br />
                        Developer
                    </span>
                </div>
                <img className='my-image' src={require('../assets/images/my-logo.png')} alt='me' />
                <div className='address'>
                    <h2 className='mail'>drake@gmail.com</h2>
                    <h2 className='location'>Based in Islamabad, Pak</h2>
                </div>
                <p className='disclaimer'>© 2023 Drake. All Rights Reserved</p>
                <div className='social-links'>
                    <Link className='link' to=''>
                        <FaXTwitter size={14} className='icon' />
                    </Link>
                    <Link className='link' to=''>
                        <FaLinkedinIn size={15} className='icon' />
                    </Link>
                    <Link className='link' to=''>
                        <FaInstagram size={18} className='icon' />
                    </Link>
                    <Link className='link' to=''>
                        <FaGithub size={17} className='icon' />
                    </Link>
                </div>
                <div className='hire-btn theme-btn'>
                    <GoMail size={19} className='icon' />
                    Hire Me!
                </div>
            </div>
        </>
    );
}