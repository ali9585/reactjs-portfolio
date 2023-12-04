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
import { usePageSectionController } from "../../appLayer/utils/usePageSectionController";
import { RootState } from "../redux/store/store";
import { useSelector } from 'react-redux';

export const RightSideBar: React.FC = (): JSX.Element => {
    const pageSectionController = usePageSectionController();

    const pageSection = useSelector((state: RootState) => state.pageSection.current);

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
            icon: <AiOutlineContainer size={19} color='#999999' />
        },
        {
            label: 'Services',
            icon: <AiOutlineAlignRight size={19} color='#999999' />
        },
        {
            label: 'Skills',
            icon: <AiOutlineMan size={19} color='#999999' />
        },
        {
            label: 'Portfolio',
            icon: <AiOutlineLaptop size={19} color='#999999' />
        },
        {
            label: 'Testimonial',
            icon: <LiaCommentSolid size={19} color='#999999' />
        },
        {
            label: 'Contact',
            icon: <AiOutlineMail size={19} color='#999999' />
        },
    ]

    return (
        <>
            <ul className="right-sidebar">
                {links.map((link, index) => (
                    <li className={`${pageSection === index ? 'active' : ''}`} onClick={() => pageSectionController.updateSection(index)} key={index}>
                        {link.icon}
                        <span>{link.label}</span>
                    </li>
                ))}
            </ul>
        </>
    );
}