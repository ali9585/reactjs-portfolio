import { SectionBadge } from "../../../utilComponents/sectionBadge";
import { LuUser2 } from "react-icons/lu";
import { motion } from "framer-motion";
import { AnimateWhileInView } from "../../../utilComponents/animateWhileInView";

const About: React.FC = (): JSX.Element => {
    return (
        <>
            <div className='about section'>
                <AnimateWhileInView>
                    <SectionBadge title='About' icon={<LuUser2 className='icon' size={14} color='#fff' />} />
                </AnimateWhileInView>
                <AnimateWhileInView>
                    <h1 className="section-title">
                        Every great design begin with
                        an even <span>better story</span>
                    </h1>
                </AnimateWhileInView>
                <AnimateWhileInView>
                    <p className="description">
                        Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.
                    </p>
                </AnimateWhileInView>
            </div>
        </>
    );
}

export default About;