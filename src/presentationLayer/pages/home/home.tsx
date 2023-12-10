import React, { useEffect, useState, useRef } from 'react';
import Introduction from './components/introduction';
import About from './components/about';
import Resume from './components/resume';
import Services from './components/services';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import Testimonial from './components/testimonial';
import Contact from './components/contact';
import { LeftSidebar } from '../../partialsComponents/leftSidebar';
import { RightSideBar } from '../../partialsComponents/rightSiderbar';
import { RightMenu } from '../../partialsComponents/rightMenu';
import { PageLoader } from '../../partialsComponents/pageLoader';
import { usePageSectionController } from '../../utils/usePageSectionController';
import { InView } from 'react-intersection-observer';
import { RootState } from '../../redux/store/store';
import { useSelector } from 'react-redux';

export const Home: React.FC = (): JSX.Element => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const pageSectionController = usePageSectionController();
    const pageScroll = useSelector((state: RootState) => state.pageSection.pageScroll);

    const sections = [
        { component: <Introduction /> },
        { component: <About /> },
        { component: <Resume /> },
        { component: <Services /> },
        { component: <Skills /> },
        { component: <Portfolio /> },
        { component: <Testimonial /> },
        { component: <Contact /> },
    ]

    const updatePageSection = (inView: boolean, index: number): void => {
        if (inView && pageScroll)
            pageSectionController.updateSectionIndex(index);
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 100)
    }, [])

    return (
        <>
            <div className='left-sidebar-wrapper'>
                <LeftSidebar />
            </div>
            <div className='centered-sidebar-wrapper'>
                <LeftSidebar />
            </div>
            <div className='main'>
                <div className='content'>
                    {sections.map((section, index) => (
                        <InView className='scrollto-section' threshold={0.5} onChange={(inView) => updatePageSection(inView, index)} key={index}>
                            {section.component}
                        </InView>
                    ))}
                </div>
            </div>
            <RightSideBar />
            <RightMenu />
            <PageLoader isLoaded={isLoaded} />
        </>
    );
}