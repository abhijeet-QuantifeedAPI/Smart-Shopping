import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router-dom";
import ProductCard from "../common/ProductCard";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions";
import { getVisibleProducts } from "../../store/reducers/products";
import { capitalizeFirstLetter } from "../../utils/common";

const CategoryPage = (props) => {
  const { addToCart, products } = props;
  let { id = "" } = useParams();
  const catProducts = products.filter((p) => p.category === id);

  const handleAddToCart = (id) => {
    addToCart(id);
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        {capitalizeFirstLetter(id)}
      </Typography>
      <Grid container spacing={3}>
        {catProducts.map((product) => {
          return (
            <Grid item xs={3} key={product.id}>
              <ProductCard
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                weight={product.weight}
                offerPercent={product.offerPercent}
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
)(CategoryPage);
