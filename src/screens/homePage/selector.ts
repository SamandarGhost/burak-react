import { createSelector } from "@reduxjs/toolkit";
 import { AppRootState } from "../../lib/types/screen";
import { create } from "@mui/material/styles/createTransitions";
import HomePage from ".";

 const selectHomePage = (state: AppRootState) => state.homePage;

 export const retrievevPopularDishes = createSelector(
    selectHomePage,
    (HomePage) => HomePage.popularDishes
 );

 export const retrievevNewDishes = createSelector(
    selectHomePage,
    (HomePage) => HomePage.newDishes
 );

 export const retrieveTopUsers = createSelector(
    selectHomePage,
    (HomePage) => HomePage.topUsers
 );