import { LiaHomeSolid } from "react-icons/lia";
import { SectionBadge } from "../../../utils/sectionBadge";
import { GoArrowDown } from "react-icons/go";
import { motion } from 'framer-motion';
import { UseIntroductionVariants } from '../../../../domainLayer/framerVariants/introduction/useIntroductionVariants';
import { usePageSectionController } from "../../../../appLayer/utils/usePageSectionController";

const Introduction: React.FC = (): JSX.Element => {
    const framerVariants = UseIntroductionVariants();
    const pageSectionController = usePageSectionController();

    const scrollToProjects = () => {
        pageSectionController.updateSection(5);
    }

    return (
        <>
            <div className='introduction'>
                <motion.div variants={framerVariants.sectionVariants} initial='initial' animate='slideUp'>
                    <div>
                        <SectionBadge title='Introduce' icon={<LiaHomeSolid className='icon' size={15} color='#fff' />} />
                    </div>
                    <h1 className='title'>
                        Say Hi from <span>Ali</span>,
                        <br />
                        Web and App Developer
                    </h1>
                    <p className='description'>
                        I design and code beautifully simple things and i love what i do. Just simple like that!
                    </p>
                    <div className='point-to-projects'>
                        <div className='spinner' onClick={scrollToProjects}>
                            <motion.div variants={framerVariants.spinnerVariants} initial='intial' animate='rotate'>
                                <img alt='projects' src={require('../../../assets/images/round-text.png')} />
                            </motion.div>
                            <GoArrowDown color='#fff' size={40} style={{ position: "absolute", top: 'calc(50% + -17px)' }} />
                        </div>
                    </div>
                </motion.div>
                <div className='expertise'>
                    <div>
                        <h1>10+</h1>
                        <p>
                            Years of
                            <br />
                            Experience
                        </p>
                    </div>
                    <div>
                        <h1>100+</h1>
                        <p>
                            Different Types of Projects
                            <br />
                            Completed
                        </p>
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    );
}

export default Introduction;