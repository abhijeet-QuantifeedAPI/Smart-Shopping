import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router-dom";
import ProductCard from "../common/ProductCard";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions";
import { getVisibleProducts } from "../../store/reducers/products";
import { capitalizeFirstLetter } from "../../utils/common";

const DealPage = (props) => {
  const { addToCart, products } = props;
  let { offerPercent = 0 } = useParams();
  const dealProducts = products.filter(
    (p) => p.offerPercent === Number(offerPercent)
  );
  const handleAddToCart = (id) => {
    console.log("id", id);
    addToCart(id);
  };
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Deals Upto {capitalizeFirstLetter(offerPercent)}% Offer
      </Typography>
      <Grid container spacing={3}>
        {dealProducts.map((product) => {
          return (
            <Grid item xs={3} key={product.id}>
              <ProductCard
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                weight={product.weight}
                offerPercent={Number(product.offerPercent)}
                inventory={product.inventory}
                onAddToCart={handleAddToCart}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default connect(
  (state) => ({ products: getVisibleProducts(state.products) }),
  { addToCart }
)(DealPage);
