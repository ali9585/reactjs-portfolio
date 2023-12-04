import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PageSectionState {
    current: number,
    pageScroll: boolean
}

const initialState: PageSectionState = {
    current: 0,
    pageScroll: true
};

const pageSectionSlice = createSlice({
    name: "pageSection",
    initialState,
    reducers: {
        changePageSection: (state, action: PayloadAction<number>) => {
            state.current = action.payload;
        },
        enableScroll: (state) => {
            state.pageScroll = true;
        },
        disableScroll: (state) => {
            state.pageScroll = false;
        },
    }
});

export const { changePageSection, enableScroll, disableScroll } = pageSectionSlice.actions;

export default pageSectionSlice.reducer;