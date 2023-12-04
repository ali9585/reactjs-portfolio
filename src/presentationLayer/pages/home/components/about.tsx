import { SectionBadge } from "../../../utils/sectionBadge";
import { LuUser2 } from "react-icons/lu";

const About: React.FC = (): JSX.Element => {
    return (
        <>
            <div className='about'>
                <SectionBadge title='About' icon={<LuUser2 className='icon' size={14} color='#fff' />} />
                <h1 className="section-title">
                    Every great design begin with
                    an even <span>better story</span>
                </h1>
                <p className="description">
                    Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.
                </p>
            </div>
        </>
    );
}

export default About;