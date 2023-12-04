import { useRef } from "react";
import { SectionBadge } from "../../../utils/sectionBadge";
import { AiOutlineMail } from "react-icons/ai";
import { TbCloudUpload } from "react-icons/tb";

const Contact: React.FC = (): JSX.Element => {
    const inputRef = useRef<HTMLInputElement>(null);

    const toggleInput = (): void => {
        inputRef.current?.click();
    }

    return (
        <>
            <div className="contact">
                <SectionBadge title="Contact" icon={<AiOutlineMail className='icon' size={15} color='#fff' />} />
                <h1 className="section-title">
                    Let's Work <span>Together!</span>
                </h1>
                <h3 className="mail">alikhan@hello.com</h3>
                <form className="grid gap-[20px]">
                    <input className="md:col-span-1 sm:col-span-2 col-span-2" type="text" placeholder="Name" />
                    <input className="md:col-span-1 sm:col-span-2 col-span-2" type="text" placeholder="Email" />
                    <input className="md:col-span-1 sm:col-span-2 col-span-2" type="text" placeholder="Phone" />
                    <input className="md:col-span-1 sm:col-span-2 col-span-2" type="text" placeholder="Subject" />
                    <textarea className="col-span-2" name="" id="" placeholder="Message"></textarea>
                </form>
                <div className="upload">
                    <div className="inner" onClick={toggleInput}>
                        <TbCloudUpload size={18} color='#fff' />
                        Add An Attachment
                    </div>
                    <input ref={inputRef} className="hidden" type="file" />
                </div>
                <button className="theme-btn">Send Message</button>
            </div>
        </>
    );
}

export default Contact;