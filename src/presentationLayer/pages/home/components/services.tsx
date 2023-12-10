import { SectionBadge } from "../../../utilComponents/sectionBadge";
import { LiaStreamSolid, LiaBezierCurveSolid } from "react-icons/lia";
import { RiComputerLine } from "react-icons/ri";
import { FaMobileAlt } from "react-icons/fa";
import { styles } from "../../../assets/style/style";
import { AnimateWhileInView } from "../../../utilComponents/animateWhileInView";

const Services: React.FC = (): JSX.Element => {
    return (
        <>
            <div className="services section">
                <AnimateWhileInView>
                    <SectionBadge title='Services' icon={<LiaStreamSolid className='icon' size={14} color='#fff' />} />
                </AnimateWhileInView>
                <AnimateWhileInView>
                    <h1 className="section-title">
                        My <span>Specializations</span>
                    </h1>
                </AnimateWhileInView>
                <div className="cards grid lg:grid-cols-1 md:grid-cols-3 sm:grid-cols-2 md:gap-[10px] sm:gap-[10px]">
                    <AnimateWhileInView>
                        <div className="card">
                            <h2>Backend Development</h2>
                            <p>I created digital products with unique ideas use Figma & Framer</p>
                            <span>24 Projects</span>
                            <LiaBezierCurveSolid className="icon" color={styles.appColor} />
                        </div>
                    </AnimateWhileInView>
                    <AnimateWhileInView>
                        <div className="card">
                            <h2>Backend Development</h2>
                            <p>I created digital products with unique ideas use Figma & Framer</p>
                            <span>24 Projects</span>
                            <LiaBezierCurveSolid className="icon" color={styles.appColor} />
                        </div>
                    </AnimateWhileInView>
                    <AnimateWhileInView>
                        <div className="card">
                            <h2>Backend Development</h2>
                            <p>I created digital products with unique ideas use Figma & Framer</p>
                            <span>24 Projects</span>
                            <LiaBezierCurveSolid className="icon" color={styles.appColor} />
                        </div>
                    </AnimateWhileInView>
                </div>
            </div>
        </>
    );
}

export default Services;