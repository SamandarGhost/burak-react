import React from "react";
import {Box, Button, Container, InputBase, Stack} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon  from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../../css/products.css";
import { setProducts } from "./slice";
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import { Product } from "../../lib/types/product";
import { retrievevProducts } from "./selector";

/* Redux Slice and Selector */
const actionDispatch = (dispatch: Dispatch) => ({
    setProducts: (data: Product[]) => dispatch(setProducts(data)),
});
const productsRetriever = createSelector(retrievevProducts, (products) => ({
    products,
}));

const products = [
    { productName: "Cutlet",imagePath: "/img/cutlet.webp" },
    { productName: "Kebab",imagePath: "/img/kebab-fresh.webp" },
    { productName: "Kebab",imagePath: "/img/kebab.webp" },
    { productName: "Lavash",imagePath: "/img/lavash.webp" },
    { productName: "Lavash",imagePath: "/img/lavash.webp" },
    { productName: "Cutlet",imagePath: "/img/cutlet.webp" },
    { productName: "Kebab",imagePath: "/img/kebab-fresh.webp" },
    { productName: "Kebab",imagePath: "/img/kebab.webp" },
];

export default function Products() {
    return (
    <div className={"products"}>
        <Container>
            <Stack flexDirection={"column"} alignItems={"center"}>
                <Stack className={"avatar-big-box"}>
                    <Box className={"top-text"}>Burak Restaurant</Box>
                    <InputBase type="text" placeholder="  Type here..." className={"input"}/>
                    <Button className={"search-btn"} variant="contained" color="primary">
                        Search 
                        <SearchIcon/>
                    </Button>
                </Stack>

                <Stack className={"dishes-filter-section"}>
                    <Button 
                      variant={"contained"}
                      color={"primary"}
                      className={"order"}>
                        New
                    </Button>
                    <Button 
                      variant={"contained"}
                      color={"secondary"}
                      className={"order"}>
                        Price
                    </Button>
                    <Button 
                      variant={"contained"}
                      color={"secondary"}
                      className={"order"}>
                        Views
                    </Button>
                </Stack>

                <Stack className={"list-category-section"}>
                    <Stack className={"product-category"}>
                        <div className={"category-main"}>
                            <Button className={"filter-btn"} variant={"contained"} color={"secondary"}>
                                Other
                            </Button>
                            <Button className={"filter-btn"} variant={"contained"} color={"secondary"}>
                                Dessert
                            </Button>
                            <Button className={"filter-btn"} variant={"contained"} color={"secondary"}>
                                Drink
                            </Button>
                            <Button className={"filter-btn"} variant={"contained"} color={"secondary"}>
                                Salad
                            </Button>
                            <Button className={"filter-btn"} variant={"contained"} color={"primary"}>
                                Dish
                            </Button>
                        </div>
                    </Stack>

                    <Stack className={"product-wrapper"}>
                    {products.length!== 0 ? (
                            products.map((product, index) => {
                                return ( 
                                <Stack key={index} className={"product-card"}>
                                    <Stack
                                      className={"product-img"}
                                      sx={{backgroundImage: `url(${product.imagePath})`}}
                                     >
                                        <div className={"product-sale"}>Normal size</div>
                                        <Button className={"shop-btn"}>
                                            <img src={"/icons/shopping-cart.svg"}
                                              style={{display: "flex"}} />
                                        </Button>
                                        <Button className={"views-btn"}>
                                            <Badge badgeContent={20} color="secondary">
                                                <RemoveRedEyeIcon className={"eye-btn"}
                                                  sx={{
                                                    color: 20 ? "gray" : "white",
                                                  }} />
                                            </Badge>
                                        </Button>
                                     </Stack>
                                     <Box className={"product-desc"}>
                                        <span className={"product-title"}>
                                            {product.productName}
                                        </span>
                                        <div className={"product-des"}>
                                           <MonetizationOnIcon />
                                            {12}
                                        </div>
                                     </Box>
                                </Stack>
                                );
                            }) ) : (<Box className={"no-data"}> No Product List!!</Box>)}
                    </Stack>
                </Stack>

                <Stack className={"pagination-section"}>
                    <Pagination 
                      count={3}
                      page={1}
                      renderItem={(item) => (
                      <PaginationItem 
                        components={{
                          previous: ArrowBackIcon,
                          next: ArrowForwardIcon,
                      }} 
                      {...item}
                      color={"secondary"}
                      />
                    )}
                    />
                </Stack>
            </Stack>
        </Container>

        <div className={"brands-logo"}>
            <Container className={"family-brands"}>
                <Box className={"category-title"}>Our Family Brands</Box>
                <Stack className={"brand-list"}>
                    <Box className={"review-box"}>
                        <img src={"/img/gurme.webp"} />
                    </Box>

                    <Box className={"review-box"}>
                        <img src={"/img/gurme.webp"} />
                    </Box>

                    <Box className={"review-box"}>
                        <img src={"/img/gurme.webp"} />
                    </Box>

                    <Box className={"review-box"}>
                        <img src={"/img/gurme.webp"} />
                    </Box>
                </Stack>
                    
            </Container>
        </div>

        <div className={"address"}>
            <Container>
                <Stack className={"address-area"}>
                    <Box className={"title"}>Our Address</Box>
                    <iframe
                      style={{marginTop: "60px"}}
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1581.9573897862667!2d126.99419083893493!3d37.53350611999727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2363a08fae9%3A0xb0cbcaa2a1b0a156!2sLazzat!5e0!3m2!1sen!2skr!4v1721257612631!5m2!1sen!2skr"
                      width="1320"
                      height="500"
                      referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                </Stack>
            </Container>
        </div>
    </div>
);
}