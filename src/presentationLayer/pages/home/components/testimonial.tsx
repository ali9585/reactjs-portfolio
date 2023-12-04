import { useEffect, useState } from "react";
import { SectionBadge } from "../../../utils/sectionBadge";
import { LiaCommentSolid } from "react-icons/lia";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Testimonial {
    clientName: string,
    clientTitle: string,
    image: string,
    message: string
}

const Testimonial: React.FC = (): JSX.Element => {
    const [testimonials, setTestimonials] = useState<Array<Testimonial>>([]);
    const [selectedItem, setSelectedItem] = useState<number>(0);

    const handlePrevItemChange = (): void => {
        if (selectedItem !== 0)
            setSelectedItem(prev => prev - 1);
    }

    const handlenextItemChange = (): void => {
        if (selectedItem != (testimonials?.length - 1))
            setSelectedItem(prev => prev + 1);
    }

    useEffect(() => {
        const tests = [
            {
                clientName: "John doe",
                clientTitle: "ceo of <span>ibm global</span>",
                image: "https://wpriverthemes.com/HTML/drake/assets/images/testimonial-1.jpg",
                message: "Drake - A Developer with the creativity, professional and master of code. Much more than what i'm expect. High quality product & flexiable price. Recommended!",
            },
            {
                clientName: "John doe",
                clientTitle: "ceo of <span>ibm global</span>",
                image: "https://wpriverthemes.com/HTML/drake/assets/images/testimonial-1.jpg",
                message: "Drake - A Developer with the creativity, professional and master of code. Much more than what i'm expect. High quality product & flexiable price. Recommended!",
            },
            {
                clientName: "John doe",
                clientTitle: "ceo of <span>ibm global</span>",
                image: "https://wpriverthemes.com/HTML/drake/assets/images/testimonial-1.jpg",
                message: "Drake - A Developer with the creativity, professional and master of code. Much more than what i'm expect. High quality product & flexiable price. Recommended!",
            },
        ]

        setTestimonials(tests);
    }, [])


    return (
        <>
            <div className="testimonial">
                <SectionBadge title='Testimonial' icon={<LiaCommentSolid className='icon' size={15} color='#fff' />} />
                <h1 className="section-title">
                    Trusted by <span>Hundered Clients</span>
                </h1>
                <div className="slider">
                    <Carousel
                        swipeable={true}
                        emulateTouch={true}
                        showArrows={false}
                        showIndicators={false}
                        showStatus={false}
                        showThumbs={false}
                        selectedItem={selectedItem}
                        onChange={(current) => setSelectedItem(current)}
                    >
                        {testimonials?.map((item, index) => (
                            <div className="item flex flex-col items-start" key={index}>
                                <div className="author flex items-center gap-[16px]">
                                    <img src={item.image} alt="" />
                                    <div>
                                        <h3>{item.clientName}</h3>
                                        <p dangerouslySetInnerHTML={{ __html: item.clientTitle }} />
                                    </div>
                                </div>
                                <p className="review">{item.message}</p>
                                <span className="project">Project</span>
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className="arrows">
                    <button className="prev" onClick={handlePrevItemChange}>
                        <FaAngleLeft size={18} color='#fff' />
                    </button>
                    <div className="count">
                        <span>{selectedItem + 1}</span> / {testimonials?.length}
                    </div>
                    <button className="next" onClick={handlenextItemChange}>
                        <FaAngleRight size={18} color='#fff' />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Testimonial;