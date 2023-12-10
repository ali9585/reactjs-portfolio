import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SectionBadge } from "../../../utilComponents/sectionBadge";
import { LiaGripVerticalSolid } from "react-icons/lia";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { AnimateWhileInView } from "../../../utilComponents/animateWhileInView";
import { InfoModal } from "../../../utilComponents/infoModal";
import { useScrollController } from "../../../utils/useScrollCotroller";

const Portfolio: React.FC = (): JSX.Element => {
    const scrollController = useScrollController();

    const [showModal, setShowModal] = useState<boolean>(false);

    const showModalHandler = () => {
        setShowModal(true);
    }

    useEffect(() => {
        if (showModal) {
            scrollController.disableScroll();
        } else {
            scrollController.enableScroll();
        }
    }, [showModal]);

    return (
        <>
            <div className="portfolio section">
                <AnimateWhileInView>
                    <SectionBadge title='Portfolio' icon={<LiaGripVerticalSolid className='icon' size={14} color='#fff' />} />
                </AnimateWhileInView>
                <AnimateWhileInView>
                    <h1 className="section-title">
                        Featured <span>Projects</span>
                    </h1>
                </AnimateWhileInView>
                <div className="projects">
                    <AnimateWhileInView>
                        <div className="item first">
                            <Link to=''>
                                <div className="image">
                                    <img src="https://wpriverthemes.com/HTML/drake/assets/images/portfolio3.jpg" alt="" />
                                    <div className="info">
                                        <div className="items flex gap-[35px]">
                                            <div onClick={showModalHandler}>
                                                <BsFillInfoCircleFill size={55} color="#fff" />
                                            </div>
                                            <div>
                                                <FaGithub size={55} color="#fff" />
                                            </div>
                                            <div className="link">
                                                <FiExternalLink size={55} color="#fff" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <h2>
                                <Link to='' className="title">Bureau - Architecture Studio Website</Link>
                            </h2>
                        </div>
                    </AnimateWhileInView>
                    <AnimateWhileInView>
                        <div className="item">
                            <Link to=''>
                                <div className="image">
                                    <img src="https://wpriverthemes.com/HTML/drake/assets/images/portfolio3.jpg" alt="" />
                                    <div className="info">
                                        <div className="items flex gap-[35px]">
                                            <div onClick={showModalHandler}>
                                                <BsFillInfoCircleFill size={55} color="#fff" />
                                            </div>
                                            <div>
                                                <FaGithub size={55} color="#fff" />
                                            </div>
                                            <div className="link">
                                                <FiExternalLink size={55} color="#fff" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <h2>
                                <Link to='' className="title">Bureau - Architecture Studio Website</Link>
                            </h2>
                        </div>
                    </AnimateWhileInView>
                </div>
            </div>
            <InfoModal show={showModal} setShow={setShowModal} />
        </>
    );
}

export default Portfolio;