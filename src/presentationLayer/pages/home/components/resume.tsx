import { SectionBadge } from "../../../utils/sectionBadge";
import { HiOutlineBriefcase } from "react-icons/hi";

const Resume: React.FC = (): JSX.Element => {
    return (
        <>
            <div className="resume">
                <SectionBadge title='Resume' icon={<HiOutlineBriefcase className='icon' size={14} color='#fff' />} />
                <h1 className="section-title">
                    Education &
                    <span> Experience</span>
                </h1>
                <div className="specs">
                    <div className="spec">
                        <span className="date">2020 - Present</span>
                        <h2>Framer Desinger & Developer</h2>
                        <p>Brunodee Agency</p>
                        <h2>Framer Desinger & Developer</h2>
                        <p>Brunodee Agency</p>
                    </div>
                    <div className="spec">
                        <span className="date">2020 - Present</span>
                        <h2>Framer Desinger & Developer</h2>
                        <p>Brunodee Agency</p>
                        <h2>Framer Desinger & Developer</h2>
                        <p>Brunodee Agency</p>
                    </div>
                    <div className="spec last">
                        <span className="date">2020 - Present</span>
                        <h2>Framer Desinger & Developer</h2>
                        <p>Brunodee Agency</p>
                        <h2>Framer Desinger & Developer</h2>
                        <p>Brunodee Agency</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Resume;