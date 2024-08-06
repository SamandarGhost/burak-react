import { createSelector } from "@reduxjs/toolkit";
import { AppRootState } from "../../lib/types/screen";
import ProductsPage from ".";

 const selectProductsPage = (state: AppRootState ) => state.productsPage;

 export const retrievevRestaurant = createSelector(
    selectProductsPage,
    (ProductsPage) => ProductsPage.restaurant
 );

 export const retrievevChoosenProduct = createSelector(
    selectProductsPage,
    (ProductsPage) => ProductsPage.choosenProduct
 );

 export const retrievevProducts = createSelector(
    selectProductsPage,
    (ProductsPage) => ProductsPage.products
 );