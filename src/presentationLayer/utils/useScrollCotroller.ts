interface ScrollController {
    enableScroll: () => void,
    disableScroll: () => void
}

export const useScrollController = (): ScrollController => {
    const enableScroll = () => {
        document.body.style.overflow = 'visible';
    }

    const disableScroll = () => {
        document.body.style.overflow = 'hidden';
    }

    return {
        enableScroll,
        disableScroll
    };
}