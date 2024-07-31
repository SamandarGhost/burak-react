import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../lib/types/screen";

const initialState: HomePageState = {
    popularDishes: [],
    newDishes: [],
    topUsers: [],
};

const homePageSlice = createSlice({
    name: "homePage",
    initialState,
    // @ts-ignore
    reducer: {
        // @ts-ignore
        setPopularDishes: (state, action) => {
            state.popularDishes = action.payload;
        },
        // @ts-ignore
        setNewDishes: (state, action) => {
            state.newDishes = action.payload;
        },
        // @ts-ignore
        setTopUsers: (state, action) => {
            state.topUsers = action.payload;
        },
    },
});

export const { setPopularDishes, setNewDishes, setTopUsers } = homePageSlice.actions;

const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;