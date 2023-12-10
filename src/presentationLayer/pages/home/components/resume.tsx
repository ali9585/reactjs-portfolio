import { SectionBadge } from "../../../utilComponents/sectionBadge";
import { HiOutlineBriefcase } from "react-icons/hi";
import { AnimateWhileInView } from "../../../utilComponents/animateWhileInView";

const Resume: React.FC = (): JSX.Element => {
    return (
        <>
            <div className="resume section">
                <AnimateWhileInView>
                    <SectionBadge title='Resume' icon={<HiOutlineBriefcase className='icon' size={14} color='#fff' />} />
                </AnimateWhileInView>
                <AnimateWhileInView>
                    <h1 className="section-title">
                        Education &
                        <span> Experience</span>
                    </h1>
                </AnimateWhileInView>
                <div className="specs">
                    <AnimateWhileInView>
                        <div className="spec">
                            <span className="date">2020 - Present</span>
                            <h2>Framer Desinger & Developer</h2>
                            <p>Brunodee Agency</p>
                            <h2>Framer Desinger & Developer</h2>
                            <p>Brunodee Agency</p>
                        </div>
                    </AnimateWhileInView>
                    <AnimateWhileInView>
                        <div className="spec">
                            <span className="date">2020 - Present</span>
                            <h2>Framer Desinger & Developer</h2>
                            <p>Brunodee Agency</p>
                            <h2>Framer Desinger & Developer</h2>
                            <p>Brunodee Agency</p>
                        </div>
                    </AnimateWhileInView>
                    <AnimateWhileInView>
                        <div className="spec">
                            <span className="date">2020 - Present</span>
                            <h2>Framer Desinger & Developer</h2>
                            <p>Brunodee Agency</p>
                            <h2>Framer Desinger & Developer</h2>
                            <p>Brunodee Agency</p>
                        </div>
                    </AnimateWhileInView>
                </div>
            </div>
        </>
    );
}

export default Resume;