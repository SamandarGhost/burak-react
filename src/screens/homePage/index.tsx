import React, { useEffect } from 'react';
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../css/home.css";
import { useDispatch, useSelector } from 'react-redux';
import { setPopularDishes } from './slice'; 
import { retrievevPopularDishes } from './selector';
import { createSelector, Dispatch } from '@reduxjs/toolkit';
import { Product } from '../../lib/types/product';

/* REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
    setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});
const popularDishesRetriever = createSelector(
    retrievevPopularDishes,
    (popularDishes) => ({popularDishes})
);
export default function HomePage() {
    // Selector: Store => Data -> datalarni componentda ishlatish
  const { setPopularDishes} = actionDispatch(useDispatch());
  const {popularDishes} = useSelector(popularDishesRetriever)

    useEffect(() => {}, [])

    return (<div className={"homepage"}>
        <Statistics />
        <PopularDishes />
        <NewDishes />
        <Advertisement />
        <ActiveUsers />
        <Events />
    </div>);
  }