import { SectionBadge } from "../../../utils/sectionBadge";
import { LiaStreamSolid, LiaBezierCurveSolid } from "react-icons/lia";
import { RiComputerLine } from "react-icons/ri";
import { FaMobileAlt } from "react-icons/fa";
import { styles } from "../../../assets/style/style";

const Services: React.FC = (): JSX.Element => {
    return (
        <>
            <div className="services">
                <SectionBadge title='Services' icon={<LiaStreamSolid className='icon' size={14} color='#fff' />} />
                <h1 className="section-title">
                    My <span>Specializations</span>
                </h1>
                <div className="cards grid lg:grid-cols-1 md:grid-cols-3 sm:grid-cols-2 md:gap-[10px] sm:gap-[10px]">
                    <div className="card">
                        <h2>Backend Development</h2>
                        <p>I created digital products with unique ideas use Figma & Framer</p>
                        <span>24 Projects</span>
                        <LiaBezierCurveSolid className="icon" color={styles.appColor} />
                    </div>
                    <div className="card">
                        <h2>Frontend Development</h2>
                        <p>I created digital products with unique ideas use Figma & Framer</p>
                        <span>24 Projects</span>
                        <RiComputerLine className="icon" color={styles.appColor} />
                    </div>
                    <div className="card last">
                        <h2>Mobile App Development</h2>
                        <p>I created digital products with unique ideas use Figma & Framer</p>
                        <span>24 Projects</span>
                        <FaMobileAlt className="icon" color={styles.appColor} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;