import { AnimatePresence, motion } from 'framer-motion';
import { UsePageLoaderVariants } from '../../domainLayer/framerVariants/pageLoader/useLoaderVariants';

interface PageLoaderProps {
    isLoaded: boolean
}

export const PageLoader: React.FC<PageLoaderProps> = ({isLoaded}): JSX.Element => {
    const framerVariants = UsePageLoaderVariants();
    
    return (
        <>
            <AnimatePresence mode='wait'>
                {!isLoaded &&
                    (
                        <>
                            <motion.div variants={framerVariants.loaderVariants} initial='initial' exit='exit' className='loader pc'>
                                <iframe src="https://giphy.com/embed/3AMRa6DRUhMli" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                            </motion.div>
                            <motion.div variants={framerVariants.loaderVariants} initial='initial' exit='exit' className='loader mbl'>
                                <div style={{ width: "100%", height: 0, paddingBottom: "100%", position: "relative" }}>
                                    <iframe src="https://giphy.com/embed/3AMRa6DRUhMli" width="100%" height="100%" style={{ position: "absolute" }} frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                                </div>
                            </motion.div>
                        </>
                    )
                }
            </AnimatePresence>
        </>
    );
}