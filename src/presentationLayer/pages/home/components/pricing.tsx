import { SectionBadge } from "../../../utilComponents/sectionBadge";
import { FaDollarSign } from "react-icons/fa6";

const Pricing: React.FC = (): JSX.Element => {
    return (
        <>
            <div className="pricing section">
                <SectionBadge title="Pricing" icon={<FaDollarSign className='icon' size={13} color='#fff' />} />
                <h1 className="section-title">
                    My <span>Pricing</span>
                </h1>
                <div className="grid md:grid-cols-2 sm:grid-cols-1">
                    <div className="card">
                        <div className="status flex justify-between">
                            <h4>Basic</h4>
                            <p>Have design ready to build? <br /> or small budget</p>
                        </div>
                        <div className="price">
                            <h1>
                                $49
                                <span>/ hours</span>
                            </h1>
                        </div>
                        <div className="features">
                            <ul>
                                <li>Need your wireframe</li>
                                <li>Design with Figma, Framer</li>
                                <li>Implement with Webflow, React, WordPress, Laravel/PHP</li>
                                <li>Remote/Online</li>
                                <li>Work in business days, no weekend.</li>
                                <li>Support 6 months</li>
                            </ul>
                        </div>
                        <div className="relative">
                            <button className="theme-btn">Pick This Package</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="status flex justify-between">
                            <h4>Basic</h4>
                            <p>Have design ready to build? <br /> or small budget</p>
                        </div>
                        <div className="price">
                            <h1>
                                $49
                                <span>/ hours</span>
                            </h1>
                        </div>
                        <div className="features">
                            <ul>
                                <li>Need your wireframe</li>
                                <li>Design with Figma, Framer</li>
                                <li>Implement with Webflow, React, WordPress, Laravel/PHP</li>
                                <li>Remote/Online</li>
                                <li>Work in business days, no weekend.</li>
                                <li>Support 6 months</li>
                                <li>Remote/Online</li>
                                <li>Work in business days, no weekend.</li>
                                <li>Support 6 months</li>
                            </ul>
                        </div>
                        <div className="relative">
                            <button className="theme-btn">Pick This Package</button>
                        </div>
                    </div>
                </div>
                <p className="info">
                    Don't find any package match with your plan!<br />
                    Want to setup a new tailor-made package for only you?. <span>Contact Us</span>
                </p>
            </div>
        </>
    );
}

export default Pricing;